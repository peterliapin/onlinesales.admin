import { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import {
  ContentDetailsDto,
  ContentUpdateDto,
  ContentCreateDto,
  HttpResponse,
  ProblemDetails,
} from "@lib/network/swagger-client";
import { useRequestContext } from "@providers/request-provider";
import { ContentEditContainer } from "../index.styled";
import {
  ModuleHeaderActionContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "@components/module";
import {
  Autocomplete,
  Breadcrumbs,
  Button,
  Card,
  CardContent,
  Checkbox,
  CircularProgress,
  Divider,
  Fade,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { NavigateNext, Save } from "@mui/icons-material";
import { CoreModule, rootRoute } from "@lib/router";
import { GhostLink } from "@components/ghost-link";
import { useFormik, FormikHelpers } from "formik";
import {
  TypeDefaultValues,
  ContentDetails,
  ContentEditData,
  ContentEditRestoreState,
  ContentEditorAutoSave,
} from "./types";
import {
  ContentEditValidationScheme,
  ContentEditAvailableLanguages,
  ContentEditAvailableTypes,
  ContentEditAvailableTags,
  ContentEditAvailableCategories,
  ContentEditDefaultValues,
  ContentEditMaximumImageSize,
  ContentEditAvailableAuthors
} from "./validation";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Automapper } from "@lib/automapper";
import MarkdownEditor from "@components/MarkdownEditor";
import { Id, toast } from "react-toastify";
import FileDropdown from "@components/FileDropdown";
import { buildAbsoluteUrl } from "@lib/network/utils";
import useLocalStorage from "use-local-storage";
import { RestoreDataModal } from "@components/RestoreData";
import { useDebouncedCallback } from "use-debounce";
import { ValidateFrontmatterError } from "utils/frontmatter-validator";
import { ImageData } from "@components/FileDropdown";

interface ContentEditProps {
  readonly?: boolean;
}

export const ContentEdit = (props: ContentEditProps) => {
  const networkContext = useRequestContext();
  const [editorLocalStorage, setEditorLocalStorage] = useLocalStorage<ContentEditData>(
    "onlinesales_editor_autosave",
    { data: [] },
    {
      logger: (error) => console.log(error),
    }
  );
  const { client } = networkContext;
  const { id } = useParams();
  const [wasModified, setWasModified] = useState<boolean>(false);
  const [coverWasModified, setCoverWasModified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [frontmatterState, setfrontmatterState] = useState<ValidateFrontmatterError | null>(null);
  const [restoreDataState, setRestoreDataState] = useState<ContentEditRestoreState>(
    ContentEditRestoreState.Idle
  );
  const [ showAutosaveBar, setShowAutosaveBar] = useState<boolean>(false);

  const autoSave = useDebouncedCallback((value) => {
    if (!wasModified && !coverWasModified) {
      return;
    }
    const localStorageSnapshot = { ...editorLocalStorage };
    let reference = localStorageSnapshot.data.filter((data) => data.id === id)[0];
    if (reference === undefined) {
      reference = {
        id,
        savedData: value,
        latestAutoSave: new Date(),
      } as ContentEditorAutoSave;
      localStorageSnapshot.data.push(reference);
    } else {
      (reference.latestAutoSave = new Date()), (reference.savedData = value);
    }
    setShowAutosaveBar(true);
    setTimeout(() => {
      setShowAutosaveBar(false);
    }, 3000);
    setEditorLocalStorage(localStorageSnapshot);
  }, 3000); ///TODO: User Settings

  const submit = async (values: ContentDetails, helpers: FormikHelpers<ContentDetails>) => {
    let response: HttpResponse<ContentDetailsDto, void | ProblemDetails>;
    let coverUrl = values.coverImageUrl;
    const loadingToastId = toast.loading(`${values?.id ? "Updating" : "Creating"} a post...`);
    try {
      setIsSaving(true);
      if (frontmatterState !== null){
        toast.dismiss(loadingToastId);
        toast.error(frontmatterState.errorMessage);
        return;
      }
      if (coverWasModified) {
        const blob = await (await fetch(values.coverImagePending.url!)).blob();
        const file = new File([blob], values.coverImagePending.fileName);
        const { data } = await client.api.mediaCreate({
          Image: file,
          ScopeUid: values.slug,
        });
        if (data.location === null) {
          const errMessage = "imageupload.data.location is null";
          toast.update(loadingToastId, {
            render: `Failed to ${values?.id ? "update" : "create"} post (${errMessage})`,
            type: "error",
            isLoading: false,
            autoClose: 5000,
            closeOnClick: true,
            hideProgressBar: false,
          });
        }
        coverUrl = data.location as string;
      }
      if (values?.id) {
        const content = Automapper.map<ContentDetails, ContentUpdateDto>(
          values,
          "ContentDetails",
          "ContentUpdateDto"
        );
        response = await client.api.contentPartialUpdate(Number(values.id), {
          ...content,
          coverImageUrl: coverUrl,
        });
      } else {
        const content = Automapper.map<ContentDetails, ContentCreateDto>(
          values,
          "ContentDetails",
          "ContentCreateDto"
        );
        response = await client.api.contentCreate({
          ...content,
          coverImageUrl: coverUrl,
        });
      }
      helpers.setValues(
        Automapper.map<ContentDetailsDto, ContentDetails>(
          response.data,
          "ContentDetailsDto",
          "ContentDetails"
        )
      );
      await helpers.setFieldValue("coverImagePending", 
        {url: buildAbsoluteUrl(response.data.coverImageUrl!), fileName: ""});
      toast.update(loadingToastId, {
        render: `Successfully ${values?.id ? "updated" : "created"} post`,
        type: "success",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        hideProgressBar: false,
      });
      
      setWasModified(false);
      setCoverWasModified(false);
      const localStorageSnapshot = { ...editorLocalStorage };
      localStorageSnapshot.data = localStorageSnapshot.data.filter((data) => data.id !== id);
      setEditorLocalStorage(localStorageSnapshot);
    } catch (data: any) {
      const errMessage = data.error && data.error.title;
      toast.update(loadingToastId, {
        render: `Failed to ${values?.id ? "update" : "create"} post (${errMessage})`,
        type: "error",
        isLoading: false,
        autoClose: 5000,
        closeOnClick: true,
        hideProgressBar: false,
      });
    } finally {
      setIsSaving(false);
      helpers.setSubmitting(false);
    }
  };
  const formik = useFormik({
    validationSchema: toFormikValidationSchema(ContentEditValidationScheme),
    initialValues: ContentEditDefaultValues[0].defaultValues,
    onSubmit: submit,
    validateOnChange: false,
  });

  const valueUpdate = (event: React.SyntheticEvent<Element, Event>) => {
    setWasModified(true);
    formik.handleChange(event);
  };

  function autoCompleteValueUpdate<UpdateType>(field: string, value: UpdateType): void {
    setWasModified(true);
    formik.setFieldValue(field, value);
  }

  const typeFieldUpdate = (event: React.SyntheticEvent<Element, Event>, value: string | null) => {
    let template: TypeDefaultValues;
    let typeName: string;
    if (value === null) {
      template = ContentEditDefaultValues.filter((v) => v.type == "Blog Post")[0];
      typeName = template.defaultValues.type;
    } else {
      template = ContentEditDefaultValues.filter((v) => v.type == value)[0];
      typeName = value;
    }
    // Override 'type' because otherwise it always would be 'Other' in case of failure type set
    if (template !== null){
      formik.setValues({ ...template.defaultValues, type: typeName });
    }
    setWasModified(true);
  };

  const onCoverImageChange = (url: ImageData) => {
    formik.setFieldValue("coverImagePending", url);
    console.log(url);
    setCoverWasModified(true);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const localStorageSnapshot = { ...editorLocalStorage };
        switch (restoreDataState) {
        case ContentEditRestoreState.Idle:
          if (localStorageSnapshot.data.filter((data) => data.id === id).length > 0) {
            setRestoreDataState(ContentEditRestoreState.Requested);
            return;
          }
          break;
        case ContentEditRestoreState.Requested:
          return;
        case ContentEditRestoreState.Rejected:
          localStorageSnapshot.data = localStorageSnapshot.data.filter((data) => data.id !== id);
          setEditorLocalStorage(localStorageSnapshot);
          break;
        case ContentEditRestoreState.Accepted:
          await formik.setValues(
            localStorageSnapshot.data.filter((data) => data.id === id)[0].savedData
          );
          if (localStorageSnapshot.data.filter((data) => data.id === id)[0]
            .savedData.coverImagePending.fileName.length > 0){
            setCoverWasModified(true);
          }
          setWasModified(true);
          return;
        }
        if (client && id) {
          const { data } = await client.api.contentDetail(Number(id));
          await formik.setValues(
            Automapper.map<ContentDetailsDto, ContentDetails>(
              data,
              "ContentDetailsDto",
              "ContentDetails"
            )
          );
          await formik.setFieldValue("coverImagePending", 
            {url: buildAbsoluteUrl(data.coverImageUrl!), fileName: ""});
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [client, id, restoreDataState]);

  useEffect(() => {
    autoSave(formik.values);
  }, [formik.values]);

  return (
    <>
      <RestoreDataModal
        isOpen={restoreDataState === ContentEditRestoreState.Requested}
        onClose={(value) =>
          value
            ? setRestoreDataState(ContentEditRestoreState.Accepted)
            : setRestoreDataState(ContentEditRestoreState.Rejected)
        }
      />
      <ModuleHeaderContainer>
        <ModuleHeaderSubtitleContainer>
          <Grid 
            container 
            direction="row" 
            justifyContent="space-between"
          >
            <Grid item>
              <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
                <Link to={rootRoute} component={GhostLink} underline="hover">
                  Dashboard
                </Link>
                <Link to={`${rootRoute}${CoreModule.blog}`} component={GhostLink} underline="hover">
                  Blog
                </Link>
                <Typography variant="body1">{formik.values.title}</Typography>
              </Breadcrumbs>
            </Grid>
            <Fade in={showAutosaveBar}>
              <Grid container item spacing={3} sm="auto" xs="auto">
                <Grid item>
                  <CircularProgress size={14}/>
                </Grid>
                <Grid item>
                  <Typography>
                    Saving...
                  </Typography>
                </Grid>
              </Grid>
            </Fade>
          </Grid>
        </ModuleHeaderSubtitleContainer>
        <ModuleHeaderActionContainer></ModuleHeaderActionContainer>
      </ModuleHeaderContainer>
      <ContentEditContainer>
        {isLoading && <div>Loading...</div>}
        {isSaving && <div>Saving...</div>}
        {!isLoading && (
          <form onSubmit={formik.handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={1} xs={12} sm={12}>
                  <Grid container item spacing={4} xs={6} sm={6}>
                    <Grid xs={12} sm={12} item>
                      <Autocomplete
                        freeSolo
                        disabled={props.readonly}
                        value={formik.values.type}
                        onChange={typeFieldUpdate}
                        autoSelect={true}
                        options={ContentEditAvailableTypes}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Type"
                            name="type"
                            placeholder="Select Type"
                            variant="outlined"
                            error={formik.touched.type && Boolean(formik.errors.type)}
                            helperText={formik.touched.type && formik.errors.type}
                          />
                        )}
                      />
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <TextField
                        disabled={props.readonly}
                        label="Title"
                        name="title"
                        value={formik.values.title}
                        placeholder="Enter title"
                        variant="outlined"
                        onChange={valueUpdate}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        fullWidth
                      ></TextField>
                    </Grid>
                    <Grid xs={12} sm={12} item>
                      <TextField
                        disabled={props.readonly}
                        label="Description"
                        name="description"
                        value={formik.values.description}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        multiline={true}
                        minRows={3}
                        placeholder="Enter description"
                        variant="outlined"
                        onChange={valueUpdate}
                        fullWidth
                      ></TextField>
                    </Grid>
                  </Grid>
                  <Grid item xs={6} sm={6} pb={{sm: "0.7rem"}}>
                    <FileDropdown
                      onChange={onCoverImageChange}
                      acceptMIME="image/*"
                      maxFileSize={ContentEditMaximumImageSize}
                      data={formik.values.coverImagePending}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={3} xs={12} sm={12} sx={{mt: 2 }}>
                  <Grid xs={12} sm={12} item data-color-mode="light">
                    <MarkdownEditor
                      onChange={async (value) => {
                        setWasModified(true);
                        await formik.setFieldValue("body", value);
                      }}
                      onFrontmatterErrorChange={async (value) => {
                        setfrontmatterState(value);
                      }}
                      value={formik.values.body}
                      isReadOnly={props.readonly}
                      networkContext={networkContext}
                      contentDetails={formik.values}
                    />
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <TextField
                      disabled={props.readonly}
                      label="Cover Image Alt Text"
                      name="coverImageAlt"
                      value={formik.values.coverImageAlt}
                      error={formik.touched.coverImageAlt && Boolean(formik.errors.coverImageAlt)}
                      helperText={formik.touched.coverImageAlt && formik.errors.coverImageAlt}
                      placeholder="Enter Cover Image Alt Text"
                      variant="outlined"
                      onChange={valueUpdate}
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <TextField
                      disabled={props.readonly}
                      label="Slug"
                      name="slug"
                      value={formik.values.slug}
                      error={formik.touched.slug && Boolean(formik.errors.slug)}
                      helperText={formik.touched.slug && formik.errors.slug}
                      placeholder="Enter slug"
                      variant="outlined"
                      onChange={valueUpdate}
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <Autocomplete
                      freeSolo
                      disabled={props.readonly}
                      value={formik.values.author}
                      onChange={(ev, val) => autoCompleteValueUpdate<string | null>("author", val)}
                      options={ContentEditAvailableAuthors}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Author"
                          name="author"
                          placeholder="Select Author"
                          variant="outlined"
                          error={formik.touched.author && Boolean(formik.errors.author)}
                          helperText={formik.touched.author && formik.errors.author}
                        />
                      )}
                    />
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <Autocomplete
                      freeSolo
                      disabled={props.readonly}
                      value={formik.values.language}
                      onChange={(ev, val) =>
                        autoCompleteValueUpdate<string | null>("language", val)
                      }
                      options={ContentEditAvailableLanguages}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Language"
                          placeholder="Select language"
                          variant="outlined"
                          name="language"
                          error={formik.touched.language && Boolean(formik.errors.language)}
                          helperText={formik.touched.language && formik.errors.language}
                        />
                      )}
                    />
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <Autocomplete
                      freeSolo
                      multiple
                      limitTags={3}
                      options={ContentEditAvailableTags as unknown as string[]}
                      value={formik.values.tags}
                      onChange={(ev, val) => autoCompleteValueUpdate<string[]>("tags", val)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Tags"
                          placeholder="Select Tags"
                          name="tags"
                          error={formik.touched.tags && Boolean(formik.errors.tags)}
                          helperText={formik.touched.tags && formik.errors.tags}
                        />
                      )}
                    />
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <FormControlLabel
                      label="Allow Comments"
                      control={
                        <Checkbox
                          disabled={props.readonly}
                          checked={formik.values.allowComments}
                          onChange={valueUpdate}
                          name="allowComments"
                        />
                      }
                    />
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <Autocomplete
                      freeSolo
                      multiple
                      limitTags={3}
                      options={ContentEditAvailableCategories as unknown as string[]}
                      value={formik.values.categories}
                      onChange={(ev, val) => autoCompleteValueUpdate<string[]>("categories", val)}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Categories"
                          placeholder="Select Categories"
                          name="categories"
                          error={formik.touched.categories && Boolean(formik.errors.categories)}
                          helperText={formik.touched.categories && formik.errors.categories}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    {!props.readonly && (
                      <Button
                        disabled={!(wasModified || coverWasModified)}
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                      >
                        Save
                      </Button>
                    )}
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </form>
        )}
      </ContentEditContainer>
    </>
  );
};

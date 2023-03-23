import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { 
  ContentDetailsDto, 
  ContentUpdateDto, 
  ContentCreateDto, 
  HttpResponse, 
  ProblemDetails
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
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { NavigateNext, Report, Save } from "@mui/icons-material";
import { CoreModule, rootRoute } from "@lib/router";
import { GhostLink } from "@components/ghost-link";
import MarkdownViewer from "@components/MarkdownViewer";
import { useFormik, FormikHelpers } from "formik";
import { 
  TypeDefaultValues, 
  ContentEditValidationScheme, 
  ContentEditAvailableLanguages, 
  ContentEditAvailableTypes,
  ContentEditAvailableTags,
  ContentEditAvailableCategories,
  ContentEditDefaultValues,
  ContentDetails
} from "./validation";
import { toFormikValidationSchema } from "zod-formik-adapter";
import { Automapper } from "@lib/automapper";
import MarkdownEditor from "@components/MarkdownEditor";
import { Id, toast } from "react-toastify";

interface ContentEditProps {
  readonly?: boolean;
}

export const ContentEdit = (props: ContentEditProps) => {
  const { client } = useRequestContext();
  const { id } = useParams();
  const [wasModified, setWasModified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);


  const submit = async (values: ContentDetails, helpers : FormikHelpers<ContentDetails>) => {
    let response : HttpResponse<ContentDetailsDto, void | ProblemDetails>;
    const loadingToastId = toast.loading(`${values?.id ? "Updating" : "Creating"} a post...`);
    try {
      setIsSaving(true);
      if (values?.id) {
        const content = Automapper.map<ContentDetails, ContentUpdateDto>(
          values,
          "ContentDetails", 
          "ContentUpdateDto"
        );
        response = await client.api.contentPartialUpdate(Number(values.id), content);
      } else{
        const content = Automapper.map<ContentDetails, ContentCreateDto>(
          values,
          "ContentDetails", 
          "ContentCreateDto"
        );
        response = await client.api.contentCreate(content);
      }
      helpers.setValues(
        Automapper.map<ContentDetailsDto, ContentDetails>(
          response.data, 
          "ContentDetailsDto", 
          "ContentDetails"
        )
      );
      toast.update(loadingToastId, 
        { 
          render: `Successfully ${values?.id ? "update" : "create"} post`,
          type: "success", 
          isLoading: false,
          autoClose: 5000,
          closeOnClick: true,
          hideProgressBar: false,
        });
    } catch (data: any) {
      const errMessage = data.error && data.error.title;
      toast.update(loadingToastId, 
        { 
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
  });

  
  const valueUpdate = (event : React.SyntheticEvent<Element, Event>) => {
    setWasModified(true);
    formik.handleChange(event);
  };
  const autoCompleteValueUpdate = (
    field : string,
    value : string | null
  ) => {
    setWasModified(true);
    formik.setFieldValue(field, value);
  };
  const autoCompleteMultipleValueUpdate = (
    field: string,
    value : string[],
  ) => {
    setWasModified(true);
    formik.setFieldValue(field, value);
  };

  const typeFieldUpdate = (event : React.SyntheticEvent<Element, Event>, value : string | null) => {
    let template : TypeDefaultValues;
    let typeName : string;
    if (value === null){
      template = ContentEditDefaultValues.filter((v) => v.type == "Other")[0];
      typeName = template.defaultValues.type;
    }else{
      template = ContentEditDefaultValues.filter((v) => v.type == value)[0] ||
      ContentEditDefaultValues.filter((v) => v.type == "Other")[0];
      typeName = value;
    }
    // Override 'type' because otherwise it always would be 'Other' in case of failure type set
    formik.setValues({ ... template.defaultValues, type: typeName });
    setWasModified(true);
  };

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (client && id) {
          const { data } = await client.api.contentDetail(Number(id));
          formik.setValues(
            Automapper.map<ContentDetailsDto, ContentDetails>(
              data, 
              "ContentDetailsDto", 
              "ContentDetails"
            )
          );
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [client, id]);

  return (
    <>
      <ModuleHeaderContainer>
        <ModuleHeaderTitleContainer>
          <Typography variant="h3">Blog</Typography>
        </ModuleHeaderTitleContainer>
        <ModuleHeaderSubtitleContainer>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
            <Link to={rootRoute} component={GhostLink} underline="hover">
              Dashboard
            </Link>
            <Link to={`${rootRoute}${CoreModule.blog}`} component={GhostLink} underline="hover">
              Blog
            </Link>
            <Typography variant="body1">
              {formik.values.title}
            </Typography>
          </Breadcrumbs>
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
                <Grid container spacing={3}>
                  <Grid xs={6} sm={6} item>
                    <Autocomplete
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
                        />
                      )}
                    />
                  </Grid>
                  <Grid xs={6} sm={6} item />
                  <Grid xs={12} sm={6} item>
                    <TextField
                      disabled={props.readonly}
                      label="Title"
                      name="title"
                      value={formik.values.title}
                      placeholder="Enter title"
                      variant="outlined"
                      onChange={valueUpdate}
                      error={formik.touched.title && Boolean(formik.errors.title)}
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
                      multiline={true}
                      minRows={3}
                      placeholder="Enter description"
                      variant="outlined"
                      onChange={valueUpdate}
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid xs={12} sm={12} item data-color-mode="light">
                    <MarkdownEditor
                      onChange={(value) => {formik.setFieldValue("body", value);}}
                      value={formik.values.body}
                      isReadOnly={props.readonly}
                    />
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <TextField
                      disabled={props.readonly}
                      label="Cover Image Url"
                      name="coverImageUrl"
                      value={formik.values.coverImageUrl}
                      error={formik.touched.coverImageUrl && Boolean(formik.errors.coverImageAlt)}
                      helperText={formik.touched.coverImageUrl && formik.errors.coverImageUrl}
                      placeholder="Enter Cover Image Url"
                      variant="outlined"
                      onChange={valueUpdate}
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <TextField
                      disabled={props.readonly}
                      label="Cover Image Alt Text"
                      name="coverImageAlt"
                      value={formik.values.coverImageAlt}
                      error={formik.touched.coverImageAlt && Boolean(formik.errors.coverImageAlt)}
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
                      placeholder="Enter slug"
                      variant="outlined"
                      onChange={valueUpdate}
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <Autocomplete
                      disabled={props.readonly}
                      value={formik.values.author}
                      onChange={(ev, val) => autoCompleteValueUpdate("author", val)}
                      options={["Author 1", "Author 2"]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Author"
                          name="author"
                          placeholder="Select Author"
                          variant="outlined"
                          error={formik.touched.author && Boolean(formik.errors.author)}
                        />
                      )}
                    />
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <Autocomplete
                      disabled={props.readonly}
                      value={formik.values.language}
                      onChange={(ev, val) => autoCompleteValueUpdate("language", val)}
                      options={ContentEditAvailableLanguages}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Language"
                          placeholder="Select language"
                          variant="outlined"
                          name="language"
                          error={formik.touched.language && Boolean(formik.errors.language)}
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
                      multiple
                      limitTags={3}
                      options={ContentEditAvailableTags as unknown as string[]}
                      value={formik.values.tags}
                      onChange={(ev, val) => autoCompleteMultipleValueUpdate("tags", val)}
                      renderInput={(params) => (
                        <TextField 
                          {...params} 
                          label="Tags" 
                          placeholder="Select Tags"
                          name="tags"
                          error={formik.touched.tags && Boolean(formik.errors.tags)}
                        />
                      )}
                    />
                  </Grid>
                  <Grid xs={6} sm={6} item>
                    <Autocomplete
                      multiple
                      limitTags={3}
                      options={ContentEditAvailableCategories as unknown as string[]}
                      value={formik.values.categories}
                      onChange={(ev, val) => autoCompleteMultipleValueUpdate("categories", val)}
                      renderInput={(params) => (
                        <TextField 
                          {...params} 
                          label="Categories" 
                          placeholder="Select Categories"
                          name="categories"
                          error={formik.touched.categories && Boolean(formik.errors.categories)}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    {!props.readonly && (
                      <Button
                        startIcon={<Save />}
                        disabled={!wasModified}
                        type="submit"
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

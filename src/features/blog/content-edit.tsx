import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentDetailsDto, ContentUpdateDto } from "../../lib/network/swagger-client";
import { useRequestContext } from "../../providers/request-provider";
import { ContentEditContainer } from "./index.styled";
import {
  ModuleHeaderActionContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "../../components/module";
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
import { CoreModule, rootRoute } from "../../lib/router";
import { GhostLink } from "../../components/ghost-link";
import MDEditor from "@uiw/react-md-editor";
import { mdPreviewFn } from "./md-preview";

interface ContentEditProps {
  readonly?: boolean;
}

export const ContentEdit = (props: ContentEditProps) => {
  const { client } = useRequestContext();
  const { id } = useParams();
  const [contentItem, setContentItem] = useState<ContentDetailsDto>();
  const [updatedContentItem, setUpdatedContentItem] = useState<ContentUpdateDto>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSaving, setIsSaving] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (client && id) {
          const { data } = await client.api.contentDetail(Number(id));
          setContentItem(data);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [client, id]);

  const updateValue = (
    fieldName: keyof ContentUpdateDto,
    value?: string | boolean | null | undefined
  ) => {
    setUpdatedContentItem((prev) => ({ ...(prev || contentItem), [fieldName]: value }));
  };

  const getValue = (fieldName: keyof ContentUpdateDto): string | boolean | null | undefined => {
    return updatedContentItem && typeof updatedContentItem[fieldName] !== "undefined"
      ? updatedContentItem[fieldName]
      : (contentItem
        ? contentItem[fieldName]
        : "");
  };

  const validate = (contentUpdateDto?: ContentUpdateDto): boolean => {
    // TODO: place for validation of ContentUpdateDto
    if (!contentUpdateDto) {
      return false;
    }
    return true;
  };

  const save = () => {
    if (!validate(updatedContentItem)) {
      return;
    }
    try {
      setIsSaving(true);

      if (contentItem?.id) {
        updatedContentItem &&
          client.api.contentPartialUpdate(contentItem.id, updatedContentItem).then((res) => {
            const { data } = res;
            setContentItem(data);
            setUpdatedContentItem(undefined);
          });
      } else {
        updatedContentItem &&
          client.api
            .contentCreate({
              title: updatedContentItem.title || "",
              body: updatedContentItem.body || "",
              author: updatedContentItem.author || "",
              allowComments: updatedContentItem.allowComments || false,
              categories: updatedContentItem.categories || "",
              tags: updatedContentItem.tags || "",
              slug: updatedContentItem.slug || "",
              type: updatedContentItem.type || "",
              description: updatedContentItem.description || "",
              language: updatedContentItem.language || "",
              coverImageAlt: updatedContentItem.coverImageAlt || "",
              coverImageUrl: updatedContentItem.coverImageUrl || "",
            })
            .then((res) => {
              const { data } = res;
              if (data) {
                setContentItem(data);
                setUpdatedContentItem(undefined);
              }
            });
      }
    } catch (e) {
      console.log(e);
    } finally {
      setIsSaving(false);
    }
  };

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
              {(updatedContentItem && updatedContentItem.title) ||
                (contentItem && contentItem.title)}
            </Typography>
          </Breadcrumbs>
        </ModuleHeaderSubtitleContainer>
        <ModuleHeaderActionContainer></ModuleHeaderActionContainer>
      </ModuleHeaderContainer>
      <ContentEditContainer>
        {isLoading && <div>Loading...</div>}
        {isSaving && <div>Saving...</div>}
        {!isLoading && !isSaving && (
          <Card>
            <CardContent>
              <Grid container spacing={3}>
                <Grid xs={6} sm={6} item>
                  <Autocomplete
                    disabled={props.readonly}
                    value={getValue("type") + ""}
                    onChange={(e, newValue) => updateValue("type", newValue)}
                    autoSelect={true}
                    options={["Product", "Case", "Other"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Type"
                        placeholder="Select Type"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid xs={6} sm={6} item />
                <Grid xs={12} sm={6} item>
                  <TextField
                    disabled={props.readonly}
                    label="Title"
                    value={getValue("title")}
                    placeholder="Enter title"
                    variant="outlined"
                    onChange={(e) => updateValue("title", e.target?.value)}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={12} item>
                  <TextField
                    disabled={props.readonly}
                    label="Description"
                    value={getValue("description")}
                    multiline={true}
                    minRows={3}
                    placeholder="Enter description"
                    variant="outlined"
                    onChange={(e) => updateValue("description", e.target?.value)}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={12} sm={12} item data-color-mode="light">
                  <MDEditor
                    aria-disabled={props.readonly}
                    hideToolbar={props.readonly}
                    height={600}
                    preview={"live"}
                    components={{ preview: mdPreviewFn }}
                    value={getValue("body") + ""}
                    onChange={(e) => {
                      !props.readonly && updateValue("body", e);
                    }}
                  />
                </Grid>
                <Grid xs={6} sm={6} item>
                  <TextField
                    disabled={props.readonly}
                    label="Cover Image Url"
                    value={getValue("coverImageUrl")}
                    placeholder="Enter Cover Image Url"
                    variant="outlined"
                    onChange={(e) => updateValue("coverImageUrl", e.target?.value)}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={6} sm={6} item>
                  <TextField
                    disabled={props.readonly}
                    label="Cover Image Alt Text"
                    value={getValue("coverImageAlt")}
                    placeholder="Enter Cover Image Alt Text"
                    variant="outlined"
                    onChange={(e) => updateValue("coverImageAlt", e.target?.value)}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={6} sm={6} item>
                  <TextField
                    disabled={props.readonly}
                    label="Slug"
                    value={getValue("slug")}
                    placeholder="Enter slug"
                    variant="outlined"
                    onChange={(e) => updateValue("slug", e.target?.value)}
                    fullWidth
                  ></TextField>
                </Grid>
                <Grid xs={6} sm={6} item>
                  <Autocomplete
                    disabled={props.readonly}
                    value={getValue("author") + ""}
                    onChange={(e, newValue) => updateValue("author", newValue)}
                    options={["Author 1", "Author 2"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Author"
                        placeholder="Select Author"
                        variant="outlined"
                      />
                    )}
                  />
                </Grid>
                <Grid xs={6} sm={6} item>
                  <Autocomplete
                    disabled={props.readonly}
                    value={getValue("language") + ""}
                    onChange={(e, newValue) => updateValue("language", newValue)}
                    options={["English", "Russian"]}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Language"
                        placeholder="Select language"
                        variant="outlined"
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
                        checked={Boolean(getValue("allowComments"))}
                        onChange={(e, newValue) => {
                          updateValue("allowComments", Boolean(newValue));
                        }}
                      />
                    }
                  />
                </Grid>
                <Grid xs={6} sm={6} item>
                  <Autocomplete
                    multiple
                    limitTags={3}
                    options={["tag 1", "tag 2", "tag 3", "tag 4"]}
                    value={(getValue("tags") + "").split(";").filter((i) => i)}
                    onChange={(e, newValue) => {
                      updateValue("tags", (newValue || []).join(";"));
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Tags" placeholder="Select Tags" />
                    )}
                  />
                </Grid>
                <Grid xs={6} sm={6} item>
                  <Autocomplete
                    multiple
                    limitTags={3}
                    options={["category 1", "category 2", "category 3", "category 4"]}
                    value={(getValue("categories") + "").split(";").filter((i) => i)}
                    onChange={(e, newValue) => {
                      updateValue("categories", (newValue || []).join(";"));
                    }}
                    renderInput={(params) => (
                      <TextField {...params} label="Categories" placeholder="Select Categories" />
                    )}
                  />
                </Grid>
                <Grid item xs={12}>
                  {!props.readonly && (
                    <Button
                      startIcon={<Save />}
                      disabled={!updatedContentItem}
                      onClick={() => save()}
                    >
                      Save
                    </Button>
                  )}
                  <Button
                    startIcon={<Report />}
                    onClick={() => console.log(["updatedContentItem", updatedContentItem])}
                  >
                    Log
                  </Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        )}
      </ContentEditContainer>
    </>
  );
};

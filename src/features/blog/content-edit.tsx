import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ContentDetailsDto, ContentUpdateDto} from "../../lib/network/swagger-client";
import {useRequestContext} from "../../providers/request-provider";
import {ContentEditContainer} from "./index.styled";
import {
  ModuleHeaderActionContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer
} from "../../components/module";
import {Breadcrumbs, Card, CardContent, Grid, Link, TextField, Typography} from "@mui/material";
import {NavigateNext} from "@mui/icons-material";
import {CoreModule, rootRoute} from "../../lib/router";
import {GhostLink} from "../../components/ghost-link";
import MDEditor from '@uiw/react-md-editor';

interface ContentEditProps {
  readonly?: boolean;
}

export const ContentEdit = (props: ContentEditProps) => {
  const {client} = useRequestContext();
  const {id} = useParams();
  const [contentItem, setContentItem] = useState<ContentDetailsDto>();
  const [updatedContentItem, setUpdatedContentItem] = useState<ContentUpdateDto>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (client && id) {
          const {data} = await client.api.contentDetail(Number(id));
          setContentItem(data);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [client, id])

  const updateValue = (fieldName: keyof ContentUpdateDto, value?: string) => {
    setUpdatedContentItem((prev) => ({...(prev || contentItem), [fieldName]: value}));
    console.log(["updateValue", updatedContentItem]);
  };

  const getValue = (fieldName: keyof ContentUpdateDto): string | boolean | null | undefined => {
    return updatedContentItem && typeof updatedContentItem[fieldName] !== "undefined"
      ? updatedContentItem[fieldName]
      : contentItem
        ? contentItem[fieldName]
        : "";
  }

  return (
    <>
      <ModuleHeaderContainer>
        <ModuleHeaderTitleContainer>
          <Typography variant="h3">Blog</Typography>
        </ModuleHeaderTitleContainer>
        <ModuleHeaderSubtitleContainer>
          <Breadcrumbs separator={<NavigateNext fontSize="small"/>}>
            <Link to={rootRoute} component={GhostLink} underline="hover">
              Dashboard
            </Link>
            <Link to={`${rootRoute}${CoreModule.blog}`} component={GhostLink} underline="hover">
              Blog
            </Link>
            <Typography
              variant="body1">{(updatedContentItem && updatedContentItem.title) || (contentItem && contentItem.title)}</Typography>
          </Breadcrumbs>
        </ModuleHeaderSubtitleContainer>
        <ModuleHeaderActionContainer>
        </ModuleHeaderActionContainer>
      </ModuleHeaderContainer>
      <ContentEditContainer>
        {
          isLoading
            ? <div>Loading...</div>
            : <Card>
              <CardContent>
                <Grid container spacing={3}>
                  <Grid xs={12} sm={6} item>
                    <TextField
                      disabled={props.readonly}
                      label="Title"
                      name="title"
                      value={getValue("title")}
                      placeholder="Enter title"
                      variant="outlined"
                      onChange={(e) => updateValue("title", e.target?.value)}
                      fullWidth
                    ></TextField>
                  </Grid>
                  <Grid item xs={6}></Grid>
                  <Grid xs={12} sm={12} item>
                    <MDEditor
                      aria-disabled={props.readonly}
                      minHeight={600}
                      preview={"live"}
                      contentEditable={!props.readonly}
                      value={getValue("body") + ''}
                      onChange={(e) => {
                        !props.readonly && updateValue("body", e)
                      }}/>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
        }

      </ContentEditContainer>
    </>
  );
};

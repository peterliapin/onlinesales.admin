import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {ContentDetailsDto} from "../../lib/network/swagger-client";
import {useRequestContext} from "../../providers/request-provider";
import {ContentEditContainer} from "./index.styled";
import {
  ModuleHeaderActionContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer
} from "../../components/module";
import {Breadcrumbs, Link, Typography} from "@mui/material";
import {NavigateNext} from "@mui/icons-material";
import {CoreModule, rootRoute} from "../../lib/router";
import {GhostLink} from "../../components/ghost-link";

interface ContentEditProps {
  readonly?: boolean;
}

export const ContentEdit = (props: ContentEditProps) => {
  const {client} = useRequestContext();
  const {id} = useParams();
  const [contentItem, setContentItem] = useState<ContentDetailsDto>();
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
            <Typography variant="body1">{contentItem && contentItem.title}</Typography>
          </Breadcrumbs>
        </ModuleHeaderSubtitleContainer>
        <ModuleHeaderActionContainer>
        </ModuleHeaderActionContainer>
      </ModuleHeaderContainer>
      <ContentEditContainer>
        {contentItem && JSON.stringify(contentItem)}
        {isLoading && <div>Loading...</div>}
      </ContentEditContainer>
    </>
  );
};

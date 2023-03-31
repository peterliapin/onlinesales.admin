import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ContentDetailsDto } from "../../lib/network/swagger-client";
import { useRequestContext } from "../../providers/request-provider";
import {
  AuthorContainer,
  ContentEditContainer,
  ContentItemContainer,
  CoverImage,
  DescriptionContainer,
  HeaderContainer,
  TagsContainer,
  TimestampContainer,
  TitleContainer,
} from "./index.styled";
import {
  ModuleHeaderActionContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "../../components/module";
import { Breadcrumbs, Chip, Link, Typography } from "@mui/material";
import { NavigateNext } from "@mui/icons-material";
import { CoreModule, rootRoute } from "../../lib/router";
import { GhostLink } from "../../components/ghost-link";
import MarkdownViewer from "@components/MarkdownViewer";
import { CommentList } from "./comment/comment-list";

const coreApi = process.env.CORE_API;

export const ContentView = () => {
  const { client } = useRequestContext();
  const { id } = useParams();
  const [contentItem, setContentItem] = useState<ContentDetailsDto>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  return (
    <>
      <ModuleHeaderContainer>
        <ModuleHeaderSubtitleContainer>
          <Breadcrumbs separator={<NavigateNext fontSize="small" />}>
            <Link to={rootRoute} component={GhostLink} underline="hover">
              Dashboard
            </Link>
            <Link to={`${rootRoute}${CoreModule.blog}`} component={GhostLink} underline="hover">
              Blog
            </Link>
            <Typography variant="body1">{contentItem && contentItem.title}</Typography>
          </Breadcrumbs>
        </ModuleHeaderSubtitleContainer>
        <ModuleHeaderActionContainer></ModuleHeaderActionContainer>
      </ModuleHeaderContainer>
      <ContentEditContainer>
        {isLoading && <div>Loading...</div>}
        {!isLoading && contentItem && (
          <ContentItemContainer data-color-mode="light">
            <HeaderContainer>
              <CoverImage
                src={coreApi + "" + contentItem.coverImageUrl || ""}
                alt={contentItem.coverImageAlt || ""}
              />
              <div>
                <TitleContainer>{contentItem.title}</TitleContainer>
                <TagsContainer>
                  Tags:{" "}
                  <>
                    {`${contentItem.tags || ""}`
                      .split(";")
                      .filter((i) => i)
                      .filter((v, index, items) => items.indexOf(v) === index)
                      .map((s, index) => (
                        <Chip size={"small"} key={index} label={s} variant="outlined" />
                      ))}
                  </>
                </TagsContainer>
                <TagsContainer>
                  Categories:{" "}
                  <>
                    {`${contentItem.categories || ""}`
                      .split(";")
                      .filter((i) => i)
                      .filter((v, index, items) => items.indexOf(v) === index)
                      .map((s, index) => (
                        <Chip size={"small"} key={index} label={s} variant="outlined" />
                      ))}
                  </>
                </TagsContainer>
                <AuthorContainer>Author: {contentItem.author}</AuthorContainer>
                <TimestampContainer>
                  Updated:{" "}
                  {contentItem.updatedAt && new Date(contentItem.updatedAt).toLocaleDateString()}
                </TimestampContainer>
                <DescriptionContainer>Description: {contentItem.description}</DescriptionContainer>
              </div>
            </HeaderContainer>
            <MarkdownViewer source={contentItem.body} />

            {contentItem.allowComments && (
              <>
                <hr />
                <CommentList contentId={contentItem.id} />
              </>
            )}
          </ContentItemContainer>
        )}
      </ContentEditContainer>
    </>
  );
};

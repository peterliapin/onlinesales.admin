import {
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia, Link,
  Typography
} from "@mui/material";
import {ContentDetailsDto} from "lib/network/swagger-client";
import {ContentListContainer} from "./index.styled";
import React, {useEffect, useState} from "react";
import {
  ModuleHeaderActionContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer, ModuleHeaderTitleContainer
} from "../../components/module";
import {NavigateNext} from "@mui/icons-material";
import {rootRoute} from "../../lib/router";
import {GhostLink} from "../../components/ghost-link";
import {useRequestContext} from "../../providers/request-provider";

type ContentListProps = {
};

export const ContentList = (props: ContentListProps) => {

  const {client} = useRequestContext();
  const [contentItems, setContentItems] = useState<ContentDetailsDto[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const {data} = await client.api.contentList();
        setContentItems(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [client]);

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
            <Typography variant="body1">Blog</Typography>
          </Breadcrumbs>
        </ModuleHeaderSubtitleContainer>
        <ModuleHeaderActionContainer>
          <Button variant="contained">Add</Button>
        </ModuleHeaderActionContainer>
      </ModuleHeaderContainer>
      <ContentListContainer>
        {isLoading && <div>Loading...</div>}
        {
          (contentItems || [])
            .map((item, index) =>
              <Card key={`card-${index}`} sx={{maxWidth: 345}}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={item.coverImageUrl || ""}
                    alt={item.coverImageAlt || ""}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {(item.description || "").substring(0, 255)}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href={`${location}/${item.id}/view`}>
                    View
                  </Button>
                  <Button size="small" color="primary" href={`${location}/${item.id}/edit`}>
                    Edit
                  </Button>
                </CardActions>
              </Card>
            )
        }
      </ContentListContainer>
    </>
  );
};

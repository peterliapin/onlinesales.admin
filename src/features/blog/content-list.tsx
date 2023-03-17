import {
  Breadcrumbs,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { ContentDetailsDto } from "lib/network/swagger-client";
import { ContentListContainer, SearchBoxContainer, TimestampContainer } from "./index.styled";
import React, { useEffect, useState } from "react";
import {
  ModuleHeaderActionContainer,
  ModuleHeaderContainer,
  ModuleHeaderSubtitleContainer,
  ModuleHeaderTitleContainer,
} from "../../components/module";
import { Add, NavigateNext } from "@mui/icons-material";
import { rootRoute } from "../../lib/router";
import { GhostLink } from "../../components/ghost-link";
import { useRequestContext } from "../../providers/request-provider";

const coreApi = process.env.CORE_API;

export const ContentList = () => {
  const { client } = useRequestContext();
  const [contentItems, setContentItems] = useState<ContentDetailsDto[]>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    (async () => {
      const controller = new AbortController();
      try {
        setIsLoading(true);
        setContentItems([]);

        // todo: uncomment and improve after [where][like] implementation
        // const filter = searchText
        //   ? { "filter[where][title][like]=": searchText }
        //   : {}
        const filter = searchText ? { query: searchText } : undefined;
        const { data } = await client.api.contentList(filter, {
          signal: controller.signal,
        });
        setContentItems(data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }

      return () => {
        controller.abort();
      };
    })();
  }, [client, searchText]);

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
            <Typography variant="body1">Blog</Typography>
          </Breadcrumbs>
        </ModuleHeaderSubtitleContainer>
        <ModuleHeaderActionContainer>
          <Button variant="contained" href={`${location}/new`} startIcon={<Add />}>
            Add new content
          </Button>
        </ModuleHeaderActionContainer>
      </ModuleHeaderContainer>
      <SearchBoxContainer>
        <TextField
          variant={"outlined"}
          placeholder={"Search by title"}
          value={searchText}
          onChange={(e) => e.target && setSearchText(e.target.value)}
          size={"small"}
        />
      </SearchBoxContainer>
      <ContentListContainer>
        {isLoading && <div>Loading...</div>}
        {!isLoading && (!contentItems || contentItems.length === 0) && <div>No resultes</div>}
        <Grid container spacing={2}>
          {(contentItems || []).map((item, index) => (
            <Card
              key={`card-${index}`}
              sx={{ width: 345 }}
              style={{
                marginRight: "2em",
                marginBottom: "2em",
                position: "relative",
              }}
              variant="outlined"
            >
              <CardActionArea style={{ marginBottom: 50 }} href={`${location}/view/${item.id}`}>
                <CardMedia
                  component="img"
                  height="140"
                  image={coreApi + "" + item.coverImageUrl || ""}
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
              <CardActions style={{ position: "absolute", bottom: 0, width: "100%" }}>
                <Grid container spacing={1}>
                  <Grid item xs={6}>
                    <Button size="small" color="primary" href={`${location}/view/${item.id}`}>
                      View
                    </Button>
                    <Button size="small" color="primary" href={`${location}/edit/${item.id}`}>
                      Edit
                    </Button>
                  </Grid>
                  <Grid item xs={6} style={{ display: "flex", justifyContent: "flex-end" }}>
                    <TimestampContainer>
                      {item.createdAt && new Date(item.createdAt).toLocaleDateString()}
                    </TimestampContainer>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </ContentListContainer>
    </>
  );
};

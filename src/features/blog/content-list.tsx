import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { ContentDetailsDto } from "@lib/network/swagger-client";
import { ContentListContainer, TimestampContainer } from "./index.styled";
import React, { useEffect, useState } from "react";
import { Add, Upload, Download } from "@mui/icons-material";
import { useRequestContext } from "@providers/request-provider";
import { SearchBar } from "@components/search-bar";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { blogBreadcrumbLinks } from "@features/blog/constants";

const coreApi = process.env.CORE_API;

export const ContentList = () => {
  const {
    setBreadcrumbs,
    setCurrentBreadcrumb,
    setLeftContainerChildren,
    setExtraActionsContainerChildren,
    setAddButtonContainerChildren,
    setBusy,
  } = useModuleWrapperContext();

  const { client } = useRequestContext();
  const [contentItems, setContentItems] = useState<ContentDetailsDto[]>();
  const [searchText, setSearchText] = useState<string>("");

  const searchBar = (
    <SearchBar
      setSearchTermOnChange={(value) => setSearchText(value)}
      searchBoxLabel="Content"
      initialValue={searchText}
    />
  );

  const extraActions = [
    <Button key={"import-btn"} startIcon={<Upload />} disabled={true}>
      Import
    </Button>,
    <Button key={"export-btn"} startIcon={<Download />} disabled={true}>
      Export
    </Button>,
  ];

  const addButton = (
    <Button variant="contained" href={`${location}/new`} startIcon={<Add />}>
      Add content
    </Button>
  );

  useEffect(() => {
    setBreadcrumbs(blogBreadcrumbLinks);
    setCurrentBreadcrumb("Content");
    setLeftContainerChildren(searchBar);
    setExtraActionsContainerChildren(extraActions);
    setAddButtonContainerChildren(addButton);
  }, [
    setBreadcrumbs,
    setCurrentBreadcrumb,
    setLeftContainerChildren,
    setExtraActionsContainerChildren,
    setAddButtonContainerChildren,
  ]);

  useEffect(() => {
    const controller = new AbortController();

    setBusy(async () => {
      try {
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
      }
    });

    return () => {
      controller.abort();
    };
  }, [client, searchText]);

  return (
    <>
      <ContentListContainer>
        <Grid container spacing={15} justifyContent="flex-start">
          {(contentItems || []).map((item, index) => (
            <Grid item key={`card-${index}`} sm="auto" xs="auto">
              <Card
                sx={{ width: 345, height: 500 }}
                style={{
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
            </Grid>
          ))}
        </Grid>
      </ContentListContainer>
    </>
  );
};

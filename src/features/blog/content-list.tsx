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
import { ContentListContainer, TimestampContainer, ContentListWrapper } from "./index.styled";
import React, { useEffect, useState, useMemo } from "react";
import { Add, Upload, Download } from "@mui/icons-material";
import { useRequestContext } from "@providers/request-provider";
import { SearchBar } from "@components/search-bar";
import { useModuleWrapperContext } from "@providers/module-wrapper-provider";
import { blogBreadcrumbLinks } from "@features/blog/constants";
import { ModuleWrapper } from "@components/module-wrapper";
import { FixedSizeGrid as VirtualizedGrid } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

const coreApi = process.env.CORE_API;
const PADDING_SIZE = 15;

export const ContentList = () => {
  const { setBusy } = useModuleWrapperContext();
  const { client } = useRequestContext();
  const [contentItems, setContentItems] = useState<ContentDetailsDto[]>([]);
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
    const controller = new AbortController();

    setBusy(async () => {
      try {
        setContentItems([]);
        // todo: uncomment and improve after [where][like] implementation
        // const filter = searchText
        //   ? { "filter[where][title][like]=": searchText }
        //   : {}
        const filter = searchText ? { query: searchText } : { "filter[order]" : "createdAt desc"};
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
    <ModuleWrapper
      breadcrumbs={blogBreadcrumbLinks}
      currentBreadcrumb={"Content"}
      leftContainerChildren={searchBar}
      extraActionsContainerChildren={extraActions}
      addButtonContainerChildren={addButton}
    >
      <ContentListContainer>
        {contentItems.length > 0 &&
          <AutoSizer>
            {({ height, width }) => {
              const columnsCount = Math.floor(width! / (345 + PADDING_SIZE));
              return (
                <VirtualizedGrid
                  columnCount={columnsCount}
                  rowCount={contentItems.length / columnsCount}
                  columnWidth={345 + PADDING_SIZE}
                  rowHeight={500 + PADDING_SIZE}
                  height={height!}
                  width={width!}
                >
                  {({ rowIndex, columnIndex, style }) => {
                    return (
                      <ContentListWrapper
                        style={{
                          ...style,
                          left: style.left as number + PADDING_SIZE,
                          top: style.top as number + PADDING_SIZE,
                          width: style.width as number - PADDING_SIZE,
                          height: style.height as number - PADDING_SIZE
                        }}
                      >
                        <ItemCard
                          style={{}}
                          item={contentItems[(rowIndex * 2) + columnIndex]} 
                          index={(rowIndex * 2) + columnIndex}
                        />
                      </ContentListWrapper>
                    );
                  }}
                </VirtualizedGrid>
              );
            }}
          </AutoSizer>
        }
      </ContentListContainer>
    </ModuleWrapper>
  );
};


interface ItemProps {
  index: number,
  item: ContentDetailsDto,
  style: React.CSSProperties,
};

interface InnerFuncProps {
  style: React.CSSProperties,
  rest: any,
}

const innerElementType = React.forwardRef(function innerFunc(props: InnerFuncProps, ref) { return (
  <div
    ref={ref}
    style={{
      ...props.style,
      paddingLeft: PADDING_SIZE,
      paddingTop: PADDING_SIZE
    }}
    {...props.rest}
  />
);});


const ItemCard = ({item, index, style}: ItemProps) => {
  return (
    <Grid 
      item 
      key={`card-${index}`} 
      sm="auto" 
      xs="auto" 
      style={style}
    >
      <Card
        sx={{ width: 345, height: 500 }}
        style={{
          position: "relative",
        }}
        variant="outlined"
      >
        <CardActionArea 
          style={{ marginBottom: 50 }} 
          href={`${location}/view/${item.id}`}
        >
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
              <Button 
                size="small" 
                color="primary" 
                href={`${location}/view/${item.id}`}
              >
                View
              </Button>
              <Button 
                size="small" 
                color="primary" 
                href={`${location}/edit/${item.id}`}
              >
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
  );
};
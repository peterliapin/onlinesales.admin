import { styled } from "@mui/material";

export const ContentListContainer = styled("div")`
  flex-grow: 1;
`;

export const ContentEditContainer = styled("div")`
  flex-grow: 1;
`;

export const SearchBoxContainer = styled("div")`
  display: flex;
  flex-flow: row;
  align-self: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const ContentItemContainer = styled("div")`
  padding: 0 5%;
`;

export const TagsContainer = styled("div")`
  display: flex;
  flex-flow: row;
  gap: ${({ theme }) => theme.spacing(2)};
  font-size: 80%;
`;

export const AuthorContainer = styled("div")`
  font-size: 80%;
`;
export const DescriptionContainer = styled("div")`
  font-size: 80%;
`;

export const TitleContainer = styled("div")`
  font-size: 32px;
  font-weight: 500;
  width: 100%;
`;

export const CapitalizeContainer = styled("span")`
  text-transform: capitalize;
`;

export const TimestampContainer = styled("div")`
  font-size: 80%;
`;

export const CoverImage = styled("img")`
  width: 40%;
`;

export const HeaderContainer = styled("div")`
  display: flex;
  flex-flow: row;
  gap: ${({ theme }) => theme.spacing(2)};
`;

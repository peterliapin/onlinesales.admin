import { SvgIconComponent } from "@mui/icons-material";
import { GhostLink } from "components/ghost-link";
import { ListItemIconStyled, SidebarLink, SidebarLinkText } from "./index.styled";

type SidebarLinkButtonProps = {
  Icon?: SvgIconComponent;
  title: string;
  selected?: boolean;
  to: string;
};

export const SidebarLinkButton = ({ title, Icon, selected, to }: SidebarLinkButtonProps) => (
  <SidebarLink component={GhostLink} to={to} selected={selected}>
    {Icon && (
      <ListItemIconStyled>
        <Icon color={selected ? "primary" : undefined} />
      </ListItemIconStyled>
    )}
    <SidebarLinkText>{title}</SidebarLinkText>
  </SidebarLink>
);

import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import { Logout } from "@mui/icons-material";

export const AppBarStyled = styled(AppBar)`
  grid-area: header;
  position: static;
  padding-right: ${({ theme }) => theme.spacing(3)};
  padding-left: ${({ theme }) => theme.spacing(1)};
`;

export const AppBarToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

export const LogoutStyled = styled(Logout)`
  vertical-align: middle;
  cursor: pointer;
`;

const Logo = styled("svg")`
  width: 32px;
  height: 32px;
  transform: rotate(-90deg);
  flex: none;
  order: 0;
  flex-grow: 0;
  position: absolute;

  & > .vector-1 {
    position: absolute;
    width: 31.88px;
    height: 31.88px;
    left: 0.12px;
    top: 0.12px;
    background: #ffffff;
  }

  & > .vector-2 {
    position: absolute;
    width: 13.88px;
    height: 13.88px;
    left: 0.12px;
    top: 0.12px;
    background: #a1a3f6;
  }

  & > .ellipse {
    position: absolute;
    visibility: hidden;
    width: 12px;
    height: 12px;
    left: calc(50% - 12px / 2);
    top: calc(50% - 12px / 2 + 12px);
    background: #ffffff;
    transform: rotate(-90deg);
  }

  & > .rounded-rectangle {
    position: absolute;
    width: 10px;
    height: 10px;
    left: calc(50% - 10px / 2 - 2.07px);
    top: calc(50% - 10px / 2 + 5px);
    background: #ffffff;
    border-radius: 2px;
    transform: rotate(-45deg);
  }
`;

export const LogoComponent = () => (
  <Logo xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none">
    <path
      d="M18 0.123787C25.8926 1.10798 32 7.84076 32 16C32 24.8366 24.8366 32 16 
          32C7.84076 32 1.10798 25.8926 0.123787 18H4.16592C5.11807 23.6754 10.054 28 16 28C22.6274 
          28 28 22.6274 28 16C28 10.054 23.6754 5.11807 18 4.16592V0.123787Z"
      fill="white"
      className="vector1"
    />
    <path
      d="M14 0.123787C6.76256 1.02628 1.02628 6.76257 0.123787 14H4.16592C5.00895 
          8.97499 8.97499 5.00895 14 4.16592V0.123787Z"
      fill="#A1A3F6"
      className="vector2"
    />
    <rect
      x="8.92893"
      y="16"
      width="10"
      height="10"
      rx="2"
      transform="rotate(-45 8.92893 16)"
      fill="white"
      className="rectangle"
    />
    <ellipse cx="16" cy="16" rx="6" ry="6" fill="#FFFFFF" className="ellipse" />
  </Logo>
);

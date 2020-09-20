import Grid from "@material-ui/core/Grid";
import styled from "styled-components/macro";
import { ThemeProps } from "types";

export const ButtonWrapper = styled(Grid)`
  position: absolute;
  bottom: ${({ theme }: ThemeProps) => theme.spacing(2)}px;
  transition: ${({ theme }: ThemeProps) => theme.transitions.create("opacity")};
  opacity: 0;
`;

export const HeaderWrapper = styled(Grid)`
  position: absolute;
  z-index: 5;
  padding: ${({ theme }: ThemeProps) => theme.spacing(2)}px;
  transition: ${({ theme }: ThemeProps) => theme.transitions.create("opacity")};
  opacity: 0;
`;

export const StyledImageContainer = styled(Grid)`
  position: relative;
  img {
    width: 100%;
    height: auto;
    transition: ${({ theme }: ThemeProps) =>
      theme.transitions.create("filter")};
    filter: brightness(1);
  }
  &:hover {
    img {
      filter: brightness(25%);
    }
    ${ButtonWrapper} {
      opacity: 1;
    }
    ${HeaderWrapper} {
      opacity: 1;
    }
  }
`;

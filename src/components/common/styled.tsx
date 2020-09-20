import Grid, { GridProps } from "@material-ui/core/Grid";
import React, { FC } from "react";
import styled from "styled-components/macro";

const _StyledMasonry: FC<{ columns: number } & GridProps> = ({
  columns,
  ...props
}) => <Grid {...props} />;

export const StyledMasonry = styled(_StyledMasonry)`
  display: grid;
  grid-template-columns: repeat(${({ columns }) => columns}, 1fr);
`;

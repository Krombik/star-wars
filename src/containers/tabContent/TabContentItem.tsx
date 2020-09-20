import React, { FC } from "react";
import { TabItemType, ThemeProps, ThunkDispatcher } from "types";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import "styled-components/macro";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { setModal } from "redux/modal/actions";

type Props = {
  item: TabItemType;
};

const TabContentItem: FC<Props> = ({
  item: { created, url, edited, name, ...item },
}) => {
  const dispatch = useDispatch<ThunkDispatcher>();

  const handleOpen = () => {
    dispatch(setModal(true, name));
  };

  return (
    <Grid item container xs={12} md={6}>
      <Paper
        css={`
          padding: ${({ theme }: ThemeProps) => theme.spacing(2, 0)};
          width: 100%;
        `}
      >
        <Grid container item spacing={2} justify="center">
          <Grid item>
            <Typography variant="h4">{name}</Typography>
          </Grid>
          <Grid item xs={12}>
            <TableContainer>
              <Table>
                <TableBody>
                  {Object.keys(item).reduce<JSX.Element[]>(
                    (acc, key) =>
                      typeof item[key] !== "object" &&
                      (typeof item[key] !== "string" ||
                        !(item[key] as string).startsWith("http://"))
                        ? [
                            ...acc,
                            <TableRow key={key}>
                              <TableCell>
                                {key[0].toUpperCase() +
                                  key.slice(1).replace(/_/g, " ")}
                              </TableCell>
                              <TableCell align="right">{item[key]}</TableCell>
                            </TableRow>,
                          ]
                        : acc,
                    []
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" onClick={handleOpen}>
              See images
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default TabContentItem;

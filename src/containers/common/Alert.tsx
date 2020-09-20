import React, { FC, memo, useCallback } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { State, ThunkDispatcher } from "types";
import { createSelector } from "reselect";
import { useSelector, useDispatch } from "react-redux";
import { setAlert } from "redux/alert/actions";

const selectData = createSelector(
  (state: State) => state.alert.show,
  (state: State) => state.alert.severity,
  (state: State) => state.alert.text,
  (show, severity, text) => ({ show, severity, text })
);

const Alert: FC = memo(() => {
  const { show, severity, text } = useSelector(selectData);

  const dispatch = useDispatch<ThunkDispatcher>();

  const handleClose = useCallback(() => {
    dispatch(setAlert(false));
  }, []);

  return (
    <Snackbar open={show} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert
        elevation={6}
        variant="filled"
        onClose={handleClose}
        severity={severity || "error"}
      >
        {text}
      </MuiAlert>
    </Snackbar>
  );
});

export default Alert;

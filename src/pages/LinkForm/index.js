import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ShortTextIcon from "@material-ui/icons/ShortText";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "99%",
    flexGrow: 1,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function LinkForm(props) {
  const classes = useStyles();
  return (
    <>
      <br />

      <Typography component="div">
        <Box
          textAlign="center"
          fontWeight="fontWeightMedium"
          fontSize="h6.fontSize"
        >
          Create Links and share easily.
        </Box>
      </Typography>

      <br />
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Shorten your link..."
          inputProps={{ "aria-label": "Shorten your link..." }}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <Tooltip title="Short this link">
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
          >
            <ShortTextIcon />
          </IconButton>
        </Tooltip>
      </Paper>
      <br />
      <Typography component="div">
        <Box
          textAlign="center"
          fontSize="fontSize"
          fontWeight="fontWeightLight"
        >
          This project is part of an assessment, feel free to use it or inspect
          it.
        </Box>
      </Typography>
    </>
  );
}

export default LinkForm;

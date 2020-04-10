import React, { useState } from "react";
import linksService from "../../services/LinksService";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ShortTextIcon from "@material-ui/icons/ShortText";
import Tooltip from "@material-ui/core/Tooltip";
import Box from "@material-ui/core/Box";
import LinkItem from "../../components/LinkItem";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";

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
  title: {
    flexGrow: 1,
  },
}));

const Alert = (props) => {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
};

function LinkForm(props) {
  const classes = useStyles();
  const [url, setUrl] = useState("");
  const [validUrl, setValidUrl] = useState();
  const [link, setLink] = useState();
  const [errors, setErrors] = useState([]);
  const [open, setOpen] = React.useState(false);

  const isValidUrl = (str) => {
    var pattern = new RegExp(
      "^(https?:\\/\\/)?" +
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" +
        "((\\d{1,3}\\.){3}\\d{1,3}))" +
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
        "(\\?[;&a-z\\d%_.~+=-]*)?" +
        "(\\#[-a-z\\d_]*)?$",
      "i"
    );
    return pattern.test(str);
  };

  const onChangeUrlInput = (e) => {
    setUrl(e.target.value);
    const valid = e.target.value.length > 0 ? isValidUrl(e.target.value) : null;
    setValidUrl(valid);
  };

  const shortLink = async () => {
    try {
      const response = await linksService.create(url);
      console.log(response);
      setLink(response.data);
    } catch (error) {
      console.log(error.response.data.errors);
      setErrors(error.response.data.errors);
      setOpen(true);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
      <Paper
        component="form"
        className={`${classes.root} ${!validUrl ? "error" : "valid"}`}
      >
        <InputBase
          className={classes.input}
          placeholder="Shorten your link..."
          value={url}
          onChange={onChangeUrlInput}
          inputProps={{ "aria-label": "Shorten your link..." }}
        />
        <Divider className={classes.divider} orientation="vertical" />
        <Tooltip title="Short this link">
          <IconButton
            color="primary"
            className={classes.iconButton}
            aria-label="directions"
            onClick={shortLink}
          >
            <ShortTextIcon />
          </IconButton>
        </Tooltip>
      </Paper>
      <br />

      {!validUrl && (
        <Typography component="div" color="error">
          Insert a valid link.
        </Typography>
      )}
      {validUrl && !link && (
        <Typography component="div" color="secondary">
          Great! click on the button to generate.
        </Typography>
      )}

      {link && <LinkItem link={link} />}

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

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errors.map((error) => (
            <span>
              {error}
              <br />
            </span>
          ))}
        </Alert>
      </Snackbar>
    </>
  );
}

export default LinkForm;

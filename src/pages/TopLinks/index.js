import React, { useState, useEffect } from "react";

import linksService from "../../services/LinksService";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import LinkItem from "../../components/LinkItem";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function TopLinks(props) {
  const classes = useStyles();

  const [links, setLinks] = useState([]);
  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = async () => {
    try {
      const response = await linksService.topRanked();
      setLinks(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <br />
      <Typography component="div">
        <Box
          textAlign="center"
          fontWeight="fontWeightMedium"
          fontSize="h4.fontSize"
        >
          Most visited links on ell.ink in 2020
        </Box>
      </Typography>
      <br />
      <div className={classes.root}>
        <Grid container spacing={1}>
          {links.map((link, i) => (
            <Grid item xs={12} key={i}>
              <LinkItem link={link} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default TopLinks;

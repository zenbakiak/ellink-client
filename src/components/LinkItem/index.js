import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link as RouterLink } from "react-router-dom";

import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";

const placeholder = "/placeholder.jpg";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 60,
  },
  avatar: {
    backgroundColor: red[500],
  },
});

export default function LinkItem({ link }) {
  const classes = useStyles();

  const { attributes } = link;

  const shortLink = (attr) => {
    return `${process.env.REACT_APP_BASE_URL}/${attributes.slug}`;
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt={attributes.title} src={attributes.image || placeholder}>
            <CardMedia
              className={classes.media}
              image={attributes.image || placeholder}
              title={attributes.title}
            />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">{attributes.hits_count}</IconButton>
        }
        title={attributes.title}
        subheader={`By: ${attributes.author || "Unknown"}`}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {attributes.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          component={RouterLink}
          to={`/${attributes.slug}`}
          size="small"
          color="primary"
        >
          <ShareIcon /> {shortLink(attributes)}
        </Button>
      </CardActions>
    </Card>
  );
}

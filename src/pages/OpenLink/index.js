import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import linksService from "../../services/LinksService";
import CircularProgress from "@material-ui/core/CircularProgress";

function OpenLink(props) {
  const { slug } = props.match.params;
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (slug) fetchUrl(slug);
  });

  const fetchUrl = async () => {
    try {
      const response = await linksService.fetch(slug);
      const { url } = response.data.attributes;
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <Typography component="div">
        <Box
          textAlign="center"
          fontWeight="fontWeightMedium"
          fontSize="h6.fontSize"
        >
          {!loading && (
            <span>
              <br />
              The url you provided is not valid.
            </span>
          )}
          {loading && (
            <CircularProgress
              variant="indeterminate"
              value={100}
              size={24}
              thickness={4}
              {...props}
            />
          )}
        </Box>
      </Typography>

      <br />
    </>
  );
}

export default withRouter(OpenLink);

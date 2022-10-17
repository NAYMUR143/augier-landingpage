import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { InstagramFilled } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Header() {
  return (
    <Container>
      <Toolbar className={"mt-4"}>
        <h1 className={"font-ramaraja"}>Augier</h1>
        <Box sx={{ flexGrow: 1 }} />
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <InstagramFilled style={{ color: "#5A5A5A" }} />
            </Link>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <TwitterIcon fontSize={"large"} style={{ color: "#5A5A5A" }} />
            </Link>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
          >
            <Link to="/" style={{ textDecoration: "none" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                preserveAspectRatio="xMidYMid meet"
                viewBox="0 0 1200 1200"
              >
                <path
                  fill="#5A5A5A"
                  d="M454.771 10.997c-76.209-40.113-226.406 37.395-269.553 105.63c-19.222 30.534-17.862 52.538-17.862 65.022v667.874L730.602 1200l105.917-57.833V491.739L258.215 159.706c31.033-39.057 100.827-86.683 153.16-67.555l515.104 275.498l.001 724.58l106.184-57.936V309.728L454.771 10.997z"
                />
              </svg>
            </Link>
          </IconButton>
          <IconButton>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                style={{ backgroundColor: "black", color: "white" }}
                className={"font-ramaraja"}
                variant="contained"
              >
                Launch App
              </Button>
            </Link>
          </IconButton>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            edge="end"
          ></IconButton>
        </Box>
      </Toolbar>
    </Container>
  );
}

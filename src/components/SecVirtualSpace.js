import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import newyorktimesimage from "../assets/img/newyorktimes.png";
import vienna from "../assets/img/vienna.png";
import pop from "../assets/img/popp.png";
import nftboy from "../assets/img/nftyoungboy.png";
import { Container, Row, Col } from "react-bootstrap";

export default function SecVirtualSpace() {
  return (
    <>
      <div className="vrtalspaces">
        <Container>
          <Row className={"padng"}>
            <Col xs={12} lg={6} xl={6} sm={12} md={7}>
              <div className="vrtlhd">
                <span>Experience</span>
                <h1>Augier Virtual Spaces</h1>
                <p>
                  Augier's digital commerce tools are built to provide support
                  for more autonomous art businesses such as independent
                  galleries and artists
                </p>
              </div>
            </Col>
            <Col xs={12} lg={6} xl={6} sm={12} md={5}>
              <div className="vrtlbtn">
                <a className="vrbutton" href="mailto:contact@augier.art">
                  Create a World
                </a>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} lg={6} xl={6} sm={12} md={6} className={"gape"}>
              <div className="Cardsc">
                <div className="cimg">
                  <img src={newyorktimesimage} alt="" />
                  <a href="https://thesenewyorktimes.com/">
                    <button className="vrbtn">View Gallery</button>
                  </a>
                </div>
                <div className="cardtxt">
                  <h2>“These New York Times”</h2>
                  <p>
                    Gallery Exhibition for Brooklyn Artist Michael “E2SAE” Baca
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} xl={6} sm={12} md={6}>
              <div className="Cardsc">
                <div className="cimg">
                  <img src={vienna} alt="" />
                  <a href="https://www.muse.place/vht">
                    <button className="vrbtn">View Gallery</button>
                  </a>
                </div>
                <div className="cardtxt">
                  <h2>“Vienna”</h2>
                  <p>
                    Greek-architecture themed space for startup Vienna Hypertext
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} xl={6} sm={12} md={6} className={"gape"}>
              <div className="Cardsc">
                <div className="cimg">
                  <img src={nftboy} alt="" />
                  <a href="https://www.muse.place/gallardo">
                    <button className="vrbtn">View Gallery</button>
                  </a>
                </div>
                <div className="cardtxt">
                  <h2>“Gallardo”</h2>
                  <p>Made for Creative Director of AWGE, Robert Gallardo</p>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} xl={6} sm={12} md={6}>
              <div className="Cardsc">
                <div className="cimg">
                  <img src={pop} alt="" />
                  <a href="#">
                    <button className="vrbtn">View Gallery</button>
                  </a>
                </div>
                <div className="cardtxt">
                  <h2>“Pop International”</h2>
                  <p>Gallery space for Pop International Gallery in Soho</p>
                </div>
              </div>
            </Col>
          </Row>
          <div className="srvftr">
            <h1>Services & Features</h1>
            <p style={{ color: "#757575" }}>
              All entirely taking place on your custom virtual world
            </p>
            <div className="lstsc">
              <span> Auctions</span>
              <span>Sales</span>
              <span>Fractional Sales</span>
              <span>3D Modeling</span>
            </div>
            <div className="lstsc">
              <span>Internal Mic & Chat System </span>
              <span>Physical NFC Tagging</span>
            </div>
            <div className="lstsc">
              <span>Buy with Debit/Credit or Crypto </span>
              <span>Build Community</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

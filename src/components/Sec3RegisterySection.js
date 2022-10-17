import * as React from "react";
import { Grid } from "@mui/material";
import sec3Image from "../assets/img/augier.png";
import sec3Image2 from "../assets/img/augier2.png";
import VerifiedIcon from "@mui/icons-material/Verified";

import img1 from "../assets/rs1.png";
import img2 from "../assets/rs2.png";
import img3 from "../assets/rs3.png";
import { Container, Row, Col } from "react-bootstrap";

export default function Sec3RegisterySection() {
  return (
    <>
      <Container>
        <div className="agrdx">
          <div className="agrhd">
            <h1>
              Registry <VerifiedIcon color={"primary"} />
            </h1>
            <h1>Augier Index</h1>
          </div>

          <Row className={"gp"}>
            <Col lg={6} sm={12} md={12} xl={6}>
              <div className="agrdtxt dblck">
                <p>
                  The Augier index provides a jargon-free framework to allow
                  galleries to create “digital certificates” counterparts for
                  their physical artworks completely on-chain.
                </p>
              </div>
            </Col>
            <Col lg={6} sm={12} md={12} xl={6}>
              <img src={sec3Image} alt="" />
            </Col>
          </Row>
          <Row className={" gp "}>
            <Col lg={6} sm={12} md={12} xl={6}>
              <img src={sec3Image2} alt="" className="pdimg" />
            </Col>
            <Col item lg={6} sm={12} md={12} xl={6}>
              <div className="agrdtxt">
                <p>
                  By tracking ownership and transmission in an immutable history
                  on the blockchain, Augier provides a way for everyone to
                  verify ownership
                </p>
              </div>
            </Col>
          </Row>
        </div>

        {/*    Register app     */}
        <div className="rgstlte">
          <h3>Register Your Artwork on Augier</h3>
        </div>

        {/*    Cards of Register Artwork    */}
        <Container>
          <div className="rstrwrksc">
            <div className="rstrwrp">
              <img src={img1} alt="" />
              <h1>
                Upload Relevant <br /> Details
              </h1>
              <p>
                Upload photographs, past appraisals, receipts, certificates of
                authenticity, etc.
              </p>
            </div>
            <div className="rstrwrp">
              <img src={img2} alt="" />
              <h1>
                Free blockchain-secured <br /> registration
              </h1>
              <p>
                Your collection will be registered by trusted third parties who
                check your data and provenance for accuracy
              </p>
            </div>
            <div className="rstrwrp">
              <img src={img3} alt="" />
              <h1>
                Build an index <br /> for life
              </h1>
              <p>
                Your artworks are added to the public index and are endorsed as
                verified artworks while protecting privacy of ownership.
              </p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href="/" className="rgsbtn ancbtn">
              <VerifiedIcon color={"primary"} /> Register Your Artwork
            </a>
          </div>
        </Container>
      </Container>
    </>
  );
}

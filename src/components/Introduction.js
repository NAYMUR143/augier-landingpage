import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SecVirtualSpace from "./SecVirtualSpace";
import Sec3RegisterySection from "./Sec3RegisterySection";
import { Container, Row, Col } from "react-bootstrap";
import AccrFotr from "./AccrFotr";

export default function Introduction() {
  return (
    <>
      <Container>
        <div className="hrsection">
          <Row>
            <Col xs={12} lg={6} xl={6} sm={12} md={6}>
              <div className="hrtxt">
                <h1>Infrastructure for selling art online</h1>
                <p>
                  Augier leverages virtual reality and <br /> commerce tools to
                  help galleries and <br /> auction houses sell their physical
                  goods <br /> online
                </p>
                <div>
                  <a className="ancbtn" href="mailto:contact@augier.art">
                    Sell With Us
                  </a>
                </div>
              </div>
            </Col>
            <Col xs={12} lg={6} xl={6} sm={12} md={6}>
              <div className="mdl">
                <model-viewer
                  src="./model3.glb"
                  ios-src="./model3.glb"
                  alt="A 3D model of an art piece"
                  auto-rotate="false"
                  // poster="./model3.png"
                  ar="true"
                  shadow-intensity=".5"
                  ar-modes="webxr"
                  camera-controls
                  disable-zoom
                ></model-viewer>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <SecVirtualSpace />
      <Sec3RegisterySection />
      <AccrFotr />
    </>
  );
}

import React from "react";
import { Accordion, Container } from "react-bootstrap";
import { Col, Row } from "react-bootstrap";

function AccrFotr() {
  return (
    <>
      <Container>
        <div className="acrdain">
          <h1>Frequently Asked Questions</h1>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h2>What is a digital certificate?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  A digital certificate is a digital representation of a
                  physical artwork that affirms ownership and authenticity of
                  said physical work on the blockchain.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h2>Why “digital certificates” ?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Digital certificates ensure artist royalties in perpetuity,
                  increases accessibility of valued items and will create a
                  centralized index for authenticity and provenance of artworks.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h2>Where is my art stored?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  All artworks sold on the Augier platform are stored by their
                  respective galleries in storage vaults or temperature
                  controlled viewing rooms.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h2>How do I know the art is real?</h2>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Augier works directly with trusted galleries that have their
                  pieces authenticated by third party industry professionals.
                  Our process demands the necessary paper work in order to for
                  an artwork to be deemed authentic and sold as a digital
                  certificate on our platform.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </Container>

      <div className="Footer">
        <Row>
          <Col md={6}>
            <div className="flogosec">
              <h2 className="flogo">Augier</h2>
              <span>Sell Fine Art Online</span>
              <p>&copy; 2022 Augier Inc. All rights reserved.</p>
            </div>
          </Col>
          <Col md={6}>
            <div className="flink">
              <div className="link">
                <a href="#">About</a>
                <a href="#">FAQs</a>
                <a href="#">Auction</a>
              </div>
              <div className="link">
                <a href="#">My Gallery</a>
                <a href="#">Create NFT</a>
                <a href="#">Terms of Service</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default AccrFotr;

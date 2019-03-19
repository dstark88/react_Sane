import React from "react";
import { Col, Row, Container } from "../components/Grid";

import { Wizard, Steps } from 'react-albus';
import { StepOne } from '../components/Wizard/StepOne';
import { StepTwo } from '../components/Wizard/StepTwo';
import { Navigation } from '../components/Wizard/Navigation';

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <center>
            <Wizard>
              <Steps>
                <StepOne id="safe" />
                <StepTwo id="age" />
              </Steps>
              <Navigation />
            </Wizard>
          </center>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
import React from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

import { Wizard, Steps } from 'react-albus';
import { StepOne } from '../components/Wizard/StepOne';
import { StepTwo } from '../components/Wizard/StepTwo';
// import { StepThree } from '../components/Wizard/StepThree';
import { Navigation } from '../components/Wizard/Navigation';

// import Sites from "../pages/Sites";

function NoMatch() {
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <Wizard>
              <Steps>
                <StepOne id="safe" />
                <StepTwo id="age" />
                {/* <StepThree id="locations" /> */}
              </Steps>
              <Navigation />
            </Wizard>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default NoMatch;
import React from 'react';
import { WithWizard } from 'react-albus';

export const Navigation = () => (
  <WithWizard
    render={({ next, no, previous, step, steps }) => (
      <div className="wizard-buttons">
        {steps.indexOf(step) < steps.length - 1 && (
            <>
                <button className="btn-fluid margin-1-b" onClick={next}>
                    Yes
                </button>
                <button className="btn-fluid btn-no" onClick={no}>
                    No
                </button> 
            </>
        )}

        {steps.indexOf(step) > 0 && (
          <button className="btn-fluid btn-secondary" onClick={previous}>
            Back
          </button>
        )}
      </div>
    )}
  />
);
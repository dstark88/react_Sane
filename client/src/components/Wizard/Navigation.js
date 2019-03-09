import React from 'react';
import { WithWizard } from 'react-albus';
import { Link } from "react-router-dom";


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
                  <Link to="/Call">No</Link>
                </button> 
            </>
        )}

        {steps.indexOf(step) > 0 && (
          <>
            <button>
                <Link to="/Sites">Yes</Link>
            </button>
            <button className="btn-fluid btn-no" onClick={no}>
              <Link to="/SaneP">No</Link>
            </button>
            <button className="btn-fluid btn-secondary" onClick={previous}>
              <Link to="/">Home</Link>
            </button> 
          </>

        )}
      </div>
    )}
  />
);
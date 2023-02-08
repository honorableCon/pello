import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <div className="accordion-body">
      <ul className="list-group list-group-flush">
        <li className="list-group-item py-3 px-0 pt-0">
          <h5 className="font-size-13 mb-0">
            <Link to="#" className="text-body d-block">
              FAQs
            </Link>
          </h5>
        </li>
        <li className="list-group-item py-3 px-0">
          <h5 className="font-size-13 mb-0">
            <Link to="#" className="text-body d-block">
              Contact
            </Link>
          </h5>
        </li>
        <li className="list-group-item py-3 px-0 pb-0">
          <h5 className="font-size-13 mb-0">
            <Link to="#" className="text-body d-block">
              Terms & Privacy policy
            </Link>
          </h5>
        </li>
      </ul>
    </div>
  );
};

export default Help;

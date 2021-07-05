import './css/Page.css';
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Record = () => {
  return (
    <div className="Page">
      <header className="Page-header">

      </header>
      <Link to ="./Selection">
           <button className="RunButton">
              BACK
           </button>
          </Link>
          <Link to ="./Result">
           <button className="RunButton">
              NEXT
           </button>
          </Link>
    </div>
  );
};

export default Record;
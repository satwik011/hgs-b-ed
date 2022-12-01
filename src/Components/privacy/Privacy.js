import React from "react";
import pdf from "../../pdf/PrivacyJn.pdf";

function Privacy() {
  return (
    <div>
      {/* <iframe src={pdf} width="100%"></iframe> */}
      <object
        style={{ overflowX: "hidden" }}
        data={pdf}
        type="application/pdf"
        width="100%"
        height="1000px"
      ></object>
    </div>
  );
}

export default Privacy;

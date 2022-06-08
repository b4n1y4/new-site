import React from "react";

import faqs from "./faqs";

const Faq = () => {
  return (
    <div className="page-content">
      <h1 className="title">
        FAQ <br />
        <p className="subtitle">A list of Frequently Asked Questions</p>
        ---
      </h1>
      {faqs.map((faq) => {
        return (
          <section className="page-section" key={faq.id}>
            <h1 className="title">{faq.q}</h1>
            <p className="section-text">{faq.a}</p>
          </section>
        );
      })}
      <hr />
      id: "0",
    </div>
  );
};

export default Faq;

import React, { useState } from "react";
import faqData from "../../assets/JSON/faq.json"; // Importing the JSON data

import "./FAQPage.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import arrow icons

const FAQPage = () => {
  // State to track expanded questions
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  // Function to toggle the expanded state of a question
  const toggleAnswer = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="faq">
      <h2 className="faq__title">Frequently Asked Questions</h2>

      {/* Maternity Photoshoot Section */}
      <section className="faq__section">
        <h3 className="faq__section-title">FAQs for Maternity Photoshoots</h3>
        <div className="faq__questions">
          {faqData.FAQ.MaternityPhotoshoot.questions.map((item, index) => (
            <div key={index} className="faq__item">
              <div
                className="faq__question"
                onClick={() => toggleAnswer(index)} // Toggle on click
              >
                <h4>{item.question}</h4>
                <span className="faq__arrow">
                  {expandedQuestion === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>
              {expandedQuestion === index && (
                <p className="faq__answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Newborn Photoshoot Section */}
      <section className="faq__section">
        <h3 className="faq__section-title">FAQs for Newborn Photoshoots</h3>
        <div className="faq__questions">
          {faqData.FAQ.NewbornPhotoshoot.questions.map((item, index) => (
            <div key={index} className="faq__item">
              <div
                className="faq__question"
                onClick={() => toggleAnswer(index)} // Toggle on click
              >
                <h4>{item.question}</h4>
                <span className="faq__arrow">
                  {expandedQuestion === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>
              {expandedQuestion === index && (
                <p className="faq__answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Miscellaneous Section */}
      <section className="faq__section">
        <h3 className="faq__section-title">Miscellaneous</h3>
        <div className="faq__questions">
          {faqData.FAQ.Miscellaneous.questions.map((item, index) => (
            <div key={index} className="faq__item">
              <div
                className="faq__question"
                onClick={() => toggleAnswer(index)} // Toggle on click
              >
                <h4>{item.question}</h4>
                <span className="faq__arrow">
                  {expandedQuestion === index ? (
                    <FaChevronUp />
                  ) : (
                    <FaChevronDown />
                  )}
                </span>
              </div>
              {expandedQuestion === index && (
                <p className="faq__answer">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <p className="faq__contact">
        Got more questions? We’re here to help! Reach out to us anytime at +91
        9820591096 via call or WhatsApp, or
        <a href="/contact" className="faq__link">
          {" "}
          click here.
        </a>
      </p>
    </div>
  );
};

export default FAQPage;

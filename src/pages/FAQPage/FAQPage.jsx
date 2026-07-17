import React, { useState } from "react";
import "./FAQPage.scss";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useFaqs } from "../../cms/useFaqs";
import { useSiteSettings } from "../../cms/useSiteSettings";
import { trackEngagement } from "../../services/analytics";

const FAQPage = () => {
  const { faqs } = useFaqs();
  const { data: s } = useSiteSettings();
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  const toggleAnswer = (index) => {
    setExpandedQuestion(expandedQuestion === index ? null : index);
  };

  return (
    <div className="faq">
      <h3 className="faq__top">----- FAQS -----</h3>
      <h2 className="faq__title">Frequently Asked Questions</h2>
      <section className="faq__section">
        <div className="faq__questions">
          {faqs.map((item, index) => (
            <div key={`${item.question}-${index}`} className="faq__item">
              <div
                className="faq__question"
                onClick={() => toggleAnswer(index)}
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
        Got more questions? We’re here to help! Reach out to us anytime at{" "}
        {s.phoneDisplay} via call or WhatsApp, or
        <Link
          to="/contact"
          className="faq__link"
          onClick={() => trackEngagement("click_contact", "faq_cta", "faq_page")}
        >
          {" "}
          click here.
        </Link>
      </p>
    </div>
  );
};

export default FAQPage;

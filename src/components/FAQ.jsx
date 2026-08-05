import { useState } from "react";
import "../styles/FAQ.css";

function FAQ() {

  const [active, setActive] = useState(0);

  const faq = [
    {
      question: "What is PropertyPro?",
      answer:
        "PropertyPro is an all-in-one property management platform for landlords and real estate businesses."
    },
    {
      question: "Can I manage multiple properties?",
      answer:
        "Yes. You can manage unlimited residential and commercial properties from one dashboard."
    },
    {
      question: "How do tenants pay rent?",
      answer:
        "Tenants can securely pay online through the integrated payment system."
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. Your information is encrypted and stored using enterprise-grade security."
    }
  ];

  return (
    <section className="faq">

      <div className="faq-left">

        <span className="faq-tag">
          FAQ
        </span>

        <h2>
          Frequently Asked
          <br />
          Questions
        </h2>

        <p>
          Everything you need to know before choosing our
          property management platform.
        </p>

      </div>

      <div className="faq-right">

        {faq.map((item, index) => (

          <div
            className={`faq-item ${active === index ? "active" : ""}`}
            key={index}
          >

            <div
              className="faq-question"
              onClick={() => setActive(active === index ? -1 : index)}
            >

              <h3>{item.question}</h3>

              <span>
                {active === index ? "−" : "+"}
              </span>

            </div>

            {active === index && (

              <div className="faq-answer">

                <p>{item.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}

export default FAQ;
import React, {
  useMemo,
  useState,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaChevronLeft,
  FaChevronRight,
  FaWhatsapp,
} from "react-icons/fa";
import "./ServicePage.scss";

/*
  Reusable Service Page

  Props: 
  - data = {
      slug: "6-months", // used in WhatsApp default text
      title: "6 Months & Above",
      hero: { src: "", alt: "" }, // background hero image
      breadcrumbLabel: "Home",
      ourServiceHeading: "Our Service",
      introTitle: "6 months & Above", // headline under Our Service
      carousel: [
        { src: "", alt: "" }, ...
      ],
      pricingHeading: "Pricing Packages",
      pricingPlans: [
        {
          name: "Standard (Studio)",
          priceLabel: "₹19,000",
          periodLabel: "/ Package",
          cta: { label: "Get Started", href: "#" },
          features: [
            "Edited images - 20",
            "Theme / Setups - 3 ( 2 Solo + 1 Family )",
            "Parent & Siblings included",
            "10 photo prints ( 8*12 inches )",
            "Duration - 1.5 to 2 Hours",
            "Raw Data will not be provided",
          ],
        },
        {
          name: "Premium (Studio)",
          priceLabel: "₹29,000",
          periodLabel: "/ Package",
          cta: { label: "Get Started", href: "#" },
          features: [
            "Edited images - 30",
            "Theme / Setups - 4 ( 3 Solo + 1 Family )",
            "Parent & Siblings included",
            "Album (8*16 inches) + Pendrive",
            "Duration - 3.5 to 4 Hours",
            "Raw Data will not be provided",
          ],
        },
        {
          name: "Cake Smash (Studio)",
          priceLabel: "₹10,000",
          periodLabel: "/ Package",
          cta: { label: "Get Started", href: "#" },
          features: [
            "Edited Images - 10",
            "Theme / Setup - 1",
            "Cake included",
            "Duration - 30 min",
            "Raw Data will not be provided",
          ],
        },
      ],
      customPricingCta: {
        label: "Get a Quote",
        href: "https://wa.me/919820591096",
        text: "Hi, I'd like a custom pricing plan for",
      },
      notesHeading: "Points to Note",
      notes: [
        "Cakesmash and bathtub sessions can be a part of standard and premium packages but they are charged differently.",
        "Outfit options are available for babies up to one year old.",
        "Outfit options are available for Mom.",
        "7000/- additional charges for outdoor location.",
        "An additional fee of ₹1500 will be charged for each extra member included in the photoshoot.",
        "50% of the package amount has to be paid in advance to confirm the bookings & the remaining 50% on the day of the shoot.",
        "Advance is non-refundable but can be used for further bookings.",
        "Edited images will be ready within 2-3 weeks after your selection.",
        "Extra edits, photo frame, larger albums, etc., are sold separately.",
        "Payment accepted in the form of cash/cheque, Gpay or direct bank transfer.",
        "Please note prices are subject to change without prior notice.",
        "Client must arrive at the studio as per the allotted time slot. A late start will result in a shorter session.",
        "For family portraits, parents should wear color-coordinated outfits in neutral or dark, solid colors.",
        "Copyright remains with the photographer. Raw/unedited images will not be shared.",
      ],
      faqsHeading: "FAQs",
      faqs: [
        { q: "Do you provide raw images?", a: "Raw images are not provided with any package." },
        { q: "How long until edited images are ready?", a: "Within 2–3 weeks after your selection." },
      ],
    }
*/

const ServicePage = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0); // index of the first visible slide
  const [openFaq, setOpenFaq] = useState(null);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [isHover, setIsHover] = useState(false);

  const images = useMemo(() => data?.carousel || [], [data]);
  const total = images.length;

  // render list includes head clones to avoid tail gap
  const renderImages = useMemo(() => {
    const head = images.slice(0, Math.min(slidesPerView, images.length));
    return [...images, ...head];
  }, [images, slidesPerView]);

  // responsive slides per view based on your SCSS breakpoints
  useEffect(() => {
    const mqTablet = window.matchMedia("(min-width: 48rem)"); // $breakpoint-tablet
    const mqDesktop = window.matchMedia("(min-width: 80rem)"); // $breakpoint-desktop

    const update = () => {
      if (mqDesktop.matches) setSlidesPerView(3);
      else if (mqTablet.matches) setSlidesPerView(2);
      else setSlidesPerView(1);
    };
    update();
    mqTablet.addEventListener?.("change", update);
    mqDesktop.addEventListener?.("change", update);
    window.addEventListener("resize", update);

    return () => {
      mqTablet.removeEventListener?.("change", update);
      mqDesktop.removeEventListener?.("change", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  // Normalize index into circular range [0, total)
  const normalize = useCallback(
    (idx) => {
      if (total === 0) return 0;
      let x = idx % total;
      if (x < 0) x += total;
      return x;
    },
    [total]
  );

  useEffect(() => {
    if (total <= slidesPerView) return;
    if (isHover) return;
    const id = setInterval(() => {
      setActiveIndex((i) => normalize(i + 1)); // was + slidesPerView
    }, 4000);
    return () => clearInterval(id);
  }, [total, slidesPerView, isHover, normalize]);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => normalize(i - 1)); // was - slidesPerView
  }, [normalize]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => normalize(i + 1)); // was + slidesPerView
  }, [normalize]);

  // Dots still OK; they can represent "pages" grouped by slidesPerView
  const totalPages = Math.max(1, Math.ceil(total / slidesPerView));
  const activePage = totalPages
    ? Math.floor(activeIndex / slidesPerView) % totalPages
    : 0;

  // Drag/swipe
  const viewportRef = useRef(null);
  const startXRef = useRef(0);
  const draggingRef = useRef(false);
  const dragOffsetRef = useRef(0); // in "slides", not pixels

  const onPointerDown = (e) => {
    if (!viewportRef.current) return;
    draggingRef.current = true;
    startXRef.current = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    dragOffsetRef.current = 0;
    viewportRef.current.setPointerCapture?.(e.pointerId || 0);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current || !viewportRef.current) return;
    const currentX = e.clientX || (e.touches && e.touches[0]?.clientX) || 0;
    const deltaPx = currentX - startXRef.current;
    const vw = viewportRef.current.clientWidth || 1;
    // convert px to slide units
    dragOffsetRef.current = -(deltaPx / vw) * slidesPerView;
    viewportRef.current.style.setProperty(
      "--drag-offset",
      dragOffsetRef.current
    );
  };

  const onPointerUp = (e) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    const thresholdSlides = 0.3; // ~30% of a slide width
    let next = activeIndex;

    if (dragOffsetRef.current > thresholdSlides) {
      // dragged right → previous page
      next = normalize(activeIndex - slidesPerView);
    } else if (dragOffsetRef.current < -thresholdSlides) {
      // dragged left → next page
      next = normalize(activeIndex + slidesPerView);
    }
    setActiveIndex(next);
    // reset visual drag offset
    if (viewportRef.current) {
      viewportRef.current.style.setProperty("--drag-offset", 0);
    }
  };

  const onMouseEnter = () => setIsHover(true);
  const onMouseLeave = () => setIsHover(false);

  const whatsappHref = useMemo(() => {
    const base = data?.customPricingCta?.href || "https://wa.me/919820591096";
    const msg = encodeURIComponent(
      `${
        data?.customPricingCta?.text || "Hi, I'd like a custom pricing plan for"
      } ${data?.title || "your service"}`
    );
    return `${base}?text=${msg}`;
  }, [data]);

  return (
    <section className="service-page">
      <header
        className="service-page__hero"
        style={{ backgroundImage: `url(${data?.hero?.src || ""})` }}
        role="img"
        aria-label={data?.hero?.alt || data?.title || "Service hero image"}
      >
        <div className="service-page__hero-overlay" />
        <div className="service-page__hero-content is-centered">
          <h1 className="service-page__title">
            {data?.introTitle || data?.title}
          </h1>

          <Link to="/" className="service-page__breadcrumb">
            <FaArrowLeft className="service-page__breadcrumb-icon" />
            <span>Home</span>
          </Link>
        </div>
      </header>

      <div className="service-page__wrap">
        <div className="service-page__section-head service-page__section-head--container">
          <p className="service-page__kicker-outside is-uppercase">
            {data?.ourServiceHeading || "Our Service"}
          </p>
          <h2 className="service-page__h2">{data?.title}</h2>
        </div>

        {/* Carousel */}
        {total > 0 && (
          <section
            className="service-page__carousel"
            aria-label="Gallery"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <button
              type="button"
              className="service-page__nav service-page__nav--prev"
              onClick={goPrev}
              aria-label="Previous"
            >
              <FaChevronLeft />
            </button>

            <div
              className="service-page__viewport"
              ref={viewportRef}
              style={{ "--spv": slidesPerView }}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerCancel={onPointerUp}
              onTouchStart={onPointerDown}
              onTouchMove={onPointerMove}
              onTouchEnd={onPointerUp}
            >
              <div
                className="service-page__track"
                style={{
                  transform: `translateX(calc((-${activeIndex} / var(--spv) + var(--drag-offset, 0)) * 100%))`,
                }}
              >
                {renderImages.map((img, idx) => (
                  <div
                    className="service-page__slide"
                    key={`${img.src}-${idx}`}
                  >
                    <img
                      className="service-page__image"
                      src={img.src}
                      alt={img.alt || `Slide ${idx + 1}`}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="service-page__nav service-page__nav--next"
              onClick={goNext}
              aria-label="Next"
            >
              <FaChevronRight />
            </button>

            {totalPages > 1 && (
              <div className="service-page__dots">
                {Array.from({ length: totalPages }).map((_, p) => (
                  <button
                    key={p}
                    className={`service-page__dot ${
                      p === activePage ? "is-active" : ""
                    }`}
                    aria-label={`Go to page ${p + 1}`}
                    onClick={() => setActiveIndex(p * slidesPerView)}
                  />
                ))}
              </div>
            )}
          </section>
        )}

        {/* Pricing */}
        <section className="service-page__pricing">
          <div className="service-page__section-head service-page__section-head--row">
            <p className="service-page__kicker-outside is-uppercase">
              Pricing Plan
            </p>
            <a
              href={whatsappHref}
              className="service-page__mini-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get a Quote
            </a>
          </div>
          <h2 className="service-page__h2">Pricing Packages</h2>

          <div className="service-page__plans">
            {(data?.pricingPlans || []).map((plan, i) => (
              <div className="service-page__plan" key={plan?.name || i}>
                <h3 className="service-page__plan-name">{plan?.name}</h3>
                <div className="service-page__plan-price">
                  <span className="service-page__price">
                    {plan?.priceLabel}
                  </span>
                  {plan?.periodLabel && (
                    <span className="service-page__period">
                      {plan?.periodLabel}
                    </span>
                  )}
                </div>
                <a
                  href={plan?.cta?.href || "#"}
                  className="service-page__plan-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {plan?.cta?.label || "Get Started"}
                </a>

                <h4 className="service-page__whats-included">
                  WHAT'S INCLUDED?
                </h4>
                <ul className="service-page__features">
                  {(plan?.features || []).map((f, idx) => (
                    <li key={idx} className="service-page__feature">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="service-page__custom">
            <a
              href={whatsappHref}
              className="service-page__custom-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Custom plan in mind? Reach out!</span>
            </a>
          </div>
        </section>

        {/* Notes */}
        {Array.isArray(data?.notesSections) && data.notesSections.length > 0 ? (
          <section className="service-page__notes">
            {data.notesSections.map((section, i) => (
              <div key={i} className="service-page__notes-section">
                <h3 className="service-page__notes-title">{section.title}</h3>
                <ul className="service-page__notes-list">
                  {(section.items || []).map((n, idx) => (
                    <li key={idx} className="service-page__note">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        ) : (
          Array.isArray(data?.notes) &&
          data.notes.length > 0 && (
            <section className="service-page__notes">
              <h3 className="service-page__notes-title">
                {data?.notesHeading || "Points to Note"}
              </h3>
              <ul className="service-page__notes-list">
                {data.notes.map((n, i) => (
                  <li key={i} className="service-page__note">
                    {n}
                  </li>
                ))}
              </ul>
            </section>
          )
        )}

        {/* FAQs */}
        {Array.isArray(data?.faqs) && data.faqs.length > 0 && (
          <section className="service-page__faqs">
            <h3 className="service-page__faqs-title">
              {data?.faqsHeading || "FAQs"}
            </h3>
            <div className="service-page__faq-list">
              {data.faqs.map((f, i) => {
                const isOpen = i === openFaq;
                return (
                  <div
                    className={`service-page__faq ${isOpen ? "is-open" : ""}`}
                    key={i}
                  >
                    <button
                      className="service-page__faq-q"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      {f.q}
                    </button>
                    <div className="service-page__faq-a" role="region">
                      <p>{f.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default ServicePage;

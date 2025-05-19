import "./About.scss";
import constants from "../../../public/constants.json";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function About() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const quotesRef = useRef<HTMLDivElement[]>([]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !quotesRef.current.includes(el)) {
      quotesRef.current.push(el);
    }
  };

  useGSAP(() => {
    const ctx = gsap.context(() => {
      quotesRef.current.forEach((el) => {
        const [titleEl, subtitleEl] = el.querySelectorAll(
          ".about-title, .about-subtitle",
        ) as NodeListOf<HTMLElement>;

        const tl = gsap.timeline({
          defaults: { ease: "power2.out", duration: 0.6 },
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            end: "bottom 40%",
          },
        });

        tl.fromTo(titleEl, { opacity: 0, y: 30 }, { opacity: 1, y: 0 }).fromTo(
          subtitleEl,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0 },
          "-=0.3",
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about">
      <h2>A propos de moi</h2>
      <div className="about-container">
        {constants.about.quotes.map((item, idx) => (
          <div className="about-quote" key={idx} ref={addToRefs}>
            <div className="about-title">{item.title}</div>
            <div className="about-subtitle">{item.subtitle}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;

import React from "react";
import { useTranslation } from "react-i18next";
import parse from "html-react-parser";

import "./About.scss";

function About() {
  const { t } = useTranslation();

  let text = t("about.text");

  text = text.replace(
    t("about.mail"),
    "<a href='mailto:" + t("about.mail") + "'>" + t("about.mail") + "</a>"
  );
  text = text.replace(
    t("about.phone"),
    "<a href='tel:" + t("about.phone") + "'>" + t("about.phone") + "</a>"
  );

  return (
    <div className="about">
      <h2 className="about-title">{t("about.title")}</h2>
      <p className="about-text">{parse(text)}</p>
    </div>
  );
}

export default About;

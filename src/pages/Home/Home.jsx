import React from "react";
import { useTranslation } from "react-i18next";

import "./Home.scss";
import {Link} from "react-router-dom";

function Home() {
    const { t } = useTranslation();

    return (
        <div className="home">
            <div className="home-text">
                <h1 className="home-title">{t("home.title")}</h1>
                <h2 className="home-subtitle">{t("home.subtitle")}</h2>
            </div>

            <button className="home-cv-button">
                <Link to={"https://cvdesignr.com/p/6358f70dbc1fd"}>{t("home.button")}</Link>
            </button>
        </div>
    );
}

export default Home;
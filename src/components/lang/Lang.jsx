import React, { useState } from "react"
import { useTranslation } from 'react-i18next';
import { Languages } from '../../translations/Languages';

import './Lang.scss';
const Lang = () => {
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);

    let changeLanguages = (event) => {
        let language = event.target.value;

        switch (language) {
            case Languages.EN:
                setLang(Languages.EN);
                i18n.changeLanguage(Languages.EN);
                break;
            case Languages.FR:
            default:
                setLang(Languages.FR);
                i18n.changeLanguage(Languages.FR);
                break;
        }
    }

    return (
        <div className="lang">
            <select className="lang-select" value={lang} name="Languages" onChange={changeLanguages}>
                <option value={Languages.FR}>FR</option>
                <option value={Languages.EN}>EN</option>
            </select>
        </div>
    )
}

export default Lang;
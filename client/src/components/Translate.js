import React, { useEffect, useState } from "react";
import "./translate.css";
import axios from "axios";
import { Button } from "@mui/material";

export default function Translate() {
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("select"); // track the selected language
  const [inputText, setInputText] = useState(""); // track the input text
  const [traslation, setTranslation] = useState("");
  const [textDirection, setTextDirection] = useState("ltr");

  const handleClick = async () => {
    if (!inputText) {
      alert("Enter your text");
      return;
    }

    if (selectedLanguage === "en") {
      alert("Choose another language instead of English. Try again!");
      return;
    }

    try {
      let translation = await axios.post(`http://192.168.56.1:3001/translate`, {
        text: inputText,
        sourceLang: selectedLanguage, // pass the language code
      });
      console.log(translation.data);
      setTranslation(translation.data[0].translatedText);
    } catch (error) {
      console.error("Translation error:", error);
      alert("An error occurred during translation. Please try again.");
    }
  };

  // language code to name
  const languageNames = {
    en: "English",
    si: "Sinhala",
    es: "Spanish",
    fr: "French",
    de: "German",
    ar: "Arabic",
    iw: "Hebrew",
    ja: "Japanese",
    ta: "Tamil",
    hi: "Hindi",
    ab: "Abkhaz",
    ace: "Acehnese",
    ach: "Acholi",
    af: "Afrikaans",
    sq: "Albanian",
    alz: "Alur",
    am: "Amharic",
    hy: "Armenian",
    as: "Assamese",
    awa: "Awadhi",
    ay: "Aymara",
    az: "Azerbaijani",
    ban: "Balinese",
    bm: "Bambara",
    ba: "Bashkir",
    eu: "Basque",
    btx: "Batak Karo",
    bts: "Batak Simalungun",
    bbc: "Batak Toba",
    be: "Belarusian",
    bem: "Bemba",
    bn: "Bengali",
    bew: "Betawi",
    bho: "Bhojpuri",
    bik: "Bikol",
    bs: "Bosnian",
    br: "Breton",
    bg: "Bulgarian",
    bua: "Buryat",
    yue: "Cantonese",
    ca: "Catalan",
    ceb: "Cebuano",
    ny: "Chichewa (Nyanja)",
    "zh-CN": "Chinese (Simplified)",
    "zh-TW": "Chinese (Traditional)",
    cv: "Chuvash",
    co: "Corsican",
    crh: "Crimean Tatar",
    hr: "Croatian",
    cs: "Czech",
    da: "Danish",
    din: "Dinka",
    dv: "Divehi",
    doi: "Dogri",
    dov: "Dombe",
    nl: "Dutch",
    dz: "Dzongkha",
    eo: "Esperanto",
    et: "Estonian",
    ee: "Ewe",
    fj: "Fijian",
    tl: "Filipino (Tagalog)",
    fi: "Finnish",
    "fr-FR": "French (French)",
    "fr-CA": "French (Canadian)",
    fy: "Frisian",
    ff: "Fulfulde",
    gaa: "Ga",
    gl: "Galician",
    lg: "Ganda (Luganda)",
    ka: "Georgian",
    el: "Greek",
    gn: "Guarani",
    gu: "Gujarati",
    ht: "Haitian Creole",
    cnh: "Hakha Chin",
    ha: "Hausa",
    haw: "Hawaiian",
    hil: "Hiligaynon",
    hmn: "Hmong",
    hu: "Hungarian",
    hrx: "Hunsrik",
    is: "Icelandic",
    ig: "Igbo",
    ilo: "Iloko",
    id: "Indonesian",
    ga: "Irish",
    it: "Italian",
    jw: "Javanese",
    kn: "Kannada",
    pam: "Kapampangan",
    kk: "Kazakh",
    km: "Khmer",
    cgg: "Kiga",
    rw: "Kinyarwanda",
    ktu: "Kituba",
    gom: "Konkani",
    ko: "Korean",
    kri: "Krio",
    ku: "Kurdish (Kurmanji)",
    ckb: "Kurdish (Sorani)",
    ky: "Kyrgyz",
    lo: "Lao",
    ltg: "Latgalian",
    la: "Latin",
    lv: "Latvian",
    lij: "Ligurian",
    li: "Limburgan",
    ln: "Lingala",
    lt: "Lithuanian",
    lmo: "Lombard",
    luo: "Luo",
    lb: "Luxembourgish",
    mk: "Macedonian",
    mai: "Maithili",
    mak: "Makassar",
    mg: "Malagasy",
    ms: "Malay",
    "ms-Arab": "Malay (Jawi)",
    ml: "Malayalam",
    mt: "Maltese",
    mi: "Maori",
    mr: "Marathi",
    chm: "Meadow Mari",
    "mni-Mtei": "Meiteilon (Manipuri)",
    min: "Minang",
    lus: "Mizo",
    mn: "Mongolian",
    my: "Myanmar (Burmese)",
    nr: "Ndebele (South)",
    new: "Nepalbhasa (Newari)",
    ne: "Nepali",
    nso: "Northern Sotho (Sepedi)",
    no: "Norwegian",
    nus: "Nuer",
    oc: "Occitan",
    or: "Odia (Oriya)",
    om: "Oromo",
    pag: "Pangasinan",
    pap: "Papiamento",
    ps: "Pashto",
    fa: "Persian",
    pl: "Polish",
    pt: "Portuguese",
    "pt-PT": "Portuguese (Portugal)",
    "pt-BR": "Portuguese (Brazil)",
    pa: "Punjabi",
    "pa-Arab": "Punjabi (Shahmukhi)",
    qu: "Quechua",
    rom: "Romani",
    ro: "Romanian",
    rn: "Rundi",
    ru: "Russian",
    sm: "Samoan",
    sa: "Sanskrit",
    gd: "Scots Gaelic",
    sr: "Serbian",
    st: "Sesotho",
    crs: "Seychellois Creole",
    shn: "Shan",
    sn: "Shona",
    scn: "Sicilian",
    szl: "Silesian",
    sd: "Sindhi",
    sk: "Slovak",
    sl: "Slovenian",
    so: "Somali",
    su: "Sundanese",
    sw: "Swahili",
    ss: "Swati",
    sv: "Swedish",
    tg: "Tajik",
    tt: "Tatar",
    te: "Telugu",
    tet: "Tetum",
    th: "Thai",
    ti: "Tigrinya",
    ts: "Tsonga",
    tn: "Tswana",
    tr: "Turkish",
    tk: "Turkmen",
    ak: "Twi (Akan)",
    uk: "Ukrainian",
    ur: "Urdu",
    ug: "Uyghur",
    uz: "Uzbek ",
    vi: "Vietnamese",
    cy: "Welsh",
    xh: "Xhosa",
    yi: "Yiddish",
    yo: "Yoruba",
    yua: "Yucatec Maya",
    zu: "Zulu",
  };

  useEffect(() => {
    const fetchLanguage = async () => {
      try {
        const response = await axios.get(
          `https://translation.googleapis.com/language/translate/v2/languages`,
          {
            params: {
              key: process.env.REACT_APP_API_KEY,
              target: "en",
            },
          }
        );
        setLanguages(response.data.data.languages);
      } catch (error) {
        console.error("error getching language", error);
      }
    };
    fetchLanguage();
  }, []);

  // handle the change of the language
  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleDirectionChange = (event) => {
    setTextDirection(event.target.value === "rtl" ? "rtl" : "ltr");
  };

  return (
    <div className="container">
      <div className="dropdown">
        <select name="language" id="language" onChange={handleLanguageChange}>
          <option value="Choose the language" disabled>
            Choose the language
          </option>

          {languages.map((language) => (
            <option key={language.language} value={language.language}>
              {languageNames[language.language] || language.language}
            </option>
          ))}
        </select>

        <select id="wordPosition" onChange={handleDirectionChange}>
          <option value="Choose the text position" disabled>
            Choose the text position
          </option>
          <option value="ltr">Left to Right</option>
          <option value="rtl">Right to Left</option>
        </select>
      </div>

      <div className="multiLineTextFieldforText" style={{ marginTop: "1rem" }}>
        <textarea
          id="outlined-multiline-flexible-text"
          placeholder={languageNames[selectedLanguage] || "Type here..!"}
          multiline
          minRows={10}
          value={inputText}
          onChange={(event) => setInputText(event.target.value)}
          style={{ direction: textDirection }}
          inputProps={{ style: { direction: textDirection } }}
        />

        <textarea
          id="outlined-multiline-flexible-translate"
          placeholder="To English"
          multiline
          minRows={10}
          value={traslation}
        />
      </div>

      <div className="btnTranslate">
        <Button variant="contained" onClick={handleClick}>
          Translate
        </Button>
      </div>
    </div>
  );
}

// Can also use WikiData, but this is faster

// Country Check
[{
    "_id": "_fn$validCountryCode?",
    "name": "validCountryCode?",
    "doc": "Checks whether the user-inputted code is a valid ISO 3166-1 alpha-2 code",
    "params": ["code"],
    "code": "(contains? (countryCodes) (upper-case code))"
}]

[{
    "_id": "_fn$countries",
    "name": "countryCodes",
    "doc": "List of ISO 3166-1 alpha-2 country codes",
    "code": "(hash-set \"AD\" \"AE\" \"AF\" \"AG\" \"AI\" \"AL\" \"AM\" \"AO\" \"AQ\" \"AR\" \"AS\" \"AT\" \"AU\" \"AW\" \"AX\" \"AZ\" \"BA\" \"BB\" \"BD\" \"BE\" \"BF\" \"BG\" \"BH\" \"BI\" \"BJ\" \"BL\" \"BM\" \"BN\" \"BO\" \"BQ\" \"BR\" \"BS\" \"BT\" \"BV\" \"BW\" \"BY\" \"BZ\" \"CA\" \"CC\" \"CD\" \"CF\" \"CG\" \"CH\" \"CI\" \"CK\" \"CL\" \"CM\" \"CN\" \"CO\" \"CR\" \"CU\" \"CV\" \"CW\" \"CX\" \"CY\" \"CZ\" \"DE\" \"DJ\" \"DK\" \"DM\" \"DO\" \"DZ\" \"EC\" \"EE\" \"EG\" \"EH\" \"ER\" \"ES\" \"ET\" \"FI\" \"FJ\" \"FK\" \"FM\" \"FO\" \"FR\" \"GA\" \"GB\" \"GD\" \"GE\" \"GF\" \"GG\" \"GH\" \"GI\" \"GL\" \"GM\" \"GN\" \"GP\" \"GQ\" \"GR\" \"GS\" \"GT\" \"GU\" \"GW\" \"GY\" \"HK\" \"HM\" \"HN\" \"HR\" \"HT\" \"HU\" \"ID\" \"IE\" \"IL\" \"IM\" \"IN\" \"IO\" \"IQ\" \"IR\" \"IS\" \"IT\" \"JE\" \"JM\" \"JO\" \"JP\" \"KE\" \"KG\" \"KH\" \"KI\" \"KM\" \"KN\" \"KP\" \"KR\" \"KW\" \"KY\" \"KZ\" \"LA\" \"LB\" \"LC\" \"LI\" \"LK\" \"LR\" \"LS\" \"LT\" \"LU\" \"LV\" \"LY\" \"MA\" \"MC\" \"MD\" \"ME\" \"MF\" \"MG\" \"MH\" \"MK\" \"ML\" \"MM\" \"MN\" \"MO\" \"MP\" \"MQ\" \"MR\" \"MS\" \"MT\" \"MU\" \"MV\" \"MW\" \"MX\" \"MY\" \"MZ\" \"NA\" \"NC\" \"NE\" \"NF\" \"NG\" \"NI\" \"NL\" \"NO\" \"NP\" \"NR\" \"NU\" \"NZ\" \"OM\" \"PA\" \"PE\" \"PF\" \"PG\" \"PH\" \"PK\" \"PL\" \"PM\" \"PN\" \"PR\" \"PS\" \"PT\" \"PW\" \"PY\" \"QA\" \"RE\" \"RO\" \"RS\" \"RU\" \"RW\" \"SA\" \"SB\" \"SC\" \"SD\" \"SE\" \"SG\" \"SH\" \"SI\" \"SJ\" \"SK\" \"SL\" \"SM\" \"SN\" \"SO\" \"SR\" \"SS\" \"ST\" \"SV\" \"SX\" \"SY\" \"SZ\" \"TC\" \"TD\" \"TF\" \"TG\" \"TH\" \"TJ\" \"TK\" \"TL\" \"TM\" \"TN\" \"TO\" \"TR\" \"TT\" \"TV\" \"TW\" \"TZ\" \"UA\" \"UG\" \"UM\" \"US\" \"UY\" \"UZ\" \"VA\" \"VC\" \"VE\" \"VG\" \"VI\" \"VN\" \"VU\" \"WF\" \"WS\" \"YE\" \"YT\" \"ZA\" \"ZM\" \"ZW\")"
}]


// Language Check
[{
    "_id": "_fn$validLanguageCode?",
    "name": "validLanguageCode?",
    "doc": "Checks whether the user-inputted code is a valid ISO 639-1 code",
    "params": ["code"],
    "code": "(contains? (languageCodes) (lower-case code))"
}]

[{
    "_id": "_fn$languageCodes",
    "name": "languageCodes",
    "doc": "List of ISO language codes",
    "code": "(hash-set \"aa\" \"ab\" \"af\" \"ak\" \"sq\" \"am\" \"ar\" \"an\" \"hy\" \"as\" \"av\" \"ae\" \"ay\" \"az\" \"ba\" \"bm\" \"eu\" \"be\" \"bn\" \"bh\" \"bi\" \"bo\" \"bs\" \"br\" \"bg\" \"my\" \"ca\" \"cs\" \"ch\" \"ce\" \"zh\" \"cu\" \"cv\" \"kw\" \"co\" \"cr\" \"cy\" \"cs\" \"da\" \"de\" \"dv\" \"nl\" \"dz\" \"el\" \"en\" \"eo\" \"et\" \"eu\" \"ee\" \"fo\" \"fa\" \"fj\" \"fi\" \"fr\" \"fr\" \"fy\" \"ff\" \"ka\" \"de\" \"gd\" \"ga\" \"gl\" \"gv\" \"el\" \"gn\" \"gu\" \"ht\" \"ha\" \"he\" \"hz\" \"hi\" \"ho\" \"hr\" \"hu\" \"hy\" \"ig\" \"is\" \"io\" \"ii\" \"iu\" \"ie\" \"ia\" \"id\" \"ik\" \"is\" \"it\" \"jv\" \"ja\" \"kl\" \"kn\" \"ks\" \"ka\" \"kr\" \"kk\" \"km\" \"ki\" \"rw\" \"ky\" \"kv\" \"kg\" \"ko\" \"kj\" \"ku\" \"lo\" \"la\" \"lv\" \"li\" \"ln\" \"lt\" \"lb\" \"lu\" \"lg\" \"mk\" \"mh\" \"ml\" \"mi\" \"mr\" \"ms\" \"mk\" \"mg\" \"mt\" \"mn\" \"mi\" \"ms\" \"my\" \"na\" \"nv\" \"nr\" \"nd\" \"ng\" \"ne\" \"nl\" \"nn\" \"nb\" \"no\" \"ny\" \"oc\" \"oj\" \"or\" \"om\" \"os\" \"pa\" \"fa\" \"pi\" \"pl\" \"pt\" \"ps\" \"qu\" \"rm\" \"ro\" \"ro\" \"rn\" \"ru\" \"sg\" \"sa\" \"si\" \"sk\" \"sk\" \"sl\" \"se\" \"sm\" \"sn\" \"sd\" \"so\" \"st\" \"es\" \"sq\" \"sc\" \"sr\" \"ss\" \"su\" \"sw\" \"sv\" \"ty\" \"ta\" \"tt\" \"te\" \"tg\" \"tl\" \"th\" \"bo\" \"ti\" \"to\" \"tn\" \"ts\" \"tk\" \"tr\" \"tw\" \"ug\" \"uk\" \"ur\" \"uz\" \"ve\" \"vi\" \"vo\" \"cy\" \"wa\" \"wo\" \"xh\" \"yi\" \"yo\" \"za\" \"zh\" \"zu\")"
}]

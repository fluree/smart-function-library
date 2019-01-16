
// Data input -> in future to use data db that can be incorporated in queries. 
// Also, in docs, mention -> can also use WikiData, but this is faster
// Country Codes
[{
    "_id": "_collection",
    "name": "country"
},
{
    "_id": "_predicate",
    "name": "country/name",
    "type": "string"
},
{
    "_id": "_predicate",
    "name": "country/code",
    "doc": "ISO codes",
    "type": "tag",
    "multi": true,
    "unique": true          // double check that unique true
}]

// Country Check
[{
    "_id": "_fn$validCountryCode?",
    "name": "validCountryCode?",
    "doc": "Checks whether the user-inputted code is a valid ISO 3166-1 alpha-2 code",
    "param": ["code"],
    "code": "(contains? (countryCodes) (upper code))"
}]

[{
    "_id": "_fn$countries",
    "name": "countryCodes",
    "doc": "List of ISO 3166-1 alpha-2 country codes",
    "code": "(vec AD AE AF AG AI AL AM AO AQ AR AS AT AU AW AX AZ BA BB BD BE BF BG BH BI BJ BL BM BN BO BQ BR BS BT BV BW BY BZ CA CC CD CF CG CH CI CK CL CM CN CO CR CU CV CW CX CY CZ DE DJ DK DM DO DZ EC EE EG EH ER ES ET FI FJ FK FM FO FR GA GB GD GE GF GG GH GI GL GM GN GP GQ GR GS GT GU GW GY HK HM HN HR HT HU ID IE IL IM IN IO IQ IR IS IT JE JM JO JP KE KG KH KI KM KN KP KR KW KY KZ LA LB LC LI LK LR LS LT LU LV LY MA MC MD ME MF MG MH MK ML MM MN MO MP MQ MR MS MT MU MV MW MX MY MZ NA NC NE NF NG NI NL NO NP NR NU NZ OM PA PE PF PG PH PK PL PM PN PR PS PT PW PY QA RE RO RS RU RW SA SB SC SD SE SG SH SI SJ SK SL SM SN SO SR SS ST SV SX SY SZ TC TD TF TG TH TJ TK TL TM TN TO TR TT TV TW TZ UA UG UM US UY UZ VA VC VE VG VI VN VU WF WS YE YT ZA ZM ZW)"
}]

// Math

// 1. Non-Negative?
[{
    "_id": "_fn$nonNegative?",
    "name": "nonNegative?",
    "doc": "Checks whether a value, x, is non-negative.",
    "params": ["x"],
    "language": "clojure",
    "code": "(<= 0 x)"
}]

// 2. Non-Negative Object
[{
    "_id": "_fn$nonNegativeValue?",
    "name": "nonNegativeValue?",
    "doc": "Checks whether the object being transacted is non-negative",
    "code": "(nonNegative? (?o))"
}]

// 3. Positive
[{
    "_id": "_fn$positive?",
    "name": "postive?",
    "doc": "Checks whether a value, x, is positive.",
    "doc": "Checks whether object, ?o, is positive.",
    "code": "(< 0 (?o))"
}]


// 4. Positive Object
[{
    "_id": "_fn$positiveObject?",
    "name": "positiveObject?",
    "doc": "Checks whether the object being transacted is positive",
    "code": "(positive? ?o)"
}]

// 5. Negative?
[{
    "_id": "_fn$negative?",
    "name": "negativ?e",
    "param": ["x"],
    "doc": "Checks whether object, ?o, is negative.",
    "code": "(> 0 (?o))"
}]

// 6. Divisible?
[{
    "_id": "_fn$divisible?",
    "name": "divisible?",
    "params": ["a", "b"],
    "doc": "Checks whether a is divisible by b",
    "code": "(== 0 (/ a b))"
}]

// 7. Prime? 

[{
    "_id": "_fn$prime?",
    "name": "prime?",
    "params": ["x"],
    "doc": "Checks whether x is prime",
    "code": "(loop [acc (dec x) x x] (if (divisible? x acc) false (if (== acc 2) true (recur (dec acc) x))))"
}]

// 8. Even?
[{
    "_id": "_fn$even?",
    "name": "even?",
    "params": ["x"],
    "doc": "Checks whether x is even",
    "code": "(divisible? x 2)"
}]

// 9. Odd?
[{
    "_id": "_fn$odd?",
    "name": "odd?",
    "params": ["x"],
    "doc": "Checks whether x is odd",
    "code": "(if-else (divisible? x 2) false true)"
}]

// 10. Absolute Value
[{
    "_id": "_fn$abs",
    "name": "abs",
    "params": ["x"],
    "doc": "Returns the absolute value of x",
    "code": "(if-else (nonNegative? x) x (* -1 x))"
}]


// 11. Round
[{
    "_id": "_fn$round",
    "name": "round",
    "doc": "Rounds to nearest integer",
    "params": ["x"],
    "code": "(if-else (> (- (ceil (abs x)) (abs x)) (- (abs x) (floor (abs x)))) (floor x) (ceil x))"
}]

// 12. Between?
[{
    "_id": "_fn$between?",
    "name": "between?",
    "doc": "Checks whether the given number is between (inclusive) two given numbers",
    "params": ["min", "max", "x"],
    "code": "(and (<= x max) (>= x min))"
}]

// Example "code" "(between? 1990 2000 x)"

[{
    "_id": "_fn$avg",
    "name": "avg",
    "doc": "Returns the avg of the params",
    "params": ["..."],
    "code": "(/ (+ ...) (count ...) )"
}]




// Auth
// TO DO -> factor in authority
[{
    "_id": "_fn$ownAuth?",
    "name": "ownAuth?",
    "doc": "Checks whether the value provided is transactor's own auth record.",
    "code": "(== (?o) (?auth_id))"
}]

[{
    "_id": "_fn$ownAuth?",
    "name": "ownAuth?",
    "doc": "Checks whether the user provided is connected to the transactor's own auth record.",
    "code": "(== (?o) (?user_id))"
}]

// Time

[{
    "_id": "_fn$after?",
    "name": "after?",
    "doc": "Checks whether current time is at or after a given time.",
    "param": ["checkTime"],
    "code": "(<= (now) checkTime)" 
}]


[{
    "_id": "_fn$before?",
    "name": "before?",
    "doc": "Checks whether current time is at or before a given time.",
    "param": ["checkTime"],
    "code": "(>= (now) checkTime)" 
}]

[{
    "_id": "_fn$bufferedAfter?",
    "name": "bufferedAfter?",
    "doc": "Checks whether current time is at or after a given time, with a buffer",
    "param": ["checkTime", "buffer"],
    "code": "(<= (now)  (+ checkTime buffer))"
}]

[{
    "_id": "_fn$bufferedBefore?",
    "name": "bufferedBefore?",
    "doc": "Checks whether current time is at or before a given time, with a buffer",
    "param": ["checkTime", "buffer"],
    "code": "(>= (now) (- checkTime buffer))"
}]

// DATE + TIME ?

// Min objects in multi predicate
[{
    "_id": "_fn$minObjects",
    "name": "minObjects",
    "doc": "Checks that "
}]


// Voting
// Requires voting framework in place -> vote/noVotes, vote/yesVotes, change/name, change/subject, change/predicate, change/object, change/doc, change/vote
[{
    "_id": "_fn$voteWhereClause",
    "name": "voteWhereClause",
    "doc": "Where clause for querying a particular vote",
    "code": "(str \"change/object = \\\"\" (?o) \"\\\"\"  \" AND change/subject = \" (?sid) \" AND change/predicate = \" (?pid))"
}]

[{
    "_id": "_fn$queryVote",
    "name": "queryVote",
    "doc": "Full query to look up a particular vote",
    "code": "(query \"[{change/vote [*]}]\" nil (voteWhereClause) nil nil)"
}]

[{
    "_id": "_fn$noVotes",
    "name": "noVotes",
    "doc": "Retrieve all no votes for a certain change",
    "code": "(get-all (queryVote) [\"change/vote\" \"vote/noVotes\"])"
}]

[{
    "_id": "_fn$yesVotes",
    "name": "yesVotes",
    "doc": "Retrieve all yes votes for a certain change",
    "code": "(get-all (queryVote) [\"change/vote\" \"vote/yesVotes\"])"
}]

[{
    "_id": "_fn$minWinPercentage",
    "name": "minWinPercentage",
    "params": [ "percentage" ],
    "code": "(> (/ (count (yesVotes)) (+ (count (yesVotes)) (count (noVotes)))) percentage)"
}]

[{
    "_id": "_fn$minVotes",
    "name": "minVotes",
    "params": ["n"],
    "code": "(> n (+ (count (yesVotes)) (count (noVotes))))"
}]


// // EXAMPLE

// [{
//     "_id": "_fn",
//     "name": "2VotesMajority",
//     "code": "(and (minVotes 2) (minWinPercentage 0.5))"
// }]


// Probability + Statistics


// Currency
[{
    "_id": "_fn$spentEqualsReceived?",
    "name": "spentEqualsReceived?",
    "doc": "Checks whether the object of added and retracted flakes is equal",
    "code": "(== (valT) (valF))"
}]

[{
    "_id": "_fn$spendLimit",
    "name": "spendLimit",
    "param": ["x"],
    "doc": "Checks whether sum of the object of added flakes is less than or equal to a limit",
    "code": "(<= (valT) x)"
}]


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

// Language Check
[{
    "_id": "_fn$validLanguageCode?",
    "name": "validLanguageCode?",
    "doc": "Checks whether the user-inputted code is a valid ISO 639-1 code",
    "param": ["code"],
    "code": "(contains? (languageCodes) (lower code))"
}]

[{
    "_id": "_fn$languageCodes",
    "name": "languageCodes",
    "doc": "List of ISO language codes",
    "code": "(vec aa ab af ak sq am ar an hy as av ae ay az ba bm eu be bn bh bi bo bs br bg my ca cs ch ce zh cu cv kw co cr cy cs da de dv nl dz el en eo et eu ee fo fa fj fi fr fr fy ff ka de gd ga gl gv el gn gu ht ha he hz hi ho hr hu hy ig is io ii iu ie ia id ik is it jv ja kl kn ks ka kr kk km ki rw ky kv kg ko kj ku lo la lv li ln lt lb lu lg mk mh ml mi mr ms mk mg mt mn mi ms my na nv nr nd ng ne nl nn nb no ny oc oj or om os pa fa pi pl pt ps qu rm ro ro rn ru sg sa si sk sk sl se sm sn sd so st es sq sc sr ss su sw sv ty ta tt te tg tl th bo ti to tn ts tk tr tw ug uk ur uz ve vi vo cy wa wo xh yi yo za zh zu)"
}]

// Strings

[{
    "_id": "_fn$maxStringLength",
    "name": "maxStringLength",
    "doc": "Checks that string is less than or equal to a certain length",
    "params": ["string", "maxLength"],
    "code": "(>= maxLength (count string))"
}]

[{
    "_id": "_fn$minStringLength",
    "name": "minStringLength",
    "doc": "Checks that string is greater than or equal to a certain length",
    "params": ["string", "maxLength"],
    "code": "(<= minLength (count string))"
}]

// Example "code": "(and (maxStringLength 15) (minStringLength 2))"

[{
    "_id": "_fn$restrictChar",
    "name": "restrictChar",
    "docs": "Checks that the string does not contain a certain character.",
    "params": ["test", "char"],
    "code": "(if-else (re-find char test) false true)"
}]



// For Collection spec -> certain predicates required. 
[{
    "_id": "_fn$required",
    "name": "required", 
    "params": ["predicateName"],
    "doc": "Checks that the collection has a certain predicate",
    "code": "(get (?e) predicateName)"
}]


// Example "code": "(and (required \"_collection/name\") (required \"_collection/doc\") (required \"_collection/spec\"))

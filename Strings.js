

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
    "code": "(not (re-find char test))"
}]


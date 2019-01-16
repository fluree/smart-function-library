
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

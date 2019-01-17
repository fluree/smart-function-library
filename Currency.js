
// Currency

// Should be attached to predicate/txSpec for a balance predicate. 
// See cryptocurrency example in docs. docs.flur.ee
[{
    "_id": "_fn$spentEqualsReceived?",
    "name": "spentEqualsReceived?",
    "doc": "Checks whether the object of added and retracted flakes is equal.",
    "code": "(== (valT) (valF))"
}]

// Should be attached to predicate/txSpec for a balance predicate. 
[{
    "_id": "_fn$spendLimit",
    "name": "spendLimit",
    "param": ["x"],
    "doc": "Checks whether sum of the object of added flakes is less than or equal to a limit",
    "code": "(<= (valT) x)"
}]

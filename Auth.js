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

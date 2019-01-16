
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
// Math

// 1. Non-Negative?
[{
    "_id": "_fn$nonNegative?",
    "name": "nonNegative?",
    "doc": "Checks whether a value, x, is non-negative.",
    "params": "[ x ]",
    "language": "clojure",
    "code": "(<= 0 x)"
}]

// 2. Non-Negative Object
[{
    "_id": "_fn$nonNegativeObject?",
    "name": "nonNegativeObject?",
    "doc": "Checks whether the object being transacted is positive",
    "code": "(nonNegative? (?o))"
}]

// 3. Positive
[{
    "_id": "_fn$positive?",
    "name": "positive?",
    "params": [ "x" ],
    "doc": "Checks whether a value, x, is positive.",
    "code": "(< 0 x)"
}]


// 4. Positive Object
[{
    "_id": "_fn$positiveObject?",
    "name": "positiveObject?",
    "doc": "Checks whether the object being transacted is positive",
    "code": "(positive? (?o))"
}]

// 5. Negative?
[{
    "_id": "_fn$negative?",
    "name": "negative?",
    "params": ["x"],
    "doc": "Checks whether object, ?o, is negative.",
    "code": "(> 0 x)"
}]


// 6. Negative Object
[{
    "_id": "_fn$negativeObject?",
    "name": "negativeObject?",
    "doc": "Checks whether the object being transacted is negative",
    "code": "(negative? (?o))"
}]

// 7. Divisible?
[{
    "_id": "_fn$divisible?",
    "name": "divisible?",
    "params": ["a", "b"],
    "doc": "Checks whether a is divisible by b",
    "code": "(== (/ a b) (ceil (/ a b)))"
}]

// 7. Even?
[{
    "_id": "_fn$even?",
    "name": "even?",
    "params": ["x"],
    "doc": "Checks whether x is even",
    "code": "(divisible? x 2)"
}]

// 8. Odd?
[{
    "_id": "_fn$odd?",
    "name": "odd?",
    "params": ["x"],
    "doc": "Checks whether x is odd",
    "code": "(not (divisible? x 2))"
}]

// 9. Absolute Value
[{
    "_id": "_fn$abs",
    "name": "abs",
    "params": ["x"],
    "doc": "Returns the absolute value of x",
    "code": "(if-else (nonNegative? x) x (* -1 x))"
}]


// 10. Round
[{
    "_id": "_fn$round",
    "name": "round",
    "doc": "Rounds to nearest integer",
    "params": ["x"],
    "code": "(if-else (> (- (ceil (abs x)) (abs x)) (- (abs x) (floor (abs x)))) (if-else (negative? x) (ceil x) (floor x)) (if-else (negative? x) (floor x) (ceil x)))"
}]

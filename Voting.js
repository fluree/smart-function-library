
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



// For Collection spec -> certain predicates required. 
[{
    "_id": "_fn$required",
    "name": "required", 
    "params": ["predicateName"],
    "doc": "Checks that the collection has a certain predicate",
    "code": "(get (?e) predicateName)"
}]


// Example "code": "(and (required \"_collection/name\") (required \"_collection/doc\") (required \"_collection/spec\"))

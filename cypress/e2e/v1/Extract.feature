Feature: Extract account
    Scenario: Should extract account with a document not exists
        When Extract account with document "DOCUMENT" and return 404
    Scenario: Should extract account with a document invalid
        When Extract account with document "DOCUMENT_INVALID" and return invalid fields: "document"
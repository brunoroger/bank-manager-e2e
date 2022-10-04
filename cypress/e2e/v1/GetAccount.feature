Feature: Get account
    Scenario: Should get account
        Given Create an account with document "DOCUMENT"
        When Get account with document "DOCUMENT"
    Scenario: Should get account with a document not exists
        When Get account with document "DOCUMENT" and return 404
    Scenario: Should get account with a document invalid
        When Get account with document "DOCUMENT_INVALID" and return invalid fields: "document"
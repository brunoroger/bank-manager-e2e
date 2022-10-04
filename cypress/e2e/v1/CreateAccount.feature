Feature: Create an account
    Scenario: Should not create an account with invalid document
        When Create an account with document "DOCUMENT_INVALID" and return invalid fields: "document"
    Scenario: Should not create an account with document duplicated
        Given Create an account with document "DOCUMENT"
        When Create an account with document "DOCUMENT" and return 400
Feature: Deposit in account
    Scenario: Should not find document
        When Deposit in account with document "DOCUMENT" amount 10 and return 404
    Scenario: Should return document invalid
        When Deposit in account with document "DOCUMENT_INVALID" amount 10 and return invalid fields: "document"
    Scenario: Should not deposit amount zero
        Given Create an account with document "DOCUMENT"
        When Deposit in account with document "DOCUMENT" amount 0 and return invalid fields: "amount"
    Scenario: Should not deposit amount negative
        Given Create an account with document "DOCUMENT"
        When Deposit in account with document "DOCUMENT" amount -1 and return invalid fields: "amount"
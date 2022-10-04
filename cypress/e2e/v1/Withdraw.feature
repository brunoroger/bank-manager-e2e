Feature: Withdraw in account
    Scenario: Should not find document
        When Withdraw in account with document "DOCUMENT" amount 10 and return 404
    Scenario: Should return document invalid
        When Withdraw in account with document "DOCUMENT_INVALID" amount 10 and return invalid fields: "document"
    Scenario: Should not withdraw amount zero
        Given Create an account with document "DOCUMENT"
        When Withdraw in account with document "DOCUMENT" amount 0 and return invalid fields: "amount"
    Scenario: Should not withdraw amount negative
        Given Create an account with document "DOCUMENT"
        When Withdraw in account with document "DOCUMENT" amount -1 and return invalid fields: "amount"
    Scenario: Should not withdraw insufficient amount
        Given Create an account with document "DOCUMENT"
        When Withdraw in account with document "DOCUMENT" amount 100 and return 400
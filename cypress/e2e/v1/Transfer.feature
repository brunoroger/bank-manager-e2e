Feature: Transfer account
    Scenario: Should not transfer account with document from invalid
        Given Create an account with document "DOCUMENT_TO"
        When Transfer account from "DOCUMENT_INVALID" to "DOCUMENT_TO" amount 10 and return invalid fields: "documentFrom"
    Scenario: Should not transfer account with document to invalid
        Given Create an account with document "DOCUMENT_FROM"
        When Transfer account from "DOCUMENT_FROM" to "DOCUMENT_INVALID" amount 10 and return invalid fields: "documentTo"
    Scenario: Should not transfer account with amount zero
        Given Create an account with document "DOCUMENT_FROM"
        And Create an account with document "DOCUMENT_TO"
        When Transfer account from "DOCUMENT_FROM" to "DOCUMENT_TO" amount 0 and return invalid fields: "amount"
    Scenario: Should not found document from
        Given Create an account with document "DOCUMENT_TO"
        When Transfer account from "DOCUMENT_FROM" to "DOCUMENT_TO" amount 10 and return 404
    Scenario: Should not found document to
        Given Create an account with document "DOCUMENT_FROM"
        When Transfer account from "DOCUMENT_FROM" to "DOCUMENT_TO" amount 10 and return 404
    Scenario: Should return insufficient balance account
        Given Create an account with document "DOCUMENT_FROM"
        And Create an account with document "DOCUMENT_TO"
        When Transfer account from "DOCUMENT_FROM" to "DOCUMENT_TO" amount 100 and return 400
    Scenario: Should not transfer to same document
        Given Create an account with document "DOCUMENT"
        When Transfer account from "DOCUMENT" to "DOCUMENT" amount 10 and return 400
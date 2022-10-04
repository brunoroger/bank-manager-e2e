Feature: Update Balance
    Scenario: Should deposit, transfer and withdraw account
        Given Create an account with document "DOCUMENT_FROM"
        And Create an account with document "DOCUMENT_TO"
        When Deposit in account with document "DOCUMENT_FROM" amount 10
        Then Get account with document "DOCUMENT_FROM" and validate balance 10
        Then Extract account with document "DOCUMENT_FROM" and validate operation "DEPOSIT" and amount 10
        When Transfer account from "DOCUMENT_FROM" to "DOCUMENT_TO" amount 10
        Then Get account with document "DOCUMENT_FROM" and validate balance 0
        Then Extract account with document "DOCUMENT_FROM" and validate operation "TRANSFER" and amount 10
        Then Get account with document "DOCUMENT_TO" and validate balance 10
        Then Extract account with document "DOCUMENT_TO" and validate operation "TRANSFER" and amount 10
        When Withdraw in account with document "DOCUMENT_TO" amount 10
        Then Get account with document "DOCUMENT_TO" and validate balance 0
        Then Extract account with document "DOCUMENT_TO" and validate operation "WITHDRAW" and amount 10
import { deposit } from './common/account'
import { When } from 'cypress-cucumber-preprocessor/steps'

When('Deposit in account with document {string} amount {int}', (envKey, amount) => {
    const document = Cypress.env(envKey)

    deposit(document, amount).then(res => {
        expect(res.status).to.eq(200)
    })
})

When('Deposit in account with document {string} amount {int} and return {int}', (envKey, amount, status) => {
    const document = Cypress.env(envKey)

    deposit(document, amount).then(res => {
        const body = res.body

        expect(res.status).to.eq(status)
        expect(body.message).to.not.be.null
    })
})

When('Deposit in account with document {string} amount {int} and return invalid fields: {string}', (envKey, amount, field) => {
    const document = Cypress.env(envKey)

    deposit(document, amount).then(res => {
        const body = res.body

        expect(res.status).to.eq(400)
        expect(body.fields.filter(obj => { return obj.field == field }).length).eq(1)
    })
})
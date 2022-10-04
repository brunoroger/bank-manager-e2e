import { extract } from './common/account'
import { When } from 'cypress-cucumber-preprocessor/steps'

When('Extract account with document {string} and validate operation {string} and amount {int}', (envKey, operation, amount) => {
    const document = Cypress.env(envKey)

    extract(document).then(res => {
        const body = res.body

        expect(res.status).to.eq(200)
        expect(body.filter(transaction => { return (transaction.operation == operation && transaction.amount == amount) }).length).eq(1)
    })
})

When('Extract account with document {string} and return {int}', (envKey, status) => {
    const document = Cypress.env(envKey)

    extract(document).then(res => {
        const body = res.body

        expect(res.status).to.eq(status)
        expect(body.message).to.not.be.null
    })
})

When('Extract account with document {string} and return invalid fields: {string}', (envKey, field) => {
    const document = Cypress.env(envKey)

    extract(document).then(res => {
        const body = res.body

        expect(res.status).to.eq(400)
        expect(body.fields.filter(obj => { return obj.field == field }).length).eq(1)
    })
})
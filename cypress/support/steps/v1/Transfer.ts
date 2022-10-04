import { transfer } from './common/account'
import { When } from 'cypress-cucumber-preprocessor/steps'

When('Transfer account from {string} to {string} amount {int}', (envKeyFrom, envKeyTo, amount) => {
    const documentFrom = Cypress.env(envKeyFrom)
    const documentTo = Cypress.env(envKeyTo)

    transfer(documentFrom, documentTo, amount).then((res) => {
        expect(res.status).to.eq(200)
    })
})

When('Transfer account from {string} to {string} amount {int} and return {int}', (envKeyFrom, envKeyTo, amount, status) => {
    const documentFrom = Cypress.env(envKeyFrom)
    const documentTo = Cypress.env(envKeyTo)

    transfer(documentFrom, documentTo, amount).then(res => {
        const body = res.body

        expect(res.status).to.eq(status)
        expect(body.message).to.not.be.null
    })
})

When('Transfer account from {string} to {string} amount {int} and return invalid fields: {string}', (envKeyFrom, envKeyTo, amount, field) => {
    const documentFrom = Cypress.env(envKeyFrom)
    const documentTo = Cypress.env(envKeyTo)

    transfer(documentFrom, documentTo, amount).then(res => {
        const body = res.body

        expect(res.status).to.eq(400)
        expect(body.fields.filter(obj => { return obj.field == field }).length).eq(1)
    })
})
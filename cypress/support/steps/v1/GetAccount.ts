import { get } from './common/account'
import { When } from 'cypress-cucumber-preprocessor/steps'

When('Get account with document {string}', envKey => {
    const document = Cypress.env(envKey)

    get(document).then(res => {
        const body = res.body

        expect(res.status).to.eq(200)
        expect(body.document).to.not.be.null
        expect(body.balance).to.not.be.null
    })
})

When('Get account with document {string} and validate balance {int}', (envKey, balance) => {
    const document = Cypress.env(envKey)

    get(document).then(res => {
        const body = res.body

        expect(res.status).to.eq(200)
        expect(body.document).to.not.be.null
        expect(body.balance).to.eq(balance)
    })
})

When('Get account with document {string} and return {int}', (envKey, status) => {
    const document = Cypress.env(envKey)

    get(document).then(res => {
        const body = res.body

        expect(res.status).to.eq(status)
        expect(body.message).to.not.be.null
    })
})

When('Get account with document {string} and return invalid fields: {string}', (envKey, field) => {
    const document = Cypress.env(envKey)

    get(document).then(res => {
        const body = res.body

        expect(res.status).to.eq(400)
        expect(body.fields.filter(obj => { return obj.field == field }).length).eq(1)
    })
})
import { create } from './common/account'
import { When } from 'cypress-cucumber-preprocessor/steps'

When('Create an account with document {string}', envKey => {
    const document = Cypress.env(envKey)

    create(document).then(res => {
        expect(res.status).to.eq(201)
    })
})

When('Create an account with document {string} and return {int}', (envKey, status) => {
    const document = Cypress.env(envKey)

    create(document).then(res => {
        const body = res.body

        expect(res.status).to.eq(status)
        expect(body.message).to.not.be.null
    })
})

When('Create an account with document {string} and return invalid fields: {string}', (envKey, field) => {
    const document = Cypress.env(envKey)

    create(document).then(res => {
        const body = res.body

        expect(res.status).to.eq(400)
        expect(body.fields.filter(obj => { return obj.field == field }).length).eq(1)
    })
})
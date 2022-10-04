export const create = (document: String) => {
    return cy.request({
        method: 'POST',
        url: '/v1/account/' + document,
        failOnStatusCode: false
    })
}

export const get = (document: String) => {
    return cy.request({
        method: 'GET',
        url: '/v1/account/' + document,
        failOnStatusCode: false
    })
}

export const deposit = (document: String, amount: number) => {
    return cy.request({
        method: 'PUT',
        url: '/v1/account/' + document + '/deposit/' + amount,
        failOnStatusCode: false
    })
}

export const withdraw = (document: String, amount: number) => {
    return cy.request({
        method: 'PUT',
        url: '/v1/account/' + document + '/withdraw/' + amount,
        failOnStatusCode: false
    })
}

export const transfer = (documentFrom: String, documentTo: String, amount: number) => {
    return cy.request({
        method: 'PUT',
        url: '/v1/account/' + documentFrom + '/transfer/' + documentTo + '/' + amount,
        failOnStatusCode: false
    })
}

export const extract = (document: String) => {
    return cy.request({
        method: 'GET',
        url: '/v1/account/' + document + '/extract',
        failOnStatusCode: false
    })
}
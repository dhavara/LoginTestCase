/ <reference types = "cypress" / >

describe('Reqres API Testing', () => {
    it('Test API Login Unsuccessful User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/login',
            failOnStatusCode: false,
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            body: {
                email: 'peter@klaven'
            }
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing password');
        });
    });
});
/ <reference types = "cypress" / >

describe('Reqres API Testing', () => {
    it('Test API Register User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            failOnStatusCode: false,
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            body: {
                email: 'eve.holt@reqres.in'
            }
        }).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('error', 'Missing Password');
        });
    });
});
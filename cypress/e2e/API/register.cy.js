/ <reference types = "cypress" / >

describe('Reqres API Testing', () => {
    it('Test API Register User', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/register',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            body: {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', 4);
            expect(response.body).to.have.property('token', 'QpwL5tke4Pnpja7X4');
        });
    });
});
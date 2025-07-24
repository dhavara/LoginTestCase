/ <reference types = "cypress" />
describe('Reqres API Testing', () => {
    it('Test API Single Resource', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/2',
            headers: {
                'x-api-key': 'reqres-free-v1'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });
});
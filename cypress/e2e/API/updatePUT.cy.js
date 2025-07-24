/ <reference types = "cypress" / >

describe('Reqres API Testing', () => {
    it('Test API Update PUT User', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            body: {
                name: 'Morphius',
                job: 'Resident'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('name', 'Morphius');
        });
    });
});
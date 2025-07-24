/ <reference types = "cypress" />

    // describe('Reqres API Testing', () => {
    //     it('Test API Single User Not Found', () => {
    //         cy.request('GET', 'https://reqres.in/api/users/23')
    //         .then((response) => {
    //             expect(response.status).to.eq(404)
    //             expect(response.body).to.not.be.empty
    //         })
    //     })
    // })

    describe('Reqres API Testing', () => {
    it('Test API Single User Not Found', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/unknown/23',
            failOnStatusCode: false 
        }).then((response) => {
            expect(response.status).to.eq(404);
            expect(response.body).to.be.empty
        });
    });
});
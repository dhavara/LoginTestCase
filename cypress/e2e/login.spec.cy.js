import LoginPage from '../support/page_objects/LoginPage';

describe('Login Test Case', () => {
    it('Login with valid credentials', () => {
        LoginPage.interceptLoginPage('loginRequest1');
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.enterPassword('admin123');
        LoginPage.clickLogin();
        cy.wait('@loginRequest1').its('response.statusCode').should('eq', 200);
        LoginPage.assertLoginSuccess();
    });

    it('fails with invalid credentials', () => {
        LoginPage.interceptLoginPage('loginRequest2');
        LoginPage.visit();
        LoginPage.enterUsername('InvalidUser');
        LoginPage.enterPassword('InvalidPass');
        LoginPage.clickLogin();
        cy.wait('@loginRequest2').its('response.statusCode').should('eq', 200);
        LoginPage.assertLoginFailure();
    });

    it('fails with empty credentials', () => {
        LoginPage.interceptLoginPage('loginRequest3');
        LoginPage.visit();
        LoginPage.clickLogin();
        cy.wait('@loginRequest3').its('response.statusCode').should('eq', 200);
        LoginPage.assertRequiredMessage();
    });

    it('fails with empty username', () => {
        LoginPage.interceptLoginPage('loginRequest4');
        LoginPage.visit();
        LoginPage.enterPassword('admin123');
        LoginPage.clickLogin();
        cy.wait('@loginRequest4').its('response.statusCode').should('eq', 200);
        LoginPage.assertRequiredMessage();
    });

    it('fails with empty password', () => {
        LoginPage.interceptLoginPage('loginRequest5');
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.clickLogin();
        cy.wait('@loginRequest5').its('response.statusCode').should('eq', 200);
        LoginPage.assertRequiredMessage();
    });
});
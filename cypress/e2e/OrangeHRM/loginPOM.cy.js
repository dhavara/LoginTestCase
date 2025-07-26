import LoginPage from '../../support/page_objects/LoginPage';

describe('Login Test Case with POM', () => {
    it('Login with valid credentials', () => {
        LoginPage.interceptLoginPage('loginRequest1');
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.enterPassword('admin123');
        LoginPage.clickLogin();
        cy.wait('@loginRequest1').its('response.statusCode').should('eq', 200);
        LoginPage.assertLoginSuccess();
    });

    it('Fails with Invalid Credentials', () => {
        LoginPage.interceptLoginPage('loginRequest2');
        LoginPage.visit();
        LoginPage.enterUsername('InvalidUser');
        LoginPage.enterPassword('InvalidPass');
        LoginPage.clickLogin();
        cy.wait('@loginRequest2').its('response.statusCode').should('eq', 200);
        LoginPage.assertLoginFailure();
    });

    it('Fails with Empty Credentials', () => {
        LoginPage.interceptLoginPage('loginRequest3');
        LoginPage.visit();
        LoginPage.clickLogin();
        cy.wait('@loginRequest3').its('response.statusCode').should('eq', 200);
        LoginPage.assertRequiredMessage();
    });

    it('Fails with Empty Username', () => {
        LoginPage.interceptLoginPage('loginRequest4');
        LoginPage.visit();
        LoginPage.enterPassword('admin123');
        LoginPage.clickLogin();
        cy.wait('@loginRequest4').its('response.statusCode').should('eq', 200);
        LoginPage.assertRequiredMessage();
    });

    it('Fails with Empty Password', () => {
        LoginPage.interceptLoginPage('loginRequest5');
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.clickLogin();
        cy.wait('@loginRequest5').its('response.statusCode').should('eq', 200);
        LoginPage.assertRequiredMessage();
    });

    it('Click Forgot Password', () => {
        LoginPage.visit();
        LoginPage.clickForgotPassword();
        LoginPage.enterUsername('Admin');
        LoginPage.clickResetPassword();
    });

    it('Menu Dashboard Performance Tab', () => {
        LoginPage.interceptLoginPage('loginRequest1');
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.enterPassword('admin123');
        LoginPage.clickLogin();
        LoginPage.verifyDashboard();
        LoginPage.clickPerformance();
    });

    it('Menu Dashboard Recruitment Tab', () => {
        LoginPage.interceptLoginPage('loginRequest1');
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.enterPassword('admin123');
        LoginPage.clickLogin();
        LoginPage.verifyDashboard();
        LoginPage.clickRecruitment();
    });

    it('Menu Dashboard My Info Tab', () => {
        LoginPage.interceptLoginPage('loginRequest1');
        LoginPage.visit();
        LoginPage.enterUsername('Admin');
        LoginPage.enterPassword('admin123');
        LoginPage.clickLogin();
        LoginPage.verifyDashboard();
        LoginPage.clickMyInfo();
    });
});
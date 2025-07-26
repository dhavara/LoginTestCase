class LoginPage {
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }
    interceptLoginPage(alias = 'loginRequest') {
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as(alias);
    }

    enterUsername(username) {
        cy.get('input[name="username"]').type(username);
    }
    enterPassword(password) {
        cy.get('input[name="password"]').type(password);
    }
    clickLogin() {
        cy.get('button[type="submit"]').click();
    }
    assertRequiredMessage() {
        cy.get('.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
            .should('contain', 'Required');
    }
    assertLoginSuccess() {
        cy.url().should('include', '/dashboard');
        cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').should('contain', 'Dashboard');
    }
    assertLoginFailure() {
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
    }
    clickForgotPassword() {
        cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').click();
    }
    clickResetPassword() {
        cy.get('button[type="submit"]').click();
    }
    verifyDashboard(){
        cy.url().should('include', '/dashboard');
    }
    clickPerformance(){
        cy.get('.oxd-main-menu-item:contains("Performance")').click();
    }
    clickRecruitment(){
        cy.get('.oxd-main-menu-item:contains("Recruitment")').click();
    }
    clickMyInfo(){
        cy.get('.oxd-main-menu-item:contains("My Info")').click();
    }
}

export default new LoginPage();
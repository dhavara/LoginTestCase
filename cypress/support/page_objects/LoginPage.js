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
}

export default new LoginPage();
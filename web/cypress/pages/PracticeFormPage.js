class PraticeFormPage {

    visit() {
        cy.visit('/automation-practice-form');
    }

    fillFirstName(firstName) {
        cy.get('#firstName').type(firstName);
    }

    fillLastName(lastName) {
        cy.get('#lastName').type(lastName);
    }

    fillEmail(email) {
        cy.get('#userEmail').type(email);
    }

    selectGender () {
        cy.get('label[for="gender-radio-1"]').click(); 
    }

    fillMobile(mobile) {
        cy.get('#userNumber').type(mobile);
    }

    submit(){
        cy.get('#submit').click();
    }

}

export default new PraticeFormPage();
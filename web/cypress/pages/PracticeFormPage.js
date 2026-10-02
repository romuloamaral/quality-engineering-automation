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

    fillDateOfBirth(date){
        cy.get('#dateOfBirth-wrapper').click();
        cy.get('#dateOfBirth-wrapper').clear();
        cy.get('#dateOfBirth-wrapper').clear().type(date);
        cy.get('#dateOfBirth-wrapper').type('{enter}');
    }

    fillSubjects(subject){
        cy.get('#subjectInput').type(subject);
        cy.get('#subjectInput').type('{enter}');
    }

    selectHobby(){
        cy.get('#hobbies-checkbox-1').check({force: true});
    }

    uploadFile(){
        cy.get('#uploadPicture').selectFile('cypress/fixtures/documento-teste.txt');
    }

    fillAddress(address){
        cy.get('#currentAddress').type(address);
    }

    selectState(){
        cy.get('#state').click();
        cy.get('#react-select-3-option-0').click();
    }

    selectCity(){
        cy.get('#city').click();
        cy.get('#react-select-4-option-0').click();
    }

    closeModal(){
        cy.get('#closeLargeModal').click();
    }

}

export default new PraticeFormPage();
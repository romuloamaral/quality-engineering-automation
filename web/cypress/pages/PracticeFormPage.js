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

    fillDateOfBirth() {
        cy.get('#dateOfBirthInput').click();

        cy.get('.react-datepicker__month-select').select('July');
        cy.get('.react-datepicker__year-select').select('1990');

        cy.get('.react-datepicker__day:not(.react-datepicker__day--outside-month)')
        .contains('4')
        .click();
    }

    fillSubjects(subject){
        cy.get('.subjects-auto-complete__input').click();
        cy.get('.subjects-auto-complete__input').type(subject);
        cy.get('.subjects-auto-complete__option, [id*="react-select"]').contains(subject).click();
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

    get modalVisible(){
        return cy.get('#example-modal-sizes-title-lg');
    }

    modalBeVisible(){
        this.modalVisible.should('be.visible');
    }

    get modalContent(){
        return cy.get('.modal-content');
    }

    get body(){
        return cy.get('body');
    }

    closeModal(){
        this.modalContent.should('be.visible');
        this.body.type('{esc}');
        this.modalContent.should('not.exist');
    }

}

export default new PraticeFormPage();
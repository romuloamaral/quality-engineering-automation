import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import PracticeFormPage from '../../pages/PracticeFormPage';

Given('eu acesso o formulário', () => {
    PracticeFormPage.visit();
});

When('eu prencho o formulário com dados válidos', () => {
    PracticeFormPage.fillFirstName('Romulo');
    PracticeFormPage.fillLastName('QA');
    PracticeFormPage.fillEmail('romulo.as@hotmail.com');
    PracticeFormPage.selectGender();
    PracticeFormPage.fillMobile('81999999999');
    PracticeFormPage.fillDateOfBirth('04 Jul 1994');
    PracticeFormPage.fillSubjects('Maths');
    PracticeFormPage.selectHobby();
    PracticeFormPage.uploadFile();
    PracticeFormPage.fillAddress('Recife - PE');
    PracticeFormPage.selectState();
    PracticeFormPage.selectCity();
});

When('eu envio o formulário', () => {
    PracticeFormPage.submit();
});

Then('o envio deve ser exibido com sucesso', () => {
    cy.get('#example-modal-sizes-title-lg').should('be.visible');
});

When('eu fecho o popup', () => {
    PracticeFormPage.closeModal();
    cy.get('#exemple-model-size-title-lg').should('not.exist');
})
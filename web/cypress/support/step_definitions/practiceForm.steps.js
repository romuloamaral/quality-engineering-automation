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
});

When('eu envio o formulário', () => {
    PracticeFormPage.submit();
});

Then('o envio deve ser exibido com sucesso', () => {
    cy.get('.modal-content').should('be.visible');
});
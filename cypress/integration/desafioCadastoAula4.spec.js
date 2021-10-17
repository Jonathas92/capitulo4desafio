/// <reference types="cypress"/>


const Chance = require('chance');
var chance = new Chance()

describe('Cadastro', () => {
    it('Cliente realiza o primerio acesso ao site e realiza o cadastro', () => {
        //Acesso o site e realizo o cadastro
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
        cy.get('input[name=email_create]').type(chance.email())
        cy.get('#SubmitCreate > span').click()
        //cy.get('.page-heading').should('cotain','ACCOUNT')//Tentei colocar uma assetiva, mas retornou erro
        //preenchimento dos campos.
        //Gostaria de validar se retornar Male marcara a opção Mrs e caso retornar Female, marcar a opção Female
        const Genero = chance.gender()
        if(Genero){
            cy.get('input#id_gender1').click()
            //cy.get('input#id_gender1').type(chance.gender())
        }
        cy.get('input#customer_firstname').type(chance.first())
        cy.get('input#customer_lastname').type(chance.last())
        cy.get('input#passwd').type('Teste568')
        cy.get('select#days').select('10'),{force: true}
        cy.get('select#months').select('August'),{force: true}
        cy.get('select#years').select('1988'),{force: true}
        cy.get('input#address1').type(chance.address())
        cy.get('input#city').type(chance.city())
        cy.get('select#id_state').select('New York'),{force: true}
        cy.get('input#postcode').type(chance.zip())
        cy.get('textarea#other').type('Teste Cadastro')
        cy.get('input#phone_mobile').type(chance.phone({ country: 'br', mobile: true}))
        cy.get('input#alias').clear().type(chance.email())
        cy.get('#submitAccount > span').click()
        //Tentei colocar uma assetiva, mas retornou erro
        //cy.url().should('contain', 'ACCOUNT')
    });
});
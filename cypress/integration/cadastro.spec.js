/// <reference types="cypress"/>

//instanciando a biblioceca do chance.js aula Usnado dados aleatórios em cada teste
const Chance = require('chance');
var chance = new Chance()

// Mocha - Test Tunner

// Describe, context, it

//whatchForFileChances // para desabilitar a execução dos testes quando salvar o arquivo

describe('Cadastro', () => {
    it('Quando eu informa os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app/') //visitar site

        //Inputs de texto / textarea / emal -> utilizar type

        //utilizando o chance para preencher com valor alaetório
        cy.get('input[name=firstName]').type(chance.first())
        cy.get('input[name=lastName]').type(chance.last())
        cy.get('textarea[name=adress]').type(chance.address())
        cy.get('input[name=emailAdress]').type(chance.email())

        // passando um valor no parâmetro
        // cy.get('input[name=firstName]').type('Agilizei')
        // cy.get('input[name=lastName]').type('Bootcamp')
        // cy.get('textarea[name=adress]').type('Sem endereço')
        // cy.get('input[name=emailAdress]').type('test@mail.com')

        //Inputs radio / checkboxes -> utilizar check
        cy.get('input[value=n]').check()
        cy.get('input[type=checkbox]').check('Netflix')
        cy.get('input[type=checkbox]').check('Dormir')

        //Inputs do tipo combobox / select -> select

       cy.get('select#countries').select('Dinamarca', { force: true }) //force true utiliza para forçar a execução do texte mesmo se elemento estiver coberto
       cy.get('select#years').select('2006', { force: true })
       cy.get('select#months').select('Janeiro', { force: true })
       cy.get('select#days').select('8', { force: true })

        //Inputs de senha / select -> type
       cy.get('input#firstpassword').type('Alunos@2021')
       cy.get('input#secondpassword').type('Alunos@2021')

       // Inputs do tipo button
       cy.contains('Finalizar cadastro').click()

       //espero que a minha aplicação seja direcionada para a listagem
       //url
       //deve estar / conter listagem
       //should contain listagem
       cy.url().should('contain', 'listagem')//obtem a url atual que está a página

        //input[name=firstName]
        //input[name=lastName]
        //textarea[name=adress]
        //input[name=emailAdress]
        //input[value=n]
        //input[type=checkbox]
        //select#countries
        //select#years
        //select#months
        //select#days
        //input#firstpassword
        //input#secondpassword
		//*[@class="item-card card-desktop card-with-rating lazy-price item-desktop--3"]
		//button#buy-button-now
    });
});
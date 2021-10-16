/// <reference types="cypress"/>

describe('Listagem', () => {
    it('Quando não houver cadastros, então a listagem deve estar vazia', () => {
        cy.fixture('listagem-vazia').then(data => {

            window.localStorage.setItem('data', JSON.stringify(data))
            
        })

      
        cy.visit("https://form-agilizei.netlify.app/listagem.html")  
        
        //deve conter o tamanho
        cy.get('table tbody tr').should('have.length',0)
    });

    it('Quando houver um ou mais cadastros, então a listagem deve exibir cada registro', () => {
        //no windows location ensina como passar os dados manualmente
        //window.localStorage.setItem('data', JSON.stringify([{"firstName":"Agilizei","lastName":"Bootcamp","adress":"Sem Endereço","emailAdress":"test@mail.com","radioGender":"n","checks":["Netflix","Livros"],"selectCountries":"Hong Kong","selectYears":"2018","selectMonths":"Abril","pwd":"Aluno@2021"}]))
        //abaixo passar o comando atravé de uma lista
        cy.fixture('listagem-com-itens').then(data => {

            window.localStorage.setItem('data', JSON.stringify(data))

        })

      
        cy.visit("https://form-agilizei.netlify.app/listagem.html")
        
        cy.get('table tbody tr').should('have.length',2)
    });
});
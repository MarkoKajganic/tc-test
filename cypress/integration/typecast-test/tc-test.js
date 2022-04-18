import {Register} from "./pages/register-page.js"
const register = new Register()
const { faker } = require('@faker-js/faker');


describe('Typecast Happy Flow ', () => {

    before(() => {
      cy.visit(Cypress.env('baseUrl'))
    })

    after(() => {         //added just to use after hook in the code
      register.submit()
              .click()
    })

    it('Basic info', () => {

        register.genderFemale()
                .click()
                .should('have.value', 'F')
       
        register.genderMale()
                .click()
                .should('have.value', 'M')

        register.firstName()
                .type('Marko')
       
        register.lastName()
                .type('Kajganic')

        register.dateDay()
                .select('1')
        
        register.dateMonth()
                .select('8')
        
        register.dateYear()
                .select('1989')

        register.email()
                .type(faker.internet.email())
    })


    it('Address', () => {

        register.address()
                .type('Novosadska 12')

        register.zip()
                .type('11000')
        
        register.zipHelper()
                .click()    //click anywhere to select first and only option
        
        register.city()
                .should('have.value', 'BEOGRAD')
        
        register.country()
                .should('have.value', '85')
    })


    it('Phone and newsletter', () => {

        register.phone()
                .type('011 777 555')

        register.newsletter()
                .click()
                .should('have.value', 'true')
    })


    it('PassWord', () => {

        register.password()
                .type('123456')

        register.passwordConfirmation()
                .type('123456')
    })


    it('Register as Company', () => {

        register.registerAsCompany()
                .click()
                .should('have.value', 'true')

        register.companyName()
                .type('Ivina Tvrtka')
        
        register.companyOIB()
                .type('12345678901')
        
        register.companyEmail()
                .type(faker.internet.email())
        
        register.companyTelephone()
                .type('011 555 777')
        
        register.companyContactPerson()
                .type('Ivina Tetka')
        
        register.companyAddress()
                .type('Novosadska 3')

        register.companyZip()
                .type('11000')

        register.zipHelper()
                .click()   
        
        register.companyCity()
                .should('have.value', 'BEOGRAD');
        
        register.companyCountry()
                .should('have.value', '85');
    })
})
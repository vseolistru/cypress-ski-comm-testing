/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('visit base', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://192.168.1.30:3000/')
  })

  it('Testing Catalog product-card', () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get('div.product-card').should('have.length', 12)
    cy.get('div.product-card img').should('have.length', 12)
    cy.get('div.product_box').should('have.length', 12)
    cy.get('div.product_box h1').should('have.length', 12)
    cy.get('div.product_box span').should('have.length', 12)
    cy.get('div.product_box input')
    cy.get('div.product_box p').should('have.length', 12)
    cy.get('div.row_btn a#btn_buy').should('have.length', 12)
    cy.get('div.row_btn a#btn_view').should('have.length', 12)
       // .click(120,580,{ multiple:true }).wait(2000)

    cy.get('div.pagination button').should('have.length', 3)
    cy.get('header ul li a[href="/login"]').click()
    cy.visit('http://192.168.1.30:3000/')
    cy.get('div.menu').click().wait(2000)
    cy.get('div.pagination button').should('have.length', 3)
    .click({ multiple:true }).wait(2000)

  })


  // it('visit /login', ()=>{
  //   cy.visit('http://192.168.1.30:3000/login')
  //
  //
  // })

  // it( 'menu click', ()=> {
  //   cy.click('div.row_btn a#btn_view')
  // })


})

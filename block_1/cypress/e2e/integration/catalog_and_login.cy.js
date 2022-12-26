require('cypress-xpath');

describe('empty spec', () => {
  it('Visit catalog goto Login and find auth inputs', () => {
    // go to catalog
    cy.visit('http://192.168.1.30:3001/')

    // search & click to login page
    cy.get('header ul li a[href="/login"]').click()

    // fill auth fields & click to authorization
    cy.get('form input[name="email"]')
        .type('vknseo@gmail.com',{ delay: 100 })
        .should('have.value', 'vknseo@gmail.com')
    cy.get('form input[name="password"]')
        .type('!qw2Er4Ty6',{ delay: 100 })
    cy.get('button[type="submit"]').click().wait(1000)

    //locate first product set size by click
    cy.xpath('//label[@datatype=\'fisher-speedmax\'][3]').click()

    //click to buy from catalog
    cy.xpath('//a[@name=\'fisher-speedmax\']').click()

    //locate cart in header & navigate
    cy.xpath('//a[contains(@href,\'/cart\')]').click()

    //locate bought product
    cy.xpath('//div[@class=\'detail cart\']/div/h1').should('contain.text', 'fischer speedmax')

    //confirm that product
    cy.xpath('//div[@class=\'detail cart\']/div/span').should('contain.text', 'Price:')
    cy.xpath('//div[@class=\'detail cart\']/div/h3').should('contain.text', 'Size:')
    cy.xpath('//div[@class=\'detail cart\']/div/div[1]').should('have.class', 'amount')

    //confirm total (price + shipping)
    cy.xpath('//div[@class=\'detail cart\']/div/div[3]/p[1]').should('contain.text', 'To pay:')
    cy.xpath('//div[@class=\'detail cart\']/div/div[3]/p[2]')
        .should('contain.text', 'Shipping Price: 600')
    cy.xpath('//div[@class=\'total\']/h3').should('contain.text', 'Total')

    //fill fields of shipment address form, wait button appearance
    cy.xpath('//div[@class=\'shipping-info\']/form/input[1]').type('Ivan Vitalievich', {delay: 100})
    cy.xpath('//div[@class=\'shipping-info\']/form/input[2]').type('89095407538', {delay: 100})
    cy.xpath('//div[@class=\'shipping-info\']/form/input[3]').type('Moscow', {delay: 100})
    cy.xpath('//div[@class=\'shipping-info\']/form/input[4]')
        .type('Some Address, home 21', {delay: 100}).wait(1000)

    //click place order
    cy.xpath('//button[text()=\'Pay Cash\']').click().wait(1000)

    //locate logout & click
    cy.xpath('//a[contains(@href,\'/login\')]').click({force: true}).wait(500)
  })
})
class AddToCart {
  userInDashBoard() {
    cy.get(".title").should("have.text", "Products");
  }

  viewProduct() {
    cy.get("#item_4_title_link > .inventory_item_name").click();
  }

  addingToCart() {
    //cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart"]').click();
  }
  cartPage() {
    cy.screenshot().get(".shopping_cart_link").click();
  }
  checkOutPage() {
    cy.get('[data-test="checkout"]').click();
  }
  userInformation(firstName, lastName, zip) {
    cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(zip);
    cy.get('[data-test="continue"]').click();
  }
  completePurchase() {
    cy.get('[data-test="finish"]').click();
    cy.get(".title").should("have.text", "Checkout: Complete!");
  }
  cancelPurchase() {
    cy.get('[data-test="cancel"]').click();
  }
}
export default AddToCart;

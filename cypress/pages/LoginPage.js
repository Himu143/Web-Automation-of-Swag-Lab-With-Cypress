class LoginPage{
    userLogin(username,password){
    cy.visit("https://www.saucedemo.com/");
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  

    }
invalidAssertion(){
    cy.get('[data-test="error"]').should("have.text","Epic sadface: Username and password do not match any user in this service");
}


}
export default LoginPage;
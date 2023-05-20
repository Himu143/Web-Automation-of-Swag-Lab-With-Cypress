import LoginPage from "../pages/LoginPage";


describe("Testing login functionality",()=>{
    const loginPage=new LoginPage();
it("Testing with valid credential",()=>{
    
    loginPage.userLogin("standard_user","secret_sauce");
    


    })
    it("Testing with invalid credential",()=>{
        loginPage.userLogin("standardser","secret_sauce")
        loginPage.invalidAssertion();

        })
})
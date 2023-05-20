import LoginPage from "../pages/LoginPage"
import AddToCart from "../pages/AddToCart";

describe("Adding product to the cart",()=>{

    const loginPage=new LoginPage();
    const addToCart=new AddToCart();
    beforeEach(()=>{

        loginPage.userLogin("standard_user","secret_sauce");
        
    })
    it("Purchase is not successful",()=>{

        addToCart.userInDashBoard();
        addToCart.viewProduct();
        addToCart.addingToCart();
        addToCart.cartPage();
        addToCart.checkOutPage();
        addToCart.userInformation("Kazi Tajul","Islam","1204");
        addToCart.cancelPurchase();
        addToCart.userInDashBoard();

    })

    it("Purchase is successful",()=>{

        addToCart.userInDashBoard();
        addToCart.viewProduct();
        addToCart.addingToCart();
        addToCart.cartPage();
        addToCart.checkOutPage();
        addToCart.userInformation("Kazi Tajul","Islam","1209");
        addToCart.completePurchase();

    })

})
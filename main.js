
var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var addBtn = document.getElementById("addBtn");
var updateBtn = document.getElementById("updateBtn");


var productsconatiner  ;

function addProduct() {

    var product = {
    name : productNameInput.value  ,
    // Price : productPriceInput.value  ,  //omar
    price: productPriceInput.value ,
    // price : productPriceInput.value  ,  //ahmed
    category : productCategoryInput.value ,
    desc :  productDescInput.value ,

    }
    productsconatiner.push(product);
    localStorage.setItem( "myproducts" ,JSON.stringify( productsconatiner ) );
    clearForm ();
    displayProducts (productsconatiner);

    console.log(product)
}

if( localStorage.getItem( "myproducts" ) !=null )
{
    productsconatiner = JSON.parse( localStorage.getItem( "myproducts" ) );
    displayProducts(productsconatiner);
}
else
{
    productsconatiner =[];
}

//           NAME          CALLING
function searchProducts (searchTerm) {
//      ARRAY NAME
    var searchResult = [];
    for(var i = 0 ; i<productsconatiner.length ; i++)
    {
        if(productsconatiner[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {
            searchResult.push(productsconatiner[i])
        }
    }
        displayProducts (searchResult);

}

function displayProducts (productList) {

    var cartona = `` ;

    for(var i=0 ; i<productList.length ; i++)
    {
        cartona +=`<tr>
                    <td>${i}</td>
                    <td>${productList[i].name}</td>
                    <td>${productList[i].price}</td>
                    <td>${productList[i].category}</td>
                    <td>${productList[i].desc}</td>
                    <td><button onclick=" updateProduct(${i});" class="btn btn-outline-warning btn-sm">update</button></td>
                    <td><button onclick="deleteproduct (${i})" class="btn btn-outline-danger btn-sm">delete</button></td>
                </tr> `
    }
    document.getElementById("tableBody").innerHTML = cartona;

}

function deleteproduct (deletedIndex) {

    productsconatiner.splice(deletedIndex,1);
    localStorage.setItem("myproducts",JSON.stringify(productsconatiner));
    displayProducts(productsconatiner);
}

function updateProduct(upadtedIndex) {
    productNameInput.value = productsconatiner[upadtedIndex].name;
    productPriceInput.value = productsconatiner[upadtedIndex].price;
    productCategoryInput.value = productsconatiner[upadtedIndex].category;
    productDescInput.value = productsconatiner[upadtedIndex].desc;

    addBtn.classList.add("d-none");
    updateBtn.classList.replace("d-none", "d-inline-block");
    upProduct();

}

//     function upProduct() {

//     var product2 = {
//     name : productNameInput.value  ,
//     // Price : productPriceInput.value  ,  //omar
//     price: productPriceInput.value ,
//     // price : productPriceInput.value  ,  //ahmed
//     category : productCategoryInput.value ,
//     desc :  productDescInput.value ,

//     }
//     localStorage.setItem( "myproducts" ,JSON.stringify( productsconatiner ) );
//     displayProducts (productsconatiner);

//     console.log(product2)
// }

// function updateButton(up) {

//     productNameInput.value = ;
//     productPriceInput.value = ;
//     productCategoryInput.value = ;
//     productDescInput.value = ;

// displayProducts(up)
// }

function clearForm () {

    productNameInput.value = "" ;
    productPriceInput.value = "" ;
    productCategoryInput.value = "" ;
    productDescInput.value = "" ;

}





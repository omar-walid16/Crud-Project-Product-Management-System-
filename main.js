
var productNameInput=document.getElementById("productNameInput");
var productPriceInput=document.getElementById("productPriceInput");
var productCategoryInput=document.getElementById("productCategoryInput");
var productDescInput=document.getElementById("productDescInput");
var nameAlert=document.getElementById("nameAlert");
var productsContainer=[];
var currentIndex  ;

function addProduct() {
    
    if (validateProductName()  ==true)
    {
    var product = {
    name : productNameInput.value,
    price : productPriceInput.value,
    category : productCategoryInput.value,
    desc : productDescInput.value,
    }
    productsContainer.push(product);
    localStorage.setItem('myProducts',JSON.stringify(productsContainer));
    displayproducts(productsContainer);
    clearForm();

    }
    if (validateProductPrice()  ==true)
    {
    var product = {
    name : productNameInput.value,
    price : productPriceInput.value,
    category : productCategoryInput.value,
    desc : productDescInput.value,
    }
    productsContainer.push(product);
    localStorage.setItem('myProducts',JSON.stringify(productsContainer));
    displayproducts(productsContainer);
    clearForm();

    }

}

if (localStorage.getItem('myProducts') !=null )
{
    productsContainer = JSON.parse(localStorage.getItem('myProducts')) ;    // IMP.
    displayproducts(productsContainer)
}
else
{
    productsContainer=[];
}

function searchProducts (searchTerm) {

    var searchResult = [] ;
    for( var i = 0 ; i < productsContainer.length ; i++ )
    {
        if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) ==true )
        {
            searchResult.push(productsContainer[i])  // IMP.
        }
    }
    displayproducts(searchResult);
}

function displayproducts(productList) {

    var cartoona = `` ;
    for( var i = 0 ; i < productList.length ; i++ )
    {
        cartoona += `
        <tr>
            <td>${i}</td>
            <td>${productList[i].name}</td>
            <td>${productList[i].price}</td>
            <td>${productList[i].category}</td>
            <td>${productList[i].desc}</td>
            <td><button onclick="updateProduct(${i})" class="btn btn-outline-warning">update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn btn-outline-danger">delete</button></td>
        </tr>
            `   
    }
    document.getElementById("tableBody").innerHTML=cartoona
}

function updateProduct(index) {
    currentIndex = index
    var currentProduct = productsContainer[index] ;
    productNameInput.value = currentProduct.name ;
    productPriceInput.value = currentProduct.price ;
    productCategoryInput.value = currentProduct.category ;
    productDescInput.value = currentProduct.desc ;
    document.getElementById("addBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "inline";

}

function updateInputInfo() {
    var product = {
    name : productNameInput.value,
    price : productPriceInput.value,
    category : productCategoryInput.value,
    desc : productDescInput.value,
    }
    productsContainer[currentIndex] = product ;
    localStorage.setItem('myProducts',JSON.stringify(productsContainer));
    displayproducts(productsContainer);
    clearForm();
}

function deleteProduct(index) {
    productsContainer.splice(index,1);
    localStorage.setItem("myProducts",JSON.stringify(productsContainer));
    displayproducts(productsContainer)
}

function clearForm() {
    productNameInput.value = "" ;
    productPriceInput.value = "" ;
    productCategoryInput.value = "" ;
    productDescInput.value = "" ;
}

function validateProductName() {
    var regex = /^[A-Z][a-z]{3,8}$/;
    if (regex.test(productNameInput.value) == true)
    {
        productNameInput.classList.replace('is-invalid','is-valid');
        nameAlert.classList.add('d-none');
        return true ;
    }
    else 
    {
        productNameInput.classList.add('is-invalid');
        nameAlert.classList.replace('d-none','d-block');
        return false ;
    }
}

function validateProductPrice() {
    var regex = /^[0-9]{2,}/;
    if (regex.test(productPriceInput.value) == true)
    {
        productPriceInput.classList.replace('is-invalid','is-valid');
        priceAlert.classList.add('d-none');
        return true ;
    }
    else 
    {
        productPriceInput.classList.add('is-invalid');
        priceAlert.classList.replace('d-none','d-block');
        return false ;
    }
}

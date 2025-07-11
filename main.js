var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescInput = document.getElementById("productDescInput");
var productsContainer=[] ;


function addProduct()  {

    var product = {

        name : productNameInput.value ,
        price : productPriceInput.value ,
        category : productCategoryInput.value ,
        desc : productDescInput.value ,
    }
    productsContainer.push(product);
    localStorage.setItem("myProducts" , JSON.stringify(productsContainer));
    clearform();
    console.log(productsContainer);
    displayProducts (productsContainer);


}

function displayProducts (list) {

    var cartoona = `` ;
    for ( var i = 0 ; i<productsContainer.length ; i++ )
    {
        cartoona += `
                <tr>
                    <td>${i}</td>
                    <td>${list[i].name}</td>
                    <td>${list[i].price}</td>
                    <td>${list[i].category}</td>
                    <td>${list[i].desc}</td>
                    <td><button class="btn btn-outline-primary btn-sm">update</button></td>
                    <td><button class="btn btn-outline-warning btn-sm">delete</button></td>
                </tr> `
                document.getElementById("tableBody").innerHTML = cartoona
    }


}

function searchProducts (searchTerm) {

    var searchResult =[] ;

    for ( var i = 0 ; i<productsContainer.length ; i++ )
    {
        if(productsContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true)
        {
            searchResult.push(productsContainer[i])
        }
    }
        displayProducts (searchResult);

    }


if( localStorage.getItem( "myProducts" ) !=null )
{
    productsContainer = JSON.parse( localStorage.getItem( "myProducts" ) );
    displayProducts(productsContainer);
}
else
{
    productsContainer =[];
}


function clearform() {

    productNameInput.value = "" ;
    productPriceInput.value = "" ;
    productCategoryInput.value = "" ;
    productDescInput.value = "" ;

}
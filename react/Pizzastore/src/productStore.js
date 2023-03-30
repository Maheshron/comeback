const productsArray = [
    {
        id:1,
        title:"Havana special",
        type:"Small",
        inCart:false,
        price:599
    },
    {
        id:2,
        title:"Caramel pineapple",
        type:"Small",
        inCart:false,

        price:799
    },
    {
        id:3,
        title:"Chicken premier",
        type:"Medium",
        inCart:false,

        price:899
    },
    {
        id:4,
        title:"Double peperoni",
        type:"Large",
        inCart:false,

        price:1399
    },
    {
        id:5,
        title:"Mushroom Pizza",
        type:"Small",
        inCart:false,

        price:499
    },
    {
        id:6,
        title:"Mix BBQ pizza",
        type:"Large",
        inCart:false,

        price:1299
    },
    {
        id:7,
        title:"Carbonara Pizza",
        type:"Large",
        inCart:false,

        price:999
    },
    {
        id:8,
        title:"Chicken mushroom",
        type:"Small",
        inCart:false,

        price:699
    },
    {
        id:9,
        title:"Margarita pizza",
        type:"Medium",
        inCart:false,

        price:699
    },
    {
        id:10,
        title:"Four Chesse",
        type:"Medium",
        inCart:false,

        price:799
    }
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);
    if(productData == undefined){
        return undefined;
    }
    return productData;
}

export { productsArray,getProductData }
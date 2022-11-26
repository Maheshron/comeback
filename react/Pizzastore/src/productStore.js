const productsArray = [
    {
        id:1,
        title:"Havana special",
        type:"Small",
        price:599
    },
    {
        id:2,
        title:"Caramel pineapple",
        type:"Small",
        price:799
    },
    {
        id:3,
        title:"Chicken premier",
        type:"Medium",
        price:899
    },
    {
        id:4,
        title:"Double peperoni",
        type:"Large",
        price:1399
    },
    {
        id:5,
        title:"Mushroom",
        type:"Small",
        price:499
    },
    {
        id:6,
        title:"Mix BBQ",
        type:"Large",
        price:1299
    },
    {
        id:7,
        title:"Carbonara",
        type:"Large",
        price:999
    },
    {
        id:8,
        title:"Chicken mushroom",
        type:"Small",
        price:699
    },
    {
        id:9,
        title:"Margarita",
        type:"Medium",
        price:699
    },
    {
        id:10,
        title:"Four Chesse",
        type:"Medium",
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
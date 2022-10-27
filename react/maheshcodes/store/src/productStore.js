const productsArray = [
    {
        id:"price_1LvzAfSCxn7kAE334qyk6VDa",
        title:"Coffee",
        price:4.99
    },
    {
        id:"price_1LvzBKSCxn7kAE338vmrEGzt",
        title:"Sunglassess",
        price:9.99
    },
    {
        id:"price_1LvzBrSCxn7kAE33qIjVTXtO",
        title:"Camera",
        price:39.99
    }
]

function getProductData(id){
    let productData = productsArray.find(product => product.id === id);

    if(productData == undefined){
        console.log("Product data does not exists for ID: "+ id);
        return undefined;
    }

    return productData;

}



export { productsArray ,getProductData };
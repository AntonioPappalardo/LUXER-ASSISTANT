var cart=[];
export function createCart(){
    cart=[]
}

export function getCart(){
    return cart;
}
export function addProduct(prodotto){
    if(cart.length==0){
        cart.push({"prodotto":prodotto,"qta":1})
    
    }

    else {
        var exist=(cart.map(c=>c.prodotto.id)).findIndex(prod=>prod==prodotto.id)
        if(exist==-1){
            cart.push({"prodotto":prodotto,"qta":1})
        }
        else cart[exist]={"prodotto":prodotto,"qta": cart[exist].qta+1}
    }
}
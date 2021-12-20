
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
        else cart[exist].qta= cart[exist].qta+1
    }
    return cart;
}

export function removeProduct(idprodotto){
    var exist=(cart.map(c=>c.prodotto.id)).findIndex(prod=>prod==idprodotto)
    cart.splice(exist,1)
    return cart
}
export function decreaseProduct(idprodotto){
    var exist=(cart.map(c=>c.prodotto.id)).findIndex(prod=>prod==idprodotto)
    cart[exist].qta-=1
    return cart;
}

export function increaseProduct(idprodotto){
    var exist=(cart.map(c=>c.prodotto.id)).findIndex(prod=>prod==idprodotto)
    cart[exist].qta= cart[exist].qta+1
    return cart;
}

export function getTotale(){
    var conto=0
    cart.forEach(item=>{
        conto+=item.prodotto.prezzo*item.qta
    })
    return conto
}
export function getNumOfArticle(){
    var tot=0
    cart.forEach(item=>{
        tot+=item.qta
    })
    return tot
}
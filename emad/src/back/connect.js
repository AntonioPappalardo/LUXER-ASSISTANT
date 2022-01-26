import axios from 'axios'
import sha512 from 'js-sha512'

    let appuntamento = [];
    let attributi = [];
    let caratteristiche = [];
    let categoria = [];
    let cliente = [];
    let comunicazione = [];
    let dettagli_ordine = [];
    let Immagine = [];
    let magazzino = [];
    let modello_tridimensionale = [];
    let ordine = [];
    let prodotto = [];
    let stock = [];
    let utente = [];

export function connect(){
    axios.get('https://emad2021.azurewebsites.net/api/retrive_data?').then(response=> {
        appuntamento = response.data.appuntamento;
        attributi = response.data.attributi;
        caratteristiche = response.data.caratteristiche;
        categoria = response.data.categoria;
        cliente = response.data.cliente;
        comunicazione = response.data.comunicazione;
        dettagli_ordine = response.data.dettagli_ordine;
        Immagine = response.data.Immagine;
        magazzino = response.data.magazzino;
        modello_tridimensionale = response.data.modello_tridimensionale;
        ordine = response.data.ordine;
        prodotto = response.data.prodotto;
        stock = response.data.stock;
        utente = response.data.utente;
    }) 
}
    export function AddCostumer(user){
        user.codice_cliente=""+(parseInt(cliente[cliente.length-1].codice_cliente)+1);
        user.id= cliente[cliente.length-1].id +1;
        var d=new Date()
        user.data_registrazione= d.toISOString().substring(0,10)
        user.avatar="https://storageaccountemadbc1b.blob.core.windows.net/img/photo.jpg";
        axios.get('https://emad2021.azurewebsites.net/api/InsertCostumer?' , {params:{"user":user}})
        cliente.push(user)
    } 

    export function ValidateEmail(email){
        var a=cliente.find(costumer=>(costumer.email.toLowerCase()===email.toLowerCase()))
        if (a==undefined)return true 
        return false
    }

    export function AddAppuntamento(appointment){
        appointment.id=appuntamento.length
        console.log(appointment)
        axios.get('https://emad2021.azurewebsites.net/api/CreateAppointment?' , {params:{"appuntamento":appointment}})
        appuntamento.push(appointment)
    }

    export function SendQRCodeCash(email){
        const subject = "Pagamento in Cassa";
        const object ='Salve, Scansiona il seguente QR code in cassa per concludere correttamente il pagamento.\n\nSaluti.'

        var url = 'https://luxerfunction.azurewebsites.net/api/HttpTrigger1?code=WsG207XtWBZ48Afw7HpLDOiM0zVtAqPbF2WmgWbA9rXK1tPO9mj6Cg==';
            var option = {
                method: 'post',
                url: url,
                params: {
                    email: email
                },
                data: {
                    subject: subject,
                    object: object,
                }
            }                
            axios(option)

    }

    export function getAppuntamento(){
        return appuntamento;
    }
    export function getAttributi(){
        return attributi;
    }
    export function getCaratteristiche(){
        return caratteristiche;
    }
    export function getCategoria(){
        return categoria;
    }
    export function getCliente(){
        return cliente;
    }
    export function getComunicazione(){
        return comunicazione;
    }
    export function getDettagli_ordine(){
        return dettagli_ordine;
    }
    export function getImmagine(){
        return Immagine;
    }
    export function getMagazzino(){
        return magazzino;
    }
    export function getModello_tridimensionale(){
        return modello_tridimensionale;
    }
    export function getOrdine(){
        return ordine;
    }
    export function getProdotto(){
        return prodotto;
    }
    export function getStock(){
        return stock;
    }
    export function getUtente(){
        return utente;
    }


    /*
    Funzione che recupera l'utente tramite email e password 
    Ritorna l'id dell'utente se viene trovato, undefined altrimenti
    */
    export function getUtenteByLogin(email,password){
        password = sha512(password);
        var a=utente.find(user=>(user.email.toLowerCase()===email.toLowerCase() && user.password===password))
        if (a!==undefined)return a.id
        return undefined
    }


    /*
    Funzione che recupera il prossimo appuntamento di un cliente tramite l'id del cliente e l'id dell'utente
    Ritorna stringa vuota se non vi è un appuntamento
    altrimenti ritona la data
    */
    export function getNextAppuntamentoByCliente(cliente,user){
        var a= appuntamento.find(appuntamento=> appuntamento.id_utente===user && appuntamento.id_cliente===cliente)
        if (a===undefined) return""
        else return a
    }


    /*
    Funzione che recupera l'utente tramite l'id
    */
    export function getUtenteById(id){
        return utente.find(user=>(user.id===id))
    }


    /*
    Funzione che calcola il numero di prodotti per categoria
     */
    export function getNumProCategoria(categ){
        var child=categoria.filter(categoria=>categoria.parent_category==categ)
        var numprodotti=0;
        child.forEach(child=> numprodotti= numprodotti+ prodotto.filter(prodotto=>prodotto.id_categoria===child.id).length)
        numprodotti=numprodotti+ (prodotto.filter(prodotto=>prodotto.id_categoria===categ)).length
        return numprodotti
    }
    /*
    Funzione che ritorna le categoria basandoci sul parent
    */
    export function getCategoriaByParent(parent){
        return categoria.find(categoria=>(categoria.parent_category===parent))
    }
    /*
    Funzione che recupera la categoria tramite id
    */
    export function getCategoriaById(id){
        return categoria.find(categoria=> categoria.id===id);
    }

    /*
    Funzione che recupera le varie subCategorie tramite id
    */
    export function getSubCategory(id){
       return categoria.filter(categoria=>categoria.parent_category==id)
    }
   
   
    /*
    Funzione che recupera i prodotti tramite la categoria
    */
    export function getProdottiByCategoria(categoria){
      var prodotti=prodotto.filter(prodotto=>prodotto.id_categoria===categoria);
      var subCategory=getSubCategory(categoria)
      if (prodotti== undefined)prodotti=[]
      subCategory.forEach( subcategoria=> 
        {
        prodotti=prodotti.concat(prodotto.filter(pro=>pro.id_categoria==subcategoria.id))
        }
      )
      return prodotti
    }

    /*
    Funzione che ritorna la prima immagine di un prodotto tramite id
    */
    export function getImmagineByProdotto(idprod){
        return Immagine.find(im=>im.id_prodotto===idprod).remote_path
    }
    export function getProdottoById(id){
        return prodotto.find(pro=> pro.id==id)
    }
    export function getProdottoByReference(ref){
        return prodotto.find(pro=> pro.ean13==ref)
    }
    export function getImmaginiByProdotto(id){
        return Immagine.filter(im=> im.id_prodotto===id)
    }
    export function getStockByUserProduct(prodotto,utente){
        var magazzino=getUtenteById(utente).id_magazzino;
        var toreturn= stock.find(stock=> stock.id_magazzino===magazzino && stock.id_prodotto===prodotto)
        if (toreturn==undefined) return 0
        else return toreturn.qta
    }
    export function getQtaByProduct(prodotto,utente){
        var magazzino=getUtenteById(utente).id_magazzino;
        var other= stock.filter(stock=> stock.id_magazzino!=magazzino && stock.id_prodotto==prodotto)
        if (other ==undefined) return 0
        else return other.reduce((accum,item)=>accum+item.qta,0)
    }
    /*
                        · Pelle con interno in Re-Nylon siglato{'\n'}
                        · Altezza: 17cm{'\n'}
                        · Lunghezza: 6cm{'\n'}
                        · Larghezza: 22cm
    */
   export function getCaratteristicheProduct(prodotto){
       var caratteristica=caratteristiche.filter(car=> car.id_prodotto===prodotto);
       return caratteristica
   }

   export function getAttributoColoreByProduct(prodotto){
       var colore= (attributi.filter(at=>at.id_prodotto==prodotto && at.nome=="colore"))
       if (colore!=undefined) return colore.map(at=>at.valore)
       else return[]
   }
   export function getAttributoTagliaByProduct(prodotto){
    var taglia= (attributi.filter(at=>at.id_prodotto==prodotto && at.nome=="taglia"))
    if (taglia!=undefined) return taglia
    else return[]
   }
   export function getOtherStores(prodotto){
        var other= stock.filter(stock=> stock.id_prodotto==prodotto)
        var stores=[]
        other.forEach(stock=>stores.push(magazzino.find(m=> m.id==stock.id_magazzino)))
        return stores    
   }
   export function getstockByProdMag(magazzino,prodotto){
        return stock.find(stock=> stock.id_magazzino==magazzino && stock.id_prodotto==prodotto).qta
   }
   export function getMagazzinoById(id){
       return magazzino.find(m=> m.id==id);
   }
   /*
   Funzione che restituisce i colori disponibili in negozio
   */
   export function getColorsDb(){
    var a=attributi.filter(at=>at.nome=="colore").map(at=>at.valore)
    return  [...new Set( a)]
}
export function getSizeDb(){
    var a=attributi.filter(at=>at.nome=="taglia").map(at=>at.valore)
    return  [...new Set( a)]
}
/*
Funzione che restituisce i prodotti che hanno 
*/
export function getProductsByColors(colors){
 var products =[]
 var a=attributi.filter(at=>at.nome=="colore")
 colors.forEach(color=>{
       products=products.concat(  a.filter(at=> at.valore==color).map(at=>at.id_prodotto))
   })
   return products
}

export function getProductsBySize(size){
 var products =[]
 var a=attributi.filter(at=>at.nome=="taglia")
 size.forEach(siz=>{
       products=products.concat(  a.filter(at=> at.valore==siz).map(at=>at.id_prodotto))
   })
   return products
}
export function getMaxPrezzo(categoria){
 var prodotti=prodotto.filter(prodotto=>prodotto.id_categoria===categoria);
 var subCategory=getSubCategory(categoria)
 if (prodotti== undefined)prodotti=[]
 subCategory.forEach( subcategoria=> 
   {
   prodotti=prodotti.concat(prodotto.filter(pro=>pro.id_categoria==subcategoria.id))
   }
 )
 return Math.max(... prodotti.map(prod=>prod.prezzo))
}
export function getMinPrezzo(categoria){
 var prodotti=prodotto.filter(prodotto=>prodotto.id_categoria===categoria);
 var subCategory=getSubCategory(categoria)
 if (prodotti== undefined)prodotti=[]
 subCategory.forEach( subcategoria=> 
   {
   prodotti=prodotti.concat(prodotto.filter(pro=>pro.id_categoria==subcategoria.id))
   }
 )
 return Math.min(... prodotti.map(prod=>prod.prezzo))
}

export function getAppuntamentoByUser(user){
    return appuntamento.filter(a=> a.id_utente==user)
}
export function getClienteById(id){
    return cliente.find(a=>a.id==id)
}
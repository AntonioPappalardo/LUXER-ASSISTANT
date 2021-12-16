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

    export function getAppuntamento(){
        return appuntamento;
    }
    export function getUtenteByLogin(email,password){
        password = sha512(password);
        var a=utente.find(user=>(user.email===email && user.password===password))
        if (a!==undefined)return a.id
        return undefined
    }
    export function getUtenteById(id){
        return utente.find(user=>(user.id===id))
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
    export function getNextAppuntamentoByCliente(cliente,user){
        var a= appuntamento.find(appuntamento=> appuntamento.id_utente===user && appuntamento.id_cliente===cliente)
        if (a===undefined) return""
        else return a.data
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

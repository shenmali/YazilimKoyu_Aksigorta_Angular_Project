export class Etkinlik {
    private _id:number
    private _etkinlikAdi:string
    private _etkinlikAciklama:String
    private _etkinlikIcerik:string
    private _etkinlikBaslangic:Date
    private _etkinlikBitis:Date

    constructor(id:number,etkinlikAdi:string,etkinlikAciklama:string,etkinlikIcerik:string,etkinlikBaslangic:Date,etkinlikBitis:Date){
        this._id = id
        this._etkinlikAdi = etkinlikAdi
        this._etkinlikAciklama = etkinlikAciklama
        this._etkinlikIcerik = etkinlikIcerik
        this._etkinlikBaslangic = etkinlikBaslangic
        this._etkinlikBitis = etkinlikBitis
        
    }

}
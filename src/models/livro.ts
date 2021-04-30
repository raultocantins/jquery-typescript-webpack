import Book from './book'


export default class Livro implements Book{
    constructor(public name:string,public price:number, public ranking:number,public desconto:number){
    }

    describe():string{
        return `O livro ${this.name} é ${this.price} e o ranking dos favoritos é ${this.ranking}`
    }
    desc():number{
        return this.price*(1-this.desconto)
    }
    }

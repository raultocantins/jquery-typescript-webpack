import $ from 'jquery'
import Livro from './models/livro'
const Fada=new Livro('Fada',10.89,5,0.3)
$('body').append(`<h1>Descrição: ${Fada.describe()}</h1>`)
$('body').append(`<h2>Preço com desconto: R$ ${Fada.desc()}</h2>`)

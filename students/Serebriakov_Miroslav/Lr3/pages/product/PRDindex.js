import {ProductComponent} from "../../components/product/CMPPRDindex.js";
import {BackButtonComponent} from "../../components/back-button/BBindex.js";
import {MainPage} from "../main/PGindex.js";
export class ProductPage {
    constructor(parent) {
        this.parent = parent
    }

    getData() {
        return {
					src: 'https://i.pinimg.com/originals/ca/bd/dd/cabdddbf8bc8a0bfae9e53b5320cb1d2.jpg',
					title: `Красивое жильё в самом престижном месте города!`,
					text: 'Жильё, где каждая деталь создана для вашего комфорта. Просто зайдите… и почувствуйте себя дома 💖</br>',
				}
    }

    get pageRoot() {
        return document.getElementById('product-page')
    }

    getHTML() {
        return (
            `
                <div id="product-page"></div>
                
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }
    
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    
        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))
    
        const data = this.getData()
        const stock = new ProductComponent(this.pageRoot)
        stock.render(data)
    }
}
import {ProductCardComponent} from "../../components/product-card/CRDindex.js";
import {ProductPage} from "../product/PRDindex.js";

export class MainPage {
    constructor(parent) {
        this.parent = parent;
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap"><div/>
                
            `
        )
    }

    getData() {
        return [
            {
                id: 1,
                src: "https://www.fineshare.com/wp-content/uploads/2023/04/minecraft-house-ideas-1.webp",
                title: "Купи свою мечту!",
                text: "Добро пожаловать в самый яркий и разнообразный лесами район ! Здесь вас ждет уникальная возможность приобрести собственное жилье и создать комфортную и стильную берлогу для себя и своей семьи."
            },
            {
                id: 2,
                src: "https://i.pinimg.com/736x/d4/76/12/d47612fc1c68ceb62dfbaac62fcff5d1.jpg",
                title: "Открой новую страницу в своей жизни!",
                text: "Приветствуем вас в городе MC_bigcity! Здесь вас ждет уникальная возможность воплотить свои мечты в реальность и обзавестись собственным жильем, которое станет идеальным укрытием для тебя и твоей семьи."
            },
            {
                id: 3,
                src: "https://static.planetminecraft.com/files/resource_media/screenshot/1229/2012-07-16_170646_2926841.jpg",
                title: "Найди свой уютный уголок!",
                text: "Отойди от городской суеты и открой новые горизонты в прекрасном мире mc_forest У нас ты найдешь дома, которые расположены вдали от шума и суеты городской жизни!"
            },
        ]
    }
        
    clickCard(e) {
        const cardId = e.target.dataset.id
        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()

        const toastTrigger = document.getElementById('liveToastBtn')
        const toastLiveExample = document.getElementById('liveToast')
            if (toastTrigger) {
                toastTrigger.addEventListener('click', () => {
                const toast = new bootstrap.Toast(toastLiveExample)

            toast.show()})
        }
    }
    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
        
        const data = this.getData()
        data.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }
}


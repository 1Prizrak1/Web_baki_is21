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
						src: 'https://images.wallpaperscraft.ru/image/single/zdaniia_ogni_arhitektura_1356050_1920x1080.jpg',
						title: 'Комфорт с первой минуты',
						text: 'Идеальное место для тех, кто ценит комфорт и стиль. Здесь можно влюбляться в каждый новый день 💗',
					},
					{
						id: 2,
						src: 'https://images.wallpaperscraft.ru/image/single/zdaniia_arhitektura_vid_snizu_119251_1920x1080.jpg',
						title: 'Ваш идеальный уголок',
						text: 'Уют, свет и пространство — квартира, в которую хочется возвращаться. Ваш новый дом ждёт именно вас 🤍✨',
					},
					{
						id: 3,
						src: 'https://images.wallpaperscraft.ru/image/single/zdaniia_neon_svet_142915_1920x1080.jpg',
						title: 'Гармония в каждом метре',
						text: 'Современная планировка, тёплая атмосфера и всё, что нужно для счастливой жизни. Дом мечты становится реальностью 💞',
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


export class ProductComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML(data) {
        return (
            `
            <div class="card mb-3" style="width: 1200px;">
                <div class="row g-0">
                    <div class="col-md-5">
                        <img src="${data.src}" class="img-fluid" alt="картинка">
                    </div>
                    <div class="col-md-4">
                        <div class="card-body">
                            <h5 class="card-title text1" style = "">${data.title}</h5>
                            <p class="card-text text2">${data.text}</p>
                        </div>
                    </div>
                </div>
            
            
            <button type="button" class="btn btn-primary" id="liveToastBtn">Показать номер застройщика</button>
            <div class="toast-container">
                <div id="liveToast" class="toast" role="alert" aria-live="assertive" aria-atomic="true">
                    <div class="toast-header">
                        <img src="https://i.pinimg.com/736x/03/c4/58/03c4582167e1a7a90e8d7eb4f76323c9.jpg" class="rounded me-2" alt="..." style="width: 50px">
                        <strong class="me-auto">Здравствуйте!</strong>
                        <small>Только что</small>
                        <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button>
                    </div>
                <div class="toast-body">Мы рады что вам приглянулась квартира, номер застройщика: 7 777 777 77-77</div>
            </div>
        </div>
    </div>
    
            `
        );
    }

    render(data) {
        const html = this.getHTML(data)
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}
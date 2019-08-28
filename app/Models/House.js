
export default class House {
    constructor(data) {
        this._id = data._id
        this.levels = data.levels
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.year = data.year
        this.price = data.price
        this.imgUrl = data.imgUrl
        this.description = data.description
    }

    get Template() {
        return `
        <div class="col-3">
            <div class="card">
                <div class="card-body">
                <img class="card-img-top" src="${this.imgUrl}" alt="Card image cap">
                    <h5 class="card-title">${this.levels} floor</h5>
                    <h5>${this.bedrooms} room</h5>
                    <h5>${this.bathrooms} bath</h5>
                    <p class="card-text">${this.description}</p>
                    <p><sm>Price: $${this.price}</sm></p>
                    <button class="btn btn-info" onclick="app.controllers.houseCtrl.bidHouse('${this._id}')">Bid</button>
                    <button class="btn btn-danger" onclick="app.controllers.houseCtrl.deleteHouse('${this._id}')">Delete House</button>
                </div >
            </div >
        </div >
        `
    }
}


export default class Job {
  constructor(data) {
    this._id = data._id
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.hours = data.hours
    this.rate = data.rate
    this.description = data.description
  }


  get Template() {
    return `
    <div class="col-3">
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Job Title: ${this.jobTitle}</h5>
                    <h5>Company: ${this.company}</h5>
                    <p class="card-text">${this.description}</p>
                    <p><sm>$${this.rate} per hour for ${this.hours} hours a week</sm></p>
                    <button class="btn btn-info" onclick="app.controllers.jobCtrl.bidJob('${this._id}')">Bid</button>
                    <button class="btn btn-danger" onclick="app.controllers.jobCtrl.deleteJob('${this._id}')">Delete Job</button>
                </div >
            </div >
        </div >
    `
  }
}
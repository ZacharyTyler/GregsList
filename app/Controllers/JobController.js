import JobService from "../Services/JobService.js";

let _jobService = new JobService()

function _draw() {
  let jobs = _jobService.Jobs
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById('jobs-cards').innerHTML = template
}



export default class JobController {
  constructor() {
    //NOTE Register all subscribers
    _jobService.addSubscriber('jobs', _draw)

    //NOTE Retrieve data
    _jobService.getApiJobs();
  }

  addJob(event) {
    event.preventDefault()
    let form = event.target
    let data = {
      company: form.company.value,
      jobTitle: form.jobTitle.value,
      hours: form.hours.value,
      rate: form.rate.value,
      description: form.description.value,

    }
    _jobService.addJob(data)

  }

  deleteJob(id) {
    _jobService.deleteJob(id)
  }

  bidJob(id) {
    _jobService.bidJob(id)
  }

}
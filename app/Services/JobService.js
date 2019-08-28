import Job from "../Models/Job.js";

let _state = {
  jobs: []
}

//NOTE methods to run when a given property in state changes
let _subscribers = {
  jobs: []
}

// @ts-ignore
let _jobApi = axios.create({
  baseURL: 'http://bcw-sandbox.herokuapp.com/api/jobs'
})


function _setState(propName, data) {
  //NOTE add the data to the state
  _state[propName] = data
  //NOTE run every subscriber function that is watching that data
  _subscribers[propName].forEach(fn => fn());
}


export default class JobService {
  bidJob(id) {
    let job = _state.jobs.find(h => h._id == id)
    job.rate -= (99999999999999999999999999 * 999999999999)
    _jobApi.put(id, { rate: job.rate })
      .then(res => {
        _setState('jobs', _state.jobs)
      })
  }
  //NOTE adds the subscriber function to the array based on the property it is watching
  addSubscriber(propName, fn) {
    _subscribers[propName].push(fn)
  }

  addJob(data) {
    _jobApi.post('', data)
      .then(res => {
        _state.jobs.push(new Job(res.data.data))
        _setState('jobs', _state.jobs)
      })
  }

  get Jobs() {
    return _state.jobs.map(j => new Job(j))
  }
  getApiJobs() {
    _jobApi.get()
      .then(res => {
        let jobsData = res.data.data.map(j => new Job(j))
        _setState('jobs', jobsData)
      })
  }
  deleteJob(id) {
    _jobApi.delete(id)
      .then(res => {
        let index = _state.jobs.findIndex(job => job._id == id)
        _state.jobs.splice(index, 1)
        _setState('jobs', _state.jobs)
      })
  }










}
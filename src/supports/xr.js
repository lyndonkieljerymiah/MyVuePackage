export class XR {

  constructor(urlConfig) {
    if (urlConfig) {
      this.config = {
        url: urlConfig,
        get: (name) => {
          let getUrl = '';
          _.forEach(this.config.url.route, function (value, key) {
            if (key === name) {
              getUrl = value;
              return false;
            }
          });
          return getUrl;
        }
      }
    }
  }

  post(name, data) {
    const url = this.config.get(name);
    return axios.post(url, data);
  }

  postController(controller, action, data) {
    return axios.post('/api/' + controller + '/' + action, data);
  }

  get(name, data) {
    
    const url = this.config.get(name);
    const params = {params: data} || {};
    
    return axios.get(url, params);
  }

  getController(controller, action) {
    var qs = "";
    if (arguments.length >= 3) {
      for (var i = 2; i < arguments.length; i++) {
        qs += arguments[i] + '/';
      }
    }
    qs = qs.substring(0, qs.length - 1);
    var url = '/api/' + controller + '/' + action + (qs !== "" ? "/" + qs : qs);
    return axios.get(url);
  }

}


class Observable {
  
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  notify() {
    this.subscribers.forEach(subscriber => subscriber.update());
  }
}



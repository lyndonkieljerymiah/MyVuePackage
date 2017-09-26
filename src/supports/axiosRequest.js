export class AxiosRequest {

  post(controller, action, data) {
    return axios.post('/api/' + controller + '/' + action, data);
  }

  get(controller, action) {
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

  dispatchGet(url, parameters) {
    if (parameters) {
      url = url + "?" + $.param(parameters);
    }
    return axios.get(url);
  }



  route(url) {
    var img = window.imagePath;
    window.location.href = url;

    return this;
  }

  redirect(controller, action = '', data = null, target = '_self') {

    var baseUrl = window.Laravel.baseUrl;
    var url = baseUrl + "/" + controller + "/" + (action !== null ? action : "") + (data !== null ? "/" + data : "");
    window.open(url, target);

  }

  postMultiForm(controller, action, formData) {
    return $.ajax({
      url: '/api/' + controller + '/' + action,
      type: 'POST',
      data: formData,
      headers: {
        'X-CSRF-TOKEN': window.Laravel.csrfToken
      },
      processData: false,
      contentType: false,
    });
  }
}

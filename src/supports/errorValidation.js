import {EventBus} from "../events/eventbus";

export class ErrorValidations {

  constructor() {
    let that = this;
    this.errors = {};
    this.exceptions = {
      errors: [],
      add: function (name, description) {
        that.errorExceptions
          .errors.push({
            name: name,
            description: description
          });
      }
    };
  }

  get(field) {
    if (this.errors[field]) {
      if (this.errors[field] instanceof Array) {
        return this.errors[field][0];
      } else {
        return this.errors[field];
      }
    }
    return "";
  }

  register(errors) {
    this.errors = errors;
  }

  clear(field) {
    if (this.errors[field]) {
        this.errors[field] = '';
        delete this.errors[field][0];
    }
  }

  clearAll() {
    this.errors = {};
  }
  all() {
    return this.errors;
  }

}

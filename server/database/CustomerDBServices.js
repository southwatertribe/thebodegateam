//Class CustomerDBServices
let instance = null;
const connection = require("../database/database_connection");

class CustomerDbServices {
  static getCustomerDbServicesInstance() {
    return instance ? instance : new CustomerDbServices();
  }
}

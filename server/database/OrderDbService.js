//Class OrderDbService purpose to manage all Order DB services
let instance = null;
const connection = require("../database/database_connection");

class OrderDbService {
  static getOrderDbServicesInstance() {
    return instance ? instance : new CustomerDbServices();
  }
}

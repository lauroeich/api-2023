
module.exports = app => {
  const controller = app.controller.customerWallets;
  app.route('/api/v1/customer-wallets')
    .get(controller.listCustomerWallets);
}
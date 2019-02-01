const addOrder = require('./addOrder');
const getOrder = require('./getOrder');

module.exports = {
  addOrder: addOrder.addOrder,
  getOrders: getOrder.getOrders,
  getOrderById: getOrder.getOrderByOrderId,
  getOrderByStatus: getOrder.getOrderByStatus,
  getItemsOfAOrder: getOrder.getItemsOfAOrder,
  updateOrderItems: addOrder.updateOrderItems,
};

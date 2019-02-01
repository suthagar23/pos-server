
require('../../database/index').dbConn; // eslint-disable-line
const Order = require('../../models/order/orderModel');
const config = require('../../config/serverConfig');
const { errorMessages } = require('../../config/responseMessagesConfig');

const dbFindLimit = config.DBOperations.findLimit;

/**
 * GET /orders route to retrieve all orders
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getOrders(req, res) {
  const result = {};
  let status = 200; // OK
  // Find all orders, then Sort and limit respones
  Order.find({}, (err, orders) => {
    if (!err) {
      result.status = status;
      result.result = orders;
    } else {
      status = 500; // Internal Server Error
      result.status = status;
      result.error = err;
    }
    res.status(status).send(result);
  }).sort({ $natural: -1 }).limit(dbFindLimit);
}

/**
 * GET /order/:orderId route to retrieve a order
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getOrderByOrderId(req, res) {
  const result = {};
  let status = 200; // OK
  const { orderId } = req.params;
  if (orderId) {
    // Find order using orderId, then Sort and limit respones
    Order.findById(orderId, (err, order) => {
      if (!err) {
        result.status = status;
        result.result = order;
      } else {
        status = 500; // Internal Server Error
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    }).sort({ $natural: -1 }).limit(dbFindLimit);
  } else {
    status = 400; // Bad Request
    result.status = status;
    result.error = errorMessages.REST.Order.InvalidOrderId;
    res.status(status).send(result);
  }
}

/**
 * GET /order/status/:orderStatus route to retrieve orders by status
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getOrderByStatus(req, res) {
  const result = {};
  let status = 200; // OK
  const { orderStatus } = req.params;

  if (orderStatus) {
    // Find orders using status, then Sort and limit respones
    Order.find({ orderStatus: [orderStatus] }, (err, order) => {
      if (!err) {
        result.status = status;
        result.result = order;
      } else {
        status = 500; // Internal Server Error
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    }).select('-orderItems').sort({ $natural: -1 }).limit(dbFindLimit);
  } else {
    status = 400; // Bad Request
    result.status = status;
    result.error = errorMessages.REST.Order.InvalidOrderStatus;
    res.status(status).send(result);
  }
}

/**
 * GET /order/items/:orderId route to retrieve all items of a order
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getItemsOfAOrder(req, res) {
  const result = {};
  let status = 200; // OK
  const { orderId } = req.params;

  if (orderId) {
    Order.find({ _id: [orderId] }, (err, order) => {
      if (!err) {
        result.status = status;
        result.result = order;
      } else {
        status = 500; // Internal Server Error
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    }).select('orderItems');
  } else {
    status = 400; // Bad Request
    result.status = status;
    result.error = errorMessages.REST.Order.InvalidOrderStatus;
    res.status(status).send(result);
  }
}

module.exports = {
  getOrders,
  getOrderByOrderId,
  getOrderByStatus,
  getItemsOfAOrder,
};


require('../../database/index').dbConn; // eslint-disable-line
const Order = require('../../models/order/orderModel');

/**
 * POST /order route to create a new order
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function addOrder(req, res) {
  const result = {};
  let status = 201; // Created
  // Destructing requied fields from requests to save the order
  const { orderId } = req.body;
  Order.findById(orderId, (err, order) => {
    if (!order) {
      const {
        orderStatus, orderMadeByUserId, orderGrossAmount, orderNetAmount,
        orderItems, orderDiscount, orderStartedDate,
      } = req.body;
      const newOrder = new Order({
        orderStatus,
        orderMadeByUserId,
        orderGrossAmount,
        orderNetAmount,
        orderItems,
        orderDiscount,
        orderStartedDate,
      });
      const currentDate = new Date();
      newOrder.lastModifiedAt = currentDate;
      newOrder.save((errObj, orderObject) => {
        if (!err) {
          console.log(orderObject);
          result.status = status;
          result.result = orderObject;
        } else {
          status = 500; // Internal Server Error
          result.status = status;
          result.error = errObj;
        }
        res.status(status).send(result);
        return result;
      });
    } else {
      const data = req.body;
      Object.keys(data).forEach((key) => {
        if (data[key] !== undefined) {
          order[key] = data[key];
        }
      });
      const currentDate = new Date();
      order.lastModifiedAt = currentDate;
      order.save((errSaved, savedOrderObject) => {
        if (!errSaved) {
          result.status = status;
          result.result = savedOrderObject;
        } else {
          status = 500; // Internal Server Error
          result.status = status;
          result.error = errSaved;
        }
        res.status(status).send(result);
      });
    }
  });
}

/**
 * POST /order/items/:orderId route to update order items
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function updateOrderItems(req, res) {
  const result = {};
  let status = 201; // Created
  // Destructing requied fields from requests to save the order
  const { orderId, orderItem } = req.body;
  Order.findById(orderId, (err, order) => {
    if (!order) {
      status = 404;
      result.status = status;
      result.error = 'Counld not find the order';
      res.status(status).send(result);
      return result;
    }

    if (orderItem !== undefined && orderItem.itemCode !== undefined) {
      let itemFound = false;
      order.orderItems.forEach((item, key) => {
        if (item.itemCode === orderItem.itemCode) {
          order.orderItems[key] = orderItem;
          itemFound = true;
        }
      });
      if (!itemFound) {
        order.orderItems = order.orderItems.concat(orderItem);
      }
      order.save((errSaved, savedOrderObject) => {
        if (!errSaved) {
          result.status = status;
          result.result = savedOrderObject;
        } else {
          status = 500; // Internal Server Error
          result.status = status;
          result.error = errSaved;
        }

        res.status(status).send(result);
        return savedOrderObject;
      });
    }
    return null;
  });
}

module.exports = {
  addOrder,
  updateOrderItems,
};


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
  const {
    orderStatus, orderMadeByUserId, orderGrossAmount, orderNetAmount, orderItems,
  } = req.body;
  const order = new Order({
    orderStatus,
    orderMadeByUserId,
    orderGrossAmount,
    orderNetAmount,
    orderItems,
  });

  order.save((err, userObject) => {
    if (!err) {
      result.status = status;
      result.result = userObject;
    } else {
      status = 500; // Internal Server Error
      result.status = status;
      result.error = err;
    }
    res.status(status).send(result);
  });
}

module.exports = {
  addOrder,
};

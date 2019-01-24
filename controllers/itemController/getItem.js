
require('../../database/index').dbConn; // eslint-disable-line
const Item = require('../../models/itemModel');
const config = require('../../config');

const dbFindLimit = config.DBOperations.findLimt;

/**
 * GET /items route to retrieve all items
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getItems(req, res) {
  const result = {};
  let status = 200; // OK
  Item.find({}, (err, users) => {
    if (!err) {
      result.status = status;
      result.result = users;
    } else {
      status = 500; // Internal Server Error
      result.status = status;
      result.error = err;
    }
    res.status(status).send(result);
  }).sort({ $natural: -1 }).limit(dbFindLimit);
}

/**
 * GET /item/:itemId route to retrieve a item
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getItemByItemId(req, res) {
  const result = {};
  let status = 200; // OK
  const { itemId } = req.params;
  if (itemId) {
    Item.findById(itemId, (err, user) => {
      if (!err) {
        result.status = status;
        result.result = user;
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
    result.error = 'Invalid itemId';
    res.status(status).send(result);
  }
}

/**
 * GET /item/itemCode/:itemCode route to retrieve a item
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getItemByItemCode(req, res) {
  const result = {};
  let status = 200; // OK
  const { itemCode } = req.params;
  if (itemCode) {
    Item.find({ itemCode }, (err, user) => {
      if (!err) {
        result.status = status;
        result.result = user;
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
    result.error = 'Invalid itemCode';
    res.status(status).send(result);
  }
}


/**
 * GET /item/itemName/:itemName route to retrieve a item
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getItemByItemName(req, res) {
  const result = {};
  let status = 200; // OK
  const { itemName } = req.params;
  if (itemName) {
    Item.find({ itemName }, (err, user) => {
      if (!err) {
        result.status = status;
        result.result = user;
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
    result.error = 'Invalid itemName';
    res.status(status).send(result);
  }
}

module.exports = {
  getItems,
  getItemByItemId,
  getItemByItemName,
  getItemByItemCode,
};

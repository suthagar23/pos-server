
require('../../database/index').dbConn; // eslint-disable-line
const Item = require('../../models/itemModel');
const config = require('../../config/serverConfig');
const { errorMessages } = require('../../config/responseMessagesConfig');

const dbFindLimit = config.DBOperations.findLimit;
const dbSearchLimit = config.DBOperations.searchLimit;

/**
 * GET /items route to retrieve all items
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function getItems(req, res) {
  const result = {};
  let status = 200; // OK
  // Find all items, then Sort and limit respones
  Item.find({}, (err, items) => {
    if (!err) {
      result.status = status;
      result.result = items;
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
    // Find item using itemId, then Sort and limit respones
    Item.findById(itemId, (err, item) => {
      if (!err) {
        result.status = status;
        result.result = item;
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
    result.error = errorMessages.REST.Item.InvalidItemId;
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
    // Find item using itemCode, then Sort and limit respones
    Item.find({ itemCode }, (err, item) => {
      if (!err) {
        result.status = status;
        result.result = item;
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
    result.error = errorMessages.REST.Item.InvalidItemCode;
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
    // Find item using itemName, then Sort and limit respones
    Item.find({ itemName }, (err, item) => {
      if (!err) {
        result.status = status;
        result.result = item;
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
    result.error = errorMessages.REST.Item.InvalidItemName;
    res.status(status).send(result);
  }
}

/**
 * GET /item/search/:value route to search for a item by itemName or ItemCode
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function searchItem(req, res) {
  const result = {};
  let status = 200; // OK
  const { value } = req.params;
  if (value) {
    // Search item using itemName or itemCode, then Sort and limit respones
    // ItemName : value*
    // ItemCode : value*
    const caseInSensitivePattern = new RegExp(`.*${value}.*`, 'i');
    Item.find({
      $or: [{ itemName: { $regex: caseInSensitivePattern } },
        { itemCode: { $regex: caseInSensitivePattern } }],
    },
    (err, item) => {
      if (!err) {
        result.status = status;
        result.result = item;
      } else {
        status = 500; // Internal Server Error
        result.status = status;
        result.error = err;
      }
      res.status(status).send(result);
    }).sort({ $natural: -1 }).limit(dbSearchLimit);
  } else {
    status = 400; // Bad Request
    result.status = status;
    result.error = errorMessages.REST.Item.InvalidItemId;
    res.status(status).send(result);
  }
}

module.exports = {
  getItems,
  getItemByItemId,
  getItemByItemName,
  getItemByItemCode,
  searchItem,
};

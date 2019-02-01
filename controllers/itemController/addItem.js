
require('../../database/index').dbConn; // eslint-disable-line
const Item = require('../../models/itemModel');

/**
 * POST /item route to create a new item
 * @param {object} req - request object.
 * @param {object} res - response object.
 */
async function addItem(req, res) {
  const result = {};
  let status = 201; // Created
  // Destructing requied fields from requests to save the item
  const {
    itemCode, itemName, itemDescription, unitPrice, discountPercentage, stockCount,
  } = req.body;
  const item = new Item({
    itemCode,
    itemName,
    itemDescription,
    unitPrice,
    discountPercentage,
    stockCount,
    itemStatus: 'false',
  });

  item.save((err, itemObject) => {
    if (!err) {
      result.status = status;
      result.result = itemObject;
    } else {
      status = 500; // Internal Server Error
      result.status = status;
      result.error = err;
    }
    res.status(status).send(result);
  });
}

module.exports = {
  addItem,
};

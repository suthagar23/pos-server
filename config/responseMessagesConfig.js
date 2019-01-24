const respone = {
  error: {
    Authentication: {
      Error: 'Authentication error.',
      UnAuthorized: 'Unauthorized request. Please login again.',
      TokenRequired: 'Authentication error. Token required.',
      AccessRequired: 'Access Required',
      InvalidUserNamePassword: 'Authentication Failed, Invalid userName or Password',
    },
    NotFound: 'Sorry, Not found',
    REST: {
      Item: {
        InvalidItemId: 'Invalid itemId',
        InvalidItemCode: 'Invalid itemCode',
        InvalidItemName: 'Invalid itemName',
      },
      User: {
        InvalidUserId: 'Invalid userId',
        InvalidUserName: 'Invalid UserName',
      },
    },
  },
};

const translatedRespones = (() => respone)();

module.exports = {
  responseMessages: translatedRespones,
  errorMessages: translatedRespones.error,
};

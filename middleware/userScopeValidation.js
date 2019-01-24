const appOptions = require('../config');

function getRequiredUserScopeFromURL(restUrl, method) {
  const model = restUrl.replace(`${appOptions.RestOptions.baseUrl}/`, '');
  return method.concat('_', model.split('/')[0]).toUpperCase();
}

module.exports = {
  checkUserScopes: (req, res, next) => {
    const restUrl = req.originalUrl;
    const { method } = req;
    let result = {};
    if (restUrl && method) {
      const requiredScope = getRequiredUserScopeFromURL(restUrl, method);
      const payload = req.JWT_Decoded;
      if (payload && payload.userScopes.includes(requiredScope)) {
        next();
      } else {
        result = {
          error: 'Access required.',
          status: 403,
        };
        res.status(403).send(result);
      }
    } else {
      result = {
        error: 'Authentication error. Access required.',
        status: 401,
      };
      res.status(401).send(result);
    }
  },
};

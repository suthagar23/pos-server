
/** *********************************************************
 * POST /api/v1/order
 * @swagger
 * /api/v1/order:
 *   post:
 *     tags:
 *       - Order
 *     description: Add a new order
 *     produces:
 *       - application/json
 *     requestBody:
 *         content:
 *             application/json:
 *                 schema:
 *                      $ref: '#/components/schemas/Order'
 *     responses:
 *        200:
 *          $ref: '#/components/responses/Authenticated'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 *     components:
 *        securitySchemes:
 *          $ref: '#/components/securitySchemes/bearerAuth'
 *     security:
 *        - bearerAuth: []
 */


/** *********************************************************
 * POST /api/v1/order/items
 * @swagger
 * /api/v1/order/items:
 *   post:
 *     tags:
 *       - Order
 *     description: Add items to order
 *     produces:
 *       - application/json
 *     requestBody:
 *         content:
 *             application/json:
 *                 schema:
 *                      $ref: '#/components/schemas/Order'
 *     responses:
 *        200:
 *          $ref: '#/components/responses/Authenticated'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 *     components:
 *        securitySchemes:
 *          $ref: '#/components/securitySchemes/bearerAuth'
 *     security:
 *        - bearerAuth: []
 */

 
/** *********************************************************
 * GET /api/v1/orders
 * @swagger
 * /api/v1/orders:
 *   get:
 *     tags:
 *       - Order
 *     description: Retrieve all orders
 *     produces:
 *       - application/json
 *     responses:
 *        200:
 *          $ref: '#/components/responses/Authenticated'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 *     components:
 *        securitySchemes:
 *          $ref: '#/components/securitySchemes/bearerAuth'
 *     security:
 *        - bearerAuth: []
 */

 /** *********************************************************
 * GET /api/v1/order/:orderId
 * @swagger
 * /api/v1/order/:orderId:
 *   get:
 *     tags:
 *       - Order
 *     description: Retrieve a order by orderId
 *     produces:
 *       - application/json
 *     responses:
 *        200:
 *          $ref: '#/components/responses/Authenticated'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 *     components:
 *        securitySchemes:
 *          $ref: '#/components/securitySchemes/bearerAuth'
 *     security:
 *        - bearerAuth: []
 */

 /** *********************************************************
 * GET /api/v1/order/status/:orderStatus
 * @swagger
 * /api/v1/order/status/:orderStatus:
 *   get:
 *     tags:
 *       - Order
 *     description: Retrieve a order by orderStatus
 *     produces:
 *       - application/json
 *     responses:
 *        200:
 *          $ref: '#/components/responses/Authenticated'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 *     components:
 *        securitySchemes:
 *          $ref: '#/components/securitySchemes/bearerAuth'
 *     security:
 *        - bearerAuth: []
 */

 /** *********************************************************
 * GET /api/v1/order/items/:itemId
 * @swagger
 * /api/v1/order/items/:itemId:
 *   get:
 *     tags:
 *       - Order
 *     description: Retrieve all items of a order
 *     produces:
 *       - application/json
 *     responses:
 *        200:
 *          $ref: '#/components/responses/Authenticated'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 *     components:
 *        securitySchemes:
 *          $ref: '#/components/securitySchemes/bearerAuth'
 *     security:
 *        - bearerAuth: []
 */
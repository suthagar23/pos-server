
/** *********************************************************
 * GET /api/v1/items
 * @swagger
 * /api/v1/items:
 *   get:
 *     tags:
 *       - Item
 *     description: Retrieve all items
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
 * GET /api/v1/item/:itemId
 * @swagger
 * /api/v1/item/{itemId}:
 *   get:
 *     tags:
 *       - Item
 *     description: Retrieve a item by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: itemId
 *         schema:
*              type: string
 *         required: true
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
 * GET /api/v1/item/itemName/:itemName
 * @swagger
 * /api/v1/item/itemName/{itemName}:
 *   get:
 *     tags:
 *       - Item
 *     description: Retrieve a item by itemName
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: itemName
 *         schema:
*              type: string
 *         required: true
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
 * GET /api/v1/item/itemCode/:itemCode
 * @swagger
 * /api/v1/item/itemCode/{itemCode}:
 *   get:
 *     tags:
 *       - Item
 *     description: Retrieve a item by itemCode
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: itemCode
 *         schema:
*              type: string
 *         required: true
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
 * POST /api/v1/item
 * @swagger
 * /api/v1/item:
 *   post:
 *     tags:
 *       - Item
 *     description: Add a new item
 *     produces:
 *       - application/json
 *     requestBody:
 *         content:
 *             application/json:
 *                 schema:
 *                      $ref: '#/components/schemas/Item'
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

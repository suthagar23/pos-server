
/** *********************************************************
 * GET /api/v1/users
 * @swagger
 * /api/v1/users:
 *   get:
 *     tags:
 *       - User
 *     description: Retrieve all users
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
 * GET /api/v1/user/:userId
 * @swagger
 * /api/v1/user/{userId}:
 *   get:
 *     tags:
 *       - User
 *     description: Retrieve a user by id
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: userId
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
 * GET /api/v1/user/userName/:userName
 * @swagger
 * /api/v1/user/userName/{userName}:
 *   get:
 *     tags:
 *       - User
 *     description: Retrieve a user by userName
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: userName
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
 * POST /api/v1/user
 * @swagger
 * /api/v1/user:
 *   post:
 *     tags:
 *       - User
 *     description: Add a new user
 *     produces:
 *       - application/json
 *     requestBody:
 *         content:
 *             application/json:
 *                 schema:
 *                      $ref: '#/components/schemas/User'
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

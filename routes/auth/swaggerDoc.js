

/**
 * @swagger
 * /api/v1/auth:
 *   post:
 *     tags:
 *       - Authentication
 *     description: Authenticate a user
 *     produces:
 *       - application/json
 *     consumes:
 *       - application/x-www-form-urlencoded
 *     requestBody:
 *         content:
 *             application/x-www-form-urlencoded:
 *                 schema:
 *                      type: object
 *                      required:
 *                          userName
 *                          password
 *                      properties:
 *                          userName:
 *                              type: string
 *                              description: Enter your userName
 *                              example: admin
 *                          password:
 *                              type: string
 *                              format: password
 *                              description: Enter your password
 *                              example: admin123
 *     responses:
 *        200:
 *          $ref: '#/components/responses/Authenticated'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 */

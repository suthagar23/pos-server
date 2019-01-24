
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

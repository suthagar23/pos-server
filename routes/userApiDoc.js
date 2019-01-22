/**
 * @swagger
 * definitions:
 *   User:
 *     properties:
 *       userName:
 *         type: string
 *       firstName:
 *         type: string
 *       lastName:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *       registerdAt:
 *         type: Date
 *       lastAccessedAt:
 *         type: Date
 *       lastModifiedAt:
 *         type: Date
 *       userStatus:
 *         type: true
 *       userRole:
 *         type: string
 */


 /**
 * @swagger
 * /api/v1/login:
 *   post:
 *     tags:
 *       - Login
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
 *       200:
 *         description: Authenticated 
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 *     components:
 *        securitySchemes:
 *              bearerAuth:
 *                  type: http
 *                  scheme: bearer
 *                  bearerFormat: JWT
 *     security:
 *        - bearerAuth: []
 */

 
/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     tags:
 *       - Users
 *     description: Returns all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Authenticated 
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Not Found
 *       500:
 *         description: Internal Server Error
 *     components:
 *        securitySchemes:
 *              bearerAuth:
 *                  type: http
 *                  scheme: bearer
 *                  bearerFormat: JWT
 *     security:
 *        - bearerAuth: []
 */

 /**
 * @swagger
 * /api/v1/user:
 *   post:
 *     tags:
 *       - User
 *     description: Add new user
 *     produces:
 *       - application/json
 *     responses:
 *       201:
 *         description: Created 
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Server Error
 *     components:
 *        securitySchemes:
 *              bearerAuth:
 *                  type: http
 *                  scheme: bearer
 *                  bearerFormat: JWT
 *     security:
 *        - bearerAuth: []
 */
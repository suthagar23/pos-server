/**
 * @swagger
 * components:
 *   responses:
 *     Authenticated:
 *       description: Authenticated
 *     Unauthorized:
 *       description: Unauthorized
 *     NotFound:
 *       description: Not Found
 *     ServerError:
 *       description: Internal Server Error
 *   schemas:
 *    User:
 *      required:
 *          userName
 *          password
 *          email
 *      properties:
 *          userName:
 *              type: string
 *              example: UserName
 *          firstName:
 *               type: string
 *               example: firstName
 *          lastName:
 *               type: string
 *               example: lastName
 *          email:
 *               type: string
 *               example: email
 *          password:
 *               type: string
 *               example: password
 *          userStatus:
 *              type: string
 *              example: userStatus
 *          userRole:
 *               type: string
 *               example: userRole
 *    Item:
 *      required:
 *          userName
 *          password
 *          email
 *      properties:
 *          itemCode:
 *              type: string
 *              example: itemCode
 *          itemName:
 *               type: string
 *               example: itemName
 *          itemDescription:
 *               type: string
 *               example: itemDescription
 *          unitPrice:
 *               type: number
 *               example: 10
 *          discountPercentage:
 *               type: number
 *               example: 10
 *          stockCount:
 *              type: number
 *              example: 100
 *          itemStatus:
 *               type: boolean
 *               example: true
 *    OrderItem:
 *      required:
 *          itemCode
 *          quantity
 *          unitPrice
 *      properties:
 *          itemCode:
 *              type: string
 *              example: ITM98
 *          itemName:
 *               type: string
 *               example: sampleItem
 *          quantity:
 *               type: number
 *               example: 2
 *          unitPrice:
 *               type: number
 *               example: 12
 *          discountPercentage:
 *               type: number
 *               example: 10
 *    Order:
 *      required:
 *          orderStatus
 *          orderMadeByUserId
 *          orderGrossAmount
 *          orderNetAmount
 *      properties:
 *          orderStatus:
 *              type: string
 *              description: Status of the order
 *              example: NEW_ORDER
 *          orderMadeByUserId:
 *              type: string
 *              description: UserId of the order creator
 *              example: USR123
 *          orderGrossAmount:
 *              type: number
 *              description: Gross amount of the order
 *              example: 100
 *          orderNetAmount:
 *              type: number
 *              description: Net amount of the order
 *              example: 80
 *          orderItems:
 *              $ref: '#/components/schemas/OrderItem'
 */

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HelloWorldRoute = void 0;
const helloWorld_controller_1 = require("@controllers/helloWorld.controller");
const urls_constant_1 = require("../constants/urls.constant");
class HelloWorldRoute {
    constructor() {
        this.helloWorldController = new helloWorld_controller_1.HelloWorldController();
    }
    routes(app) {
        /**
         * @swagger
         * /consult-contributor:
         *   post:
         *     tags: [Contributor]
         *     responses:
         *      201:
         *        description: Return a contributor.
         *        content:
         *          application/json:
         *            schema:
         *              $ref: '#/components/schemas/ConsultContributor'
         *      401:
         *        $ref: '#/components/responses/Unauthorized'
         *      404:
         *        $ref: '#/components/responses/NotFound'
         *      400:
         *        $ref: '#/components/responses/Error'
         */
        app
            .route(`${urls_constant_1.urls.base}/hello-world`)
            .get(this.helloWorldController.getHelloWorldMessage);
    }
}
exports.HelloWorldRoute = HelloWorldRoute;
//# sourceMappingURL=helloWorld.route.js.map
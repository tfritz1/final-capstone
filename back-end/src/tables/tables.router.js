/**
 * Defines the router for table resources.
 *
 * @type {Router}
 *
 **/

 const router = require("express").Router();
 const methodNotAllowed = require("../errors/methodNotAllowed");
 const controller = require("./tables.controller");
 
 router
     .route("/")
     .get(controller.list)
     .post(controller.create)
     .all(methodNotAllowed);
 
 router
    .route("/:table_id")
    .get(controller.read)
    .all(methodNotAllowed);
 
 router
     .route("/:table_id/seat")
     .put(controller.update)
     .delete(controller.deleteReservationId)
     .all(methodNotAllowed);
 
 module.exports = router;
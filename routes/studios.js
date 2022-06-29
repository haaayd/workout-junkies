import { Router } from 'express'
import * as studiosCtrl from "../controllers/studios.js"
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()
//GET localhost:3000/studios
router.get("/", studiosCtrl.index)
//GET localhost:3000/studios/new
router.get("/new", studiosCtrl.new)
//GET localhost:3000/studios/:id
router.get("/:id", studiosCtrl.show)
//GET localhost:3000/studios/:id
router.get("/:id", isLoggedIn, studiosCtrl.showClass)
//GET localhost:3000/studios/:id/edit
router.get("/:id/edit", isLoggedIn, studiosCtrl.edit)


//PUT localhost:3000/studios/:id
router.put("/:id", isLoggedIn, studiosCtrl.update)

//POST localhost:3000/studios
router.post("/", isLoggedIn, studiosCtrl.create)
router.post("/:id/classes", isLoggedIn, studiosCtrl.createClass)
router.post("/:studioId/classes/:classId/reviews", isLoggedIn, studiosCtrl.createReview)

//DELETE localhost:3000/studios/:id
router.delete("/:id", isLoggedIn, studiosCtrl.delete)

export {
  router
}

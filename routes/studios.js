import { Router } from 'express'
import * as studiosCtrl from "../controllers/studios.js"
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()
//GET localhost:3000/studios
router.get("/", studiosCtrl.index)
//GET localhost:3000/studios/:id
router.get("/:id", studiosCtrl.show)
//GET localhost:3000/studios/:id/edit
router.get("/:id/edit", isLoggedIn, studiosCtrl.edit)

//PUT localhost:3000/studios/:id
router.put("/:id", isLoggedIn, studiosCtrl.update)

//POST localhost:3000/studios
router.post("/", isLoggedIn, studiosCtrl.create)


export {
  router
}

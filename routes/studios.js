import { Router } from 'express'
import * as studiosCtrl from "../controllers/studios.js"
import { isLoggedIn } from "../middleware/middleware.js"


const router = Router()
//GET localhost:3000/studios
router.get("/", studiosCtrl.index)


//POST localhost:3000/studios
router.post("/", isLoggedIn, studiosCtrl.create)


export {
  router
}

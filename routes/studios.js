import { Router } from 'express'
import * as studiosCtrl from "../controllers/studios.js"

const router = Router()

router.get("/", studiosCtrl.index)

export {
  router
}

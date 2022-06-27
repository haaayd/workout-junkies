import { Studio } from "../models/studio.js"

function index(req, res) {
  Studio.find({})
  .then(studios => {
    res.render("studios/index", {
      studios: studios,
      title: "Studios"
    })
  })
  .catch (error => {
    console.log(error)
    res.redirect("/")
  })
}

export { 
  index
}
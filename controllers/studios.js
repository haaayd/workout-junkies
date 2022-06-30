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
function newStudio (req, res){
  res.render("studios/new", {
    title: "Add Studio"
  })
}

function create (req, res) {
req.body.owner = req.user.profile._id
req.body.parking = !!req.body.parking
Studio.create(req.body)
.then( studio => {
  res.redirect("/studios")

})
.catch (error => {
  console.log(error)
  res.redirect("/studios")
})
}

function show (req, res) {
  Studio.findById(req.params.id)
  .populate("owner")
  .then(studio => {
    res.render("studios/show", {
      studio : studio, 
      title: "Show"

    })
  })
  .catch (error => {
    console.log(error)
    res.redirect("/studios")
  })
}
function edit (req, res) {
  Studio.findById(req.params.id)
  .then(studio => {
    res.render("studios/edit", {
      studio: studio, 
      title: "Edit Studio"
    })
  })
  .catch (error => {
    console.log(error)
    res.redirect("/studios")
  })
}

function update (req, res) {
  Studio.findById(req.params.id)
  .then(studio => {
    if (studio.owner.equals(req.user.profile._id)) {
      req.body.parking = !!req.body.parking
      studio.updateOne(req.body, {new: true})
      .then(() => {
        res.redirect(`/studios/${studio._id}`)

      })
    } else {
      throw new Error ("👋🏽 NOT AUTHORIZED")
    }
  })
  .catch (error => {
    console.log(error)
    res.redirect("/studios")
  })

}
function deleteStudio (req, res) {
  Studio.findById(req.params.id)
  .then( studio => {
    if (studio.owner.equals(req.user.profile._id)) {
      studio.delete()
      .then(() => {
        res.redirect("/studios")
      })
    } else {
      throw new Error ("👋🏽 NOT AUTHORIZED")
    }
  })
  .catch (error => {
    console.log(error)
    res.redirect("/studios")
  })
}

function showClass (req, res) {
  Studio.findById(req.params.id)
  .then(studio => {
    res.render("studios/show", {
      studio: studio,
      title: "Show",
      class: Class,
    })
  })
  .catch (error => {
    console.log(error)
    res.redirect("/studios")
  })
    
}
function createClass(req, res) {
  Studio.findById(req.params.id)
  .then(studio => {
    studio.classes.push(req.body)
    studio.save()
    .then(() => {
      res.redirect(`/studios/${studio._id}`)
    })
  })
  .catch (error => {
    console.log(error)
    res.redirect("/studios")
  })
}
function createReview(req, res) {
  Studio.findById(req.params.studioId)
  .then(studio => {
    console.log(studio)
    const c = studio.classes.id(req.params.classId)
    console.log(c)
    c.reviews.push(req.body)
    studio.save()
    .then(() => {
      res.redirect(`/studios/${studio._id}`)
    })
  })
  .catch (error => {
    console.log(error)
    res.redirect("/studios")
  })
}

export { 
  index,
  newStudio as new, 
  create, 
  show, 
  edit,
  update,
  deleteStudio as delete, 
  showClass,
  createClass, 
  createReview
}
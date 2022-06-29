import { Profile } from '../models/profile.js'

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles: profiles
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect(`/profiles/${req.user.profile._id}`)
  })
}
function show(req, res) {
  Profile.findById(req.params.id)
  .then(profile => {
    profile._id.equals(req.user.profile._id)
    res.render("profiles/show", {
      profile : profile 
      

    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/")
  })
}

export {
  index, 
  show
}
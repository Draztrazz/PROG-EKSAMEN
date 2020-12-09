if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }
  
  const express = require('express')
  const app = express()
  const bcrypt = require('bcrypt')
  const passport = require('passport')
  const flash = require('express-flash')
  const session = require('express-session')
  const methodOverride = require('method-override')
  
  const initializePassport = require('./passport-config')
  initializePassport(
    passport,
    email => users.find(user => user.email === email),
    id => users.find(user => user.id === id)
  )
  const users = []
  
  app.set('view-engine', 'ejs')
  app.use(express.urlencoded({ extended: false }))
  app.use(flash())
  app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  }))
  app.use(passport.initialize())
  app.use(passport.session())
  app.use(methodOverride('_method'))
  
  app.get('/', checkAuthenticated, (req, res) => {
    res.render('index.ejs', {
      fname: req.user.fname,
      lname: req.user.lname,
      age: req.user.age,
      gender: req.user.gender,
      liked: req.user.liked,
      matched: req.user.matched,
      disliked: req.user.disliked})
  })
  
  app.get('/login', checkNotAuthenticated, (req, res) => {
    res.render('login.ejs')
  })
  
  app.post('/login', checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }))

  app.delete('/logout', (req, res) => {
    req.logOut()
    res.redirect('/login')
  })
function deleteuser(user){
  for(i=0; i<users.length; i++){
    if (users[i]==user){
      users.splice(i, 1)
    }
  }
}
  app.post('/delete', (req, res) =>{
    deleteuser(req.user)
    req.logOut()
    res.redirect('/login')
  })
  
  app.get('/register', checkNotAuthenticated, (req, res) => {
    res.render('register.ejs')
  })
  
  app.post('/register', checkNotAuthenticated, async (req, res) => {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10)
      users.push({
        id: Date.now().toString(),
        fname: req.body.fname,
        lname: req.body.lname,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email,
        password: hashedPassword,
        liked: [],
        disliked: [],
        matched: []
      })
      res.redirect('/login')
    } catch {
      res.redirect('/register')
    }
  })
  app.get('/updateprofile', (req, res) =>{
    res.render('updateprofile.ejs')
  })
  app.post('/updateprofile', (req, res) =>{
    req.user.fname = req.body.fname,
    req.user.lname = req.body.lname,
    req.user.age = req.body.age,
    req.user.gender = req.body.gender,
    res.redirect('/')
  })
  app.get('/matches', checkAuthenticated, (req, res) =>{
    res.render('matches.ejs')
  })
  app.get('/emilie', checkAuthenticated, (req, res) => {
    res.render('emilie.ejs')
  })

  app.post('/likeemilie', (req, res) =>{
    if(req.user.liked.includes("Emilie")==true){
      return
    }
    else{req.user.liked.push("Emilie")}
    if(req.user.disliked.includes("Emilie")==true){
      req.user.disliked = req.user.disliked.filter(e => e !== 'Emilie');
    }
    res.redirect('/emilie')
  })

  app.post('/dislikeemilie', (req, res) =>{
    if(req.user.disliked.includes("Emilie")==true){
      return
    }
    else{req.user.disliked.push("Emilie")}
    if(req.user.liked.includes("Emilie")==true){
      req.user.liked = req.user.liked.filter(e => e !== 'Emilie');
    }
    res.redirect('/emilie')
  })

  app.get('/jens', checkAuthenticated, (req, res) => {
    res.render('jens.ejs')
  })

  app.post('/likejens', (req, res) =>{
    if(req.user.liked.includes("Jens")==true){
      return
    }
    else{req.user.liked.push("Jens")}
    if(req.user.disliked.includes("Jens")==true){
      req.user.disliked = req.user.disliked.filter(e => e !== 'Jens');
    }
    res.redirect('/jens')
  })

  app.post('/dislikejens', (req, res) =>{
    if(req.user.disliked.includes("Jens")==true){
      return
    }
    else{req.user.disliked.push("Jens")}
    if(req.user.liked.includes("Jens")==true){
      req.user.liked = req.user.liked.filter(e => e !== 'Jens');
    }
    res.redirect('/jens')
  })

  app.get('/lone', checkAuthenticated, (req, res) => {
    res.render('lone.ejs')
  })
  app.post('/likelone', (req, res) =>{
    if(req.user.matched.includes("Lone")==true){
      return
    }
    else{req.user.matched.push("Lone")}
    if(req.user.disliked.includes("Lone")==true){
      req.user.disliked = req.user.disliked.filter(e => e !== 'Lone');
    }
    res.redirect('/lone')
  })

  app.post('/dislikelone', (req, res) =>{
    if(req.user.disliked.includes("Lone")==true){
      return
    }
    else{req.user.disliked.push("Lone")}
    if(req.user.matched.includes("Lone")==true){
      req.user.matched = req.user.matched.filter(e => e !== 'Lone');
    }
    res.redirect('/lone')
  })

  app.get('/jesper', checkAuthenticated, (req, res) => {
    res.render('jesper.ejs')
  })

  app.post('/likejesper', (req, res) =>{
    if(req.user.matched.includes("Jesper")==true){
      return
    }
    else{req.user.matched.push("Jesper")}
    if(req.user.disliked.includes("Jesper")==true){
      req.user.disliked = req.user.disliked.filter(e => e !== 'Jesper');
    }
    res.redirect('/jesper')
  })

  app.post('/dislikejesper', (req, res) =>{
    if(req.user.disliked.includes("Jesper")==true){
      return
    }
    else{req.user.disliked.push("Jesper")}
    if(req.user.matched.includes("Jesper")==true){
      req.user.matched = req.user.matched.filter(e => e !== 'Jesper');
    }
    res.redirect('/jesper')
  })
  
  function checkAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next()
    }
  
    res.redirect('/login')
  }
  
  function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return res.redirect('/')
    }
    next()
  }
  
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Listening on port ${port}...`));
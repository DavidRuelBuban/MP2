import ".App.css";
import Home from "./Components/Home";

function App() {
    return <div className="App">Home</div>;
}

export default App;






// const express = require('express')


// app.get('/', (req, res)=>{
//     res.send('Welcome to Home');
//  })
 

// //  middleware
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json());
// app.use(methodOverride('_method'))


// app.set('view engine','ejs')
// app.set('views', path.join(__dirname, 'views'));


// // crud Api
// app.get('/about',(req, res)=>{
//     res.render('views/about')
//  })
 
//  app.get('/contact',(req, res)=>{
//     res.render('views/contact')
//  })
 
//  app.get('/logIn',(req, res)=>{
//     res.render('views/logIn')
//  })
 
//  // routing for restful
// //  app.get('/comments',(req, res)=>{
// //     // const {id} = req.params
// //    const comment = comments.find(c => c.id === parseInt(id))
// //     res.render('comments/show', {comment})
// //  })

// // app.patch('/comments/:id', (req, res)=>{
// //     const {id} = req.params;
// //     const foundcomment = comments.find(c => c.id === parseInt(id))
// //     const newCommentText = req.body.comment
// //     foundcomment.comment = newCommentText;
// //     res.redirect('/comments');
// //  });
 
 
import './App.css'
import Header from './components/Header'

function App() { 
  return (
    <>
      <Header text={"Hello World!"}/>
      <div className="container">
        <h1 className='font-bold text-5xl text-blue-600/75'>My App</h1>
      </div>

    </>
    
  )
}

export default App


/* The code down below is only for testing and learning purposes */

// import './App.css'

// function App() {

//   const title = 'Blog Post'
//   const body = 'This is a blog post'
//   const comments = [
//     { id: 1, text: 'Comment one' },
//     { id: 2, text: 'Comment two' },
//     { id: 3, text: 'Comment three' },
//   ]

//   const loading = false
//   const showComments = true
//   const commentBlock =
//     ((<div className="comments">
//         <h3>comments ({comments.length})</h3>
//         <ul>
//           {comments.map((comment, index) => (
//             <li key={index}>{comment.text}</li>
//           ))}
//         </ul>
//       </div>))

//   if (loading) return <h1>Loading...</h1>

//   return (
//     <>
//       <div className="container">
//         <h1 className="text-6xl text-blue-600 text-center">{title.toUpperCase()}</h1>
//         <p>{body}</p>

//         {showComments && commentBlock}

//       </div>
//     </>
//   )
// }

// export default App

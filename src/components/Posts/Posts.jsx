import React from 'react'
import Post from '../post/Post'
import './post.css'


  
 
 const Posts = ({posts}) => {
   return (
     <div className='posts'>
      {posts.map((post)=>{
        return <Post post={post}></Post>

      })}
      
       


     </div>
   )
 }
 
 export default Posts
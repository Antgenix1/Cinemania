import React, { useEffect, useState } from 'react'
import { createReview, createUser, updateReview } from '../lib/api';


function PostReview({ id, postToEdit }) {
    const defaultReviewModel = {
        movieId: id,
        user: "",
        review: ""
    }

    const defaultUserModel = {
      user: ""
    }

    useEffect(() => {
      if (postToEdit) {
        setPost(postToEdit)
      }
    }, [postToEdit])

    const [post, setPost] = useState(defaultReviewModel);
    const [user, setUser] = useState(defaultUserModel)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prevPost) => ({ ...prevPost, [name]: value }));
        setUser((prevPost) => ({...prevPost, [name]: value}));
      };
      

    const handleSubmit = async (e) => {
        e.preventDefault()


        if (post._id) {
          updateReview(post)
        } else {
          createReview(post)
          createUser(user)
        }

    }

  return (
    <div className='review-container'>
        <form onSubmit={handleSubmit}>
            <fieldset>
              <label>Username:</label>
              <input type='text' name='user' value={post.user} onChange={handleChange}/>
            </fieldset>
            <fieldset>
                <label>Review:</label>
                <textarea type='text' name='review' value={post.review} onChange={handleChange}/>
            </fieldset>
            <button type='submit' className='submit-button'>Submit</button>
        </form>
    </div>
  )
}

export default PostReview
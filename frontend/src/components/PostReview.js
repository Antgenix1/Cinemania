import React, { useEffect, useState } from 'react'
import { createReview } from '../lib/api';


function PostReview({ id }) {
    const defaultModel = {
        movieId: id,
        user: "Max",
        review: ""
    }


    const [isLoading, setIsLoading] = useState(false)
    const [post, setPost] = useState(defaultModel);

    const handleChange = (e) => {
        const newPost = structuredClone(post)
        newPost[e.target.name] = e.target.value
        setPost(newPost)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        createReview(post)

    }

  return (
    <div className='review-container'>
        <form onSubmit={handleSubmit}>
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
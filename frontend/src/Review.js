import React, { useEffect, useState } from 'react'
import PostReview from './components/PostReview'
import { getReviewById } from './lib/api'

function Review(id) {
    const [post, setPost] = useState([])

    useEffect(() => {
        try {
            getReviewById(id).then((p) => setPost(p))
        } catch (e) {
            console.log(e)
        }
    }, [id])

  return (
    <div>
        <PostReview postToEdit={{...post, id: parseInt(id)}}/>
    </div>
  )
}

export default Review
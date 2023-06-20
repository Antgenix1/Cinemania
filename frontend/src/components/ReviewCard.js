import React, { useEffect, useState } from 'react'
import { deleteReview, getReviews } from '../lib/api';
import '../styles/reviewcard.css'

function ReviewCard({id}) {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        try{
            getReviews(id).then((r) => setReviews(r))
        } catch(e) {
            console.log(e)
        }
    }, [id])

    const handleDelete = () => {
        reviews.map((r) => deleteReview(r._id))
    }

  return (
    <div>
        {
            reviews.map((review, index) => {
                console.log(review)
                return(
                    <div key={index} className='review-card'>
                        <div className='user-info'>
                            <div className='user-name'>{review.user}</div>
                        </div>
                        <div className='review-text'>{review.review}</div>
                        <button onClick={handleDelete}>Delete</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ReviewCard
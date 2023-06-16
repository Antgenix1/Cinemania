import React, { useEffect, useState } from 'react'
import { getReviews } from '../lib/api';
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

  return (
    <div>
        {
            reviews.map((review, index) => {
                return(
                    <div key={index} className='review-card'>
                        <div className='user-info'>
                            <div className='user-name'>{review.user}</div>
                        </div>
                        <div className='review-text'>{review.review}</div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default ReviewCard
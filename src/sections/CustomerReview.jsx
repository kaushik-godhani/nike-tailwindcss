import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReview = () => {
  return (
    <section className='max-container'>
      <h3 className='font-palaquin text-center text-4xl font-bold '>
        What our 
        <span className='text-coral-red'> Customers </span>
        say?
      </h3>
      <p className='info-text m-auto mt-4 max-w-lg text-center'>hear from our Customers</p>

      <div className='mt-24 flex flex-1 justify-evenly items-center gap-14 max-lg:flex-col'>
        { reviews.map( (review)=>(
          <ReviewCard key={review.customerName} imgUrl={review.imgURL} customerName={review.customerName} rating={review.rating} feedback={review.feedback} />
        ))}
      </div>
    </section>
  )
}

export default CustomerReview
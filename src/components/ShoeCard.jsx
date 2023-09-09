import React from 'react'

const ShoeCard = ({ imageUrl, changeBigImage, bigShoeImg }) => {

    const HandleClick = () => {
        if ( bigShoeImg !== imageUrl.bigShoe ){
            changeBigImage(imageUrl.bigShoe)
        }
    }

  return (
    <div className={`border-2 rounded-xl ${bigShoeImg === imageUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1 `}
        onClick={HandleClick}
    >
        <div className='justify-center items-center bg-card flex bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
            <img src={imageUrl.thumbnail}
                alt='shoe thumbnails'
                width={127}
                height={103}
                className='object-contain'
            />
        </div>
    </div>
  )
}

export default ShoeCard
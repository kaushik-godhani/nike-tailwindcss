import React from 'react'

const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor }) => {
  return (
    <button className={`flex justify-center item-center gap-2 px-7 rounded-full py-4 border font-montserrat text-lg leading-none
              ${backgroundColor ? `${backgroundColor} ${borderColor} ${textColor}` : 
              'bg-coral-red  text-white border-coral-red'}`}>
        {label}
        {iconUrl && <img src={iconUrl} 
            alt="arrow right icon"
            className='ml-2 rounded-full w-5 h-5 '
        />}
    </button>
  )
}

export default Button
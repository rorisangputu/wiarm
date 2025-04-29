import React from 'react'

const Button = ({text, styles}) => {
  return (
    <button className={`flex items-center shadow gap-2 bg-green-800 rounded-xl py-3 px-4 text-white ${styles}`}>
      {text}
    </button>
  )
}

export default Button

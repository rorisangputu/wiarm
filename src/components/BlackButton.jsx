import React from 'react'

const BlackButton = ({text}) => {
  return (
    <button className="flex capitalize font-light text-md items-center gap-2 bg-[#232d25] rounded-lg py-3 px-4 text-white">
        {text}
    </button>
  )
}

export default BlackButton

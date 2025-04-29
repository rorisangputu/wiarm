import React from 'react'
import BlackButton from './BlackButton'

const CampaignTemp = ({title, location, date, description, picture}) => {
  return (
    <div className='py-7 flex flex-col gap-7'>
        <img src={picture} alt="" className='w-full h-84 rounded-3xl object-cover' />
        <div className='flex flex-col gap-2'>
            <h3 className='text-3xl capitalize font-normal'>
                {title}
            </h3>
            <ul className='list-disc marker:text-2xl list-outside flex ml-5 gap-7 text-lg font-light'>
                <li>{location}</li>
                <li>{date}</li>
            </ul>
            <p className='line-clamp-2 font-light text-lg'>
                {description}
            </p>
        </div>
        <div className="flex justify-start">
            <BlackButton text={"View More"}/>
        </div>
    </div>
  )
}

export default CampaignTemp

import React from 'react'
import { GiInjustice } from "react-icons/gi";
import { PiFarmDuotone } from "react-icons/pi";
import { FaHandFist } from "react-icons/fa6"; //Power
import { GrGroup } from "react-icons/gr"; //Power Collective
import { IoSchoolOutline } from "react-icons/io5"; //school
import { GiHealing } from "react-icons/gi"; //Healing
import { MdGroups2 } from 'react-icons/md';


const MissionValuesAbout = () => {
  return (
    <div className='w-full bg-[#dad7cd]'>
        <div className='py-10'>
            <div className='w-[90%] mx-auto'>
                <div className='flex flex-col gap-5'>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-xl tracking-wider text-green-900'>Mission</h1>
                        <p>
                            To restore land access, achieve 
                            food sovereignty, and cultivate 
                            leadership among Black rural women 
                            through farming, education, and advocacy.
                        </p>
                    </div>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-xl tracking-wider text-green-900'>Our Core Values</h1>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                            {core_values.map((value, index) => (
                            <div key={index} className='flex flex-col items-center gap-3 text-center bg-white p-4 rounded-lg shadow-md'>
                                <value.icons className='w-10 h-10 text-green-800' />
                                <h2 className='font-semibold text-lg'>{value.title}</h2>
                                <p className='text-sm text-gray-700'>{value.text}</p>
                            </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MissionValuesAbout


const core_values = [
    {
        icons: GiInjustice,
        title: "Land Justice",
        text: "We believe land belongs in the hands of the people who work it, not systems that exploit it. We fight for equitable land access and ownership for Black women."
    },
    
    {
        icons: PiFarmDuotone,
        title: "Food Sovereignty",
        text: "Our communities should feed themselves with dignity. We grow, distribute, and reclaim food systems that center local control and sustainability."   
    },
    {
        icons: FaHandFist,
        title: "Collective Power",
        text: "We organize not just for survival but for transformation. Through sisterhood and solidarity, we create movements that last."
    },
    {
        icons: IoSchoolOutline,
        title: "Education & Liberation",
        text: "Knowledge is power. We train, teach, and advocate to break cycles of oppression and plant seeds of freedom."
    },
    {
        icons: GiHealing,
        title: "Intergenerational Healing",
        text: "Our work honors our ancestors and protects future generations. We plant with intention and resist with love."
    },
    {
        icons: MdGroups2,
        title: "Community Rootedness",
        text: "We are grounded in the needs and wisdom of our communities. Every seed we plant, policy we challenge, and voice we uplift is guided by collective care and deep connection to the land and people around us."
    }
    

]
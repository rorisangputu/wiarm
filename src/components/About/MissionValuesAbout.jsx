import React from 'react'
import { GiInjustice } from "react-icons/gi";
import { PiFarmDuotone } from "react-icons/pi";
import { FaHandFist } from "react-icons/fa6"; //Power
import { GrGroup } from "react-icons/gr"; //Power Collective
import { IoSchoolOutline } from "react-icons/io5"; //school
import { GiHealing } from "react-icons/gi"; //Healing


const MissionValuesAbout = () => {
  return (
    <div className='w-full bg-[#dad7cd]'>
        <div className='py-10'>
            <div className='w-[90%] mx-auto'>
                <div>
                    <div>
                        <h1 className='text-xl tracking-wider text-green-900'>Mission</h1>
                        <p>
                            To restore land access, achieve 
                            food sovereignty, and cultivate 
                            leadership among Black rural women 
                            through farming, education, and advocacy.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-xl tracking-wider text-green-900'>Our Core Values</h1>
                        <div>
                            <div className='flex flex-col items-center'>
                                <GiInjustice/>
                                <h2>Land Justice</h2>
                                <p className='text-center'>
                                    We believe land belongs in the hands 
                                    of the people who work it, not systems 
                                    that exploit it. We fight for equitable 
                                    land access and ownership for Black women.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MissionValuesAbout

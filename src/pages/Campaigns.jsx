import React from 'react'
import Hero from '../components/Campaigns/Hero'
import CampaignsList from '../components/Campaigns/CampaignsList'
import Involved from '../components/Campaigns/Involved'
const Campaigns = () => {
  return (
    <div>
        <Hero/>
        <CampaignsList/>
        <Involved/>
    </div>
  )
}

export default Campaigns

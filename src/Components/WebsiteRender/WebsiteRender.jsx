import React from 'react'
import './WebsiteRender.css'
const WebsiteRender = ({websiteLink}) => {
  return (
    <iframe className='websiteShow' src={websiteLink} title="description"></iframe>

  )
}

export default WebsiteRender
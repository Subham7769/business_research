import React from 'react'
import './TilesWithLinksRender.css'

const TilesWithLinksRender = ({data}) => {
  return (
    <div className='TileContainer'>
      {data.map(item => {
        return (
          <div>
            <a href={item.siteLink}>
              <img src={item.imgLink} alt="Tile" />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default TilesWithLinksRender
import React from 'react'
import './BankingSetup.css'
const data = [
  {
    imgLink: "https://example.com/images/image1.jpg",
    siteLink: "https://example.com/page1"
  },
  {
    imgLink: "https://example.com/images/image2.jpg",
    siteLink: "https://example.com/page2"
  },
  {
    imgLink: "https://example.com/images/image3.jpg",
    siteLink: "https://example.com/page3"
  },
  {
    imgLink: "https://example.com/images/image4.jpg",
    siteLink: "https://example.com/page4"
  },
  {
    imgLink: "https://example.com/images/image5.jpg",
    siteLink: "https://example.com/page5"
  },
  {
    imgLink: "https://example.com/images/image6.jpg",
    siteLink: "https://example.com/page6"
  },
  {
    imgLink: "https://example.com/images/image7.jpg",
    siteLink: "https://example.com/page7"
  },
  {
    imgLink: "https://example.com/images/image8.jpg",
    siteLink: "https://example.com/page8"
  },
  {
    imgLink: "https://example.com/images/image9.jpg",
    siteLink: "https://example.com/page9"
  },
  {
    imgLink: "https://example.com/images/image10.jpg",
    siteLink: "https://example.com/page10"
  }
];

const BankingSetup = () => {
  return (
    <div className='BankContainer'>
      {data.map(bank => {
        return (
          <div>
            <a href={bank.siteLink}>
              <img src={bank.imgLink} alt="" />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default BankingSetup
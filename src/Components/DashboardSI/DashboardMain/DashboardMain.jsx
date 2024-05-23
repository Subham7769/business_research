import { Route, Routes } from 'react-router-dom';
import './DashboardMain.css';
import WebsiteRender from '../../WebsiteRender/WebsiteRender';
import TilesWithLinksRender from '../../TilesWithLinksRender/TilesWithLinksRender';

const bankData = [
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
const EPCData = [
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

const DashboardMain = () => {

  return (
    <div className="DashboardMain">
      <Routes>
        <Route path="/" element={<WebsiteRender websiteLink="https://www.startupwala.com/startup-registration.html?utm_campaign=Company%20Registration%20-%20Exact&utm_source=google&utm_medium=cpc&utm_content=company%20registration&utm_term=company%20registration&utm_campaign=11696952418&utm_source=g_c&utm_medium=cpc&utm_content=630034401993&utm_term=e_company%20registration&adgroupid=122151199668&gad_source=1&gclid=CjwKCAjwr7ayBhAPEiwA6EIGxLWeGeBNBETVSDn7I7-oBQQsZhr3MgcfE21H_jSwEPY1WArZgdQt7RoC4xEQAvD_BwE" />} />
        <Route path="BankingSetup" element={<TilesWithLinksRender data={bankData}/>} />
        <Route path="EPCSetup" element={<TilesWithLinksRender data={EPCData}/>} />
        <Route path="PackingSetup" element={<WebsiteRender websiteLink="https://swisspack.co.in/" />} />
        <Route path="DigitalContentSetup" element={<WebsiteRender websiteLink="https://brands.live/"  />} />
        <Route path="DigitalWebsiteSetup" element={<WebsiteRender websiteLink="https://www.kamakhyainfocomllp.com/public/web-design"  />} />
      </Routes>
    </div>
  );
};

export default DashboardMain;

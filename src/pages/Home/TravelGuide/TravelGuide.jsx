import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

import mission from '../../../assets/images/overview1.jpg'
import story from '../../../assets/images/overview2.jpg'
import community from '../../../assets/images/overview4.jpg'
import explore from '../../../assets/images/overview5.jpg'
import local from '../../../assets/images/local.jpg'
import tailored from '../../../assets/images/tailored.jpg'
import sustain from '../../../assets/images/sustain.jpg'
import OurPackages from "../OurPackages/OurPackages";
import Overview from "../Overview/Overview";
import MeetOurGuides from "../MeetOurGuides/MeetOurGuides";

const TravelGuide = () => {
  return (
    <div className="my-12  ">

      <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">Tourism and Travel Guide</h2>
      <Tabs>
        <TabList className="bg-gray-300 font-bold">
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        <TabPanel>
          <Overview></Overview>
        </TabPanel>
        <TabPanel>
          
          <OurPackages></OurPackages>
        </TabPanel>
        <TabPanel>
          <MeetOurGuides></MeetOurGuides>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TravelGuide;

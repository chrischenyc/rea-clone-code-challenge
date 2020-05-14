import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Search from './Search';
import Favourites from './Favourites';

function Home() {
  return (
    <Tabs>
      <TabList>
        <Tab>Search</Tab>
        <Tab>Favourites</Tab>
      </TabList>

      <TabPanel>
        <Search />
      </TabPanel>
      <TabPanel>
        <Favourites />
      </TabPanel>
    </Tabs>
  );
}

export default Home;

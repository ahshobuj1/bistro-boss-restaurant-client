import {useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useLoadData from '../../../hooks/useLoadData/useLoadData';
import TabPanelItems from './TabPanelItems/TabPanelItems';

const ShopTab = () => {
    const menuItems = useLoadData();

    const dessert = menuItems.filter((item) => item.category === 'dessert');
    const pizza = menuItems.filter((item) => item.category === 'pizza');
    const salad = menuItems.filter((item) => item.category === 'salad');
    const soup = menuItems.filter((item) => item.category === 'soup');
    const drinks = menuItems.filter((item) => item.category === 'drinks');

    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <div className="text-center mb-4 md:mb-12">
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </div>
            </TabList>
            <TabPanel>
                <TabPanelItems items={salad} />
            </TabPanel>
            <TabPanel>
                <TabPanelItems items={pizza} />
            </TabPanel>
            <TabPanel>
                <TabPanelItems items={soup} />
            </TabPanel>
            <TabPanel>
                <TabPanelItems items={dessert} />
            </TabPanel>
            <TabPanel>
                <TabPanelItems items={drinks} />
            </TabPanel>
        </Tabs>
    );
};

export default ShopTab;

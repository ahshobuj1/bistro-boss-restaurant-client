import {useState} from 'react';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useLoadData from '../../../hooks/useLoadData/useLoadData';
import TabPanelItems from './TabPanelItems/TabPanelItems';
import {useParams} from 'react-router-dom';

const ShopTab = () => {
    const menuItems = useLoadData();
    const {category} = useParams();
    const categories = ['salads', 'pizza', 'soups', 'dessert', 'drinks'];
    const initialIndex = categories.indexOf(category);

    console.log(initialIndex);
    console.log(category);

    const dessert = menuItems.filter((item) => item.category === 'dessert');
    const pizza = menuItems.filter((item) => item.category === 'pizza');
    const salad = menuItems.filter((item) => item.category === 'salad');
    const soup = menuItems.filter((item) => item.category === 'soup');
    const drinks = menuItems.filter((item) => item.category === 'drinks');

    const [tabIndex, setTabIndex] = useState(initialIndex);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <div className="text-center ">
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

import React from 'react';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';

import TabNavigator from '../tabNavigator/tabNavigator';

function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Close drawer"
          //onPress={() => props.navigation.closeDrawer()}
        />
        <DrawerItem
          label="Toggle drawer"
          //onPress={() => props.navigation.toggleDrawer()}
        />
      </DrawerContentScrollView>
    );
  }

  const Drawer = createDrawerNavigator();

export default function MyDrawer(props) {

  return (
    <Drawer.Navigator 
      drawerStyle={{
        backgroundColor: '#030001',
        width: 240,
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="TabNavigator" component={TabNavigator} />
    </Drawer.Navigator>
  );
}
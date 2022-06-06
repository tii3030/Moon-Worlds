import React, { useEffect, useState } from 'react';
import { View, TouchableNativeFeedback, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../screens/home/home';
import Perfil from '../screens/perfil/perfil';
import News from '../screens/news/news';

function CustomTabBar(props) {

    const[direction, setDirection] = useState(0);

    useEffect(() => {
        //console.log(direction)
    });

    const navigateToFirstScreen=()=>{
        props.navigation.navigate('Perfil') ;
    }

    const navigateToSecondScreen=()=>{
        props.navigation.navigate('Home') ;
    }

    const navigateToThirdScreen=()=>{
        props.navigation.navigate('News') ;
    }

  return (
    
    <View style={{shadowColor: "black", shadowOpacity: 0.26, shadowOffset: { width: 3, height: 3}, shadowRadius: 10, elevation: 5 , position: 'absolute', bottom: 10 , width: screenWidth - 10, height: 65, backgroundColor: '#BF0B3B', alignSelf: 'center', borderRadius: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000', true)} onPress={() => { navigateToFirstScreen(), setDirection(1)}}>
            <View style={{ width: screenWidth / 3 - 10, height: 65, alignItems: 'center', justifyContent: 'center'}}>
                <MaterialIcons name="person" color={'#FFF'} size={28} />
            </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000', true)} onPress={() => {navigateToSecondScreen(), setDirection(2)}}>
            <View style={{ width: screenWidth / 3 - 10, height: 65, alignItems: 'center', justifyContent: 'center'}}>
                <View style={{ height: 50, width: 50 , shadowColor: "black", shadowOpacity: 0.26, shadowOffset: { width: 3, height: 3}, shadowRadius: 10, elevation: 5, backgroundColor: '#FFF', height: 50, width: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }} ><MaterialCommunityIcons name="home" color={'#BF0B3B'} size={33} /></View>
            </View>
        </TouchableNativeFeedback>

        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#000', true)} onPress={() => {navigateToThirdScreen(), setDirection(3)}}>
            <View style={{ width: screenWidth / 3 - 10, height: 65, alignItems: 'center', justifyContent: 'center'}}>
                <MaterialIcons name="favorite" color={'#FFF'} size={28} />
            </View>
        </TouchableNativeFeedback>
    </View>

  );
}

const Tab = createBottomTabNavigator();

const screenWidth = Dimensions.get("window").width;

export default function AllTabs() {
  return (
    <Tab.Navigator tabBar={(props) => <CustomTabBar {...props} />}>

      <Tab.Screen 
        name="Home" 
        component={Home} />

      <Tab.Screen 
        name="Perfil" 
        component={Perfil} />

      <Tab.Screen 
        name="News" 
        component={News} />

    </Tab.Navigator>
  );
}
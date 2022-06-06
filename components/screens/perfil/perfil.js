import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { DrawerActions } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function news({ navigation }) {
    return (
      <View>
        <View style={{ width: '100%', height: 60, backgroundColor: '#BF0B3B', marginBottom: 20, justifyContent: 'center'}}>
            <TouchableOpacity style={{ width: 50, height: 36 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}><MaterialCommunityIcons style={{ marginLeft: 10 }} name="menu" color={'#FFF'} size={36} /></TouchableOpacity>
        </View>
  
        <Text> This is Screen perfil ! </Text>
  
      </View>
    );
  }
import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

import Drawer from './components/drawer/drawer';

export default function App() {

  return (
    <PaperProvider>
        <NavigationContainer>
            <Drawer />
        </NavigationContainer>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
    
 
});


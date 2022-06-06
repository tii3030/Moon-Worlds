import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Carousel , { getInputRangeFromIndexes } from 'react-native-snap-carousel';
import { DrawerActions } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import VideoPlayer from 'react-native-video-controls';


export default function home({ navigation }) {

    const carouselItems = [
        {
            title:"Item 1",
            text: "Text 1",
        },
        {
            title:"Item 2",
            text: "Text 2",
        },
        {
            title:"Item 3",
            text: "Text 3",
        },
        {
            title:"Item 4",
            text: "Text 4",
        },
        {
            title:"Item 5",
            text: "Text 5",
        },
    ]

    const [active, setActive] = React.useState('');
    
    const DATA = [];

    for (let i = 0; i < 10; i++) {
        DATA.push(i)
    }

    const [activeIndex, setActiveIndex] = useState(0);
    const screenWidth = Dimensions.get("window").width;

    _renderItem = ({item, index}) => {
        return ( 
            <TouchableOpacity>
                <View style={{width: '90%', height: 200, alignSelf: 'center', backgroundColor: '#FFF', borderRadius: 10, marginBottom: 20}}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/home/teen_titans_go_1.png')}
                    />
                    <Text>{item.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }

  return (

    <View animation={'bounceInRight'} style={styles.container}>

        <View style={{ width: '100%', height: 60, backgroundColor: '#BF0B3B', marginBottom: 20, justifyContent: 'center'}}>
            <TouchableOpacity style={{ width: 50, height: 36 }} onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}><MaterialCommunityIcons style={{ marginLeft: 10 }} name="menu" color={'#FFF'} size={36} /></TouchableOpacity>
        </View>

        <ScrollView >

            <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                <Carousel
                    layout={"default"}
                    //data={DATA}
                    data={carouselItems}
                    sliderWidth={screenWidth}
                    itemWidth={260}
                    itemHeight={200}
                    renderItem={_renderItem}
                    onSnapToItem = { index => setActiveIndex(index)}
                    autoplay={true}
                    autoplayDelay={5000}
                    autoplayInterval={3000}
                    inactiveSlideOpacity={0.7}
                    inactiveSlideScale={0.9}

                />
            </View>
        </ScrollView>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container : {
        height: '100%',
        width: '100%',
        backgroundColor: '#000'
    },

    tinyLogo: {
        alignSelf: 'center',
        flex: 1,
        resizeMode: "contain",
        height: 200,
        width: '90%'
    }
});





import React from 'react';
import { Text, View } from 'react-native';
import VideoPlayer from 'react-native-video-controls';

export default function App() {

  return (

    <View style={{padding: 10}}>

      <View style={{ width: '100%', height: 300}}>

        <VideoPlayer
          source={{uri: 'https://www.youtube.com/embed/9YffrCViTVk'}}
          //doubleTapTime={130}
          controlTimeout={5000}
          tapAnywhereToPause={true}
          seekColor={'#FFF'}
          style={{borderRadius: 10}}
          disableBack
          videoStyle={{width: '100%'}}

        />

        <Text>teste</Text>

      </View>

    </View>
  );


}




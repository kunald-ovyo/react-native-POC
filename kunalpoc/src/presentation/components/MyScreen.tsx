import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function MyScreen() {
  const [state, setState] = useState('Checking');
  useEffect(() => {
    setTimeout(() => {
      console.log('Kunal checking logs ');
    }, 1000);
  }, []);

  return (
    <View>
      <Text testID="myText">{state}</Text>
      <Button
        testID="myButton"
        onPress={() => {
          console.log('Working the logs ');
          setState('changed');
        }}
        title={'Press me'}
      />
    </View>
  );
}

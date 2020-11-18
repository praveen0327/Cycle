import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Nav() {

    return(
        <View style={styles.container}>
<View >
         <Text>Cycle</Text>
          <Text>Cycle</Text>
          <Text>Cycle</Text>
          <Text>Cycle</Text>
</View>
       
      </View>
    );

}


const styles = StyleSheet.create({
    container: {
    
     
     
      alignItems: 'flex-start',
      justifyContent: 'center',
   
      height: 70,
  width: 200,
  paddingTop:20,
  marginHorizontal:'row'
     
    },
  });


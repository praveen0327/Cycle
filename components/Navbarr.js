import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Navbarr() {

    return(
        <View style={styles.container}>
          <Text>Cycle</Text>
          
      </View>
    );

}
  /*    options={{
          title: 'TRENDINGCYCLES',
          headerStyle: {
              //backgroundColor: '#503E9D',
          },   headerTintColor: COLORS.lightGray,
          headerTitleStyle: {
              ...FONTS.navTitle
          },
          headerLeft: ({ onPress }) => (
            <TouchableOpacity
                style={{ marginLeft: SIZES.padding }}
                onPress={() => alert('This is a button!')}
            >
                <Image
                    source={icons.menu}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                    }}
                />
            </TouchableOpacity>
        ),
        headerRight:  ({ onPress }) => (
          <TouchableOpacity
          style={{paddingHorizontal: 10, marginTop: 5}}
          onPress={() => {
           navigation.navigate('Home');
          }}>
                <Image
                    source={icons.search}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                    }}
                  
                   
                />
            </TouchableOpacity>
        ),
    }} */

const styles = StyleSheet.create({
    container: {
      flex: 1,
      width:100,
      height:70,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
import React, {useState, useEffect} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Modal,Button,Alert
} from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { render } from 'react-dom';
import AsyncStorage from '@react-native-community/async-storage';


const Cart = ({ navigation }) => {
 
      const [name,setName] = useState({})
      
  
      useEffect( () => {
         
       AsyncStorage.getItem('recent').then((res)=>{

      
        setName(JSON.parse(res))
        
      
       }).catch((err)=>{
        console.log(err)
       })
  
      
      },[]);


      const cartAlert = () =>{
        console.log("name")
        Alert.alert("Your Order Placed Successfully...")
  }
      

      console.log(name)
       const p = "50"

  const pri = name.price-p
  let pp = pri
 
   
    return (

        <View style={styles.container}>

            <TouchableOpacity style={{justifyContent:"flex-start",marginTop:50,flexDirection:"row"}}
              onPress={() =>
                navigation.navigate('Home')
              }
            >
            <Image
                    source={icons.arrow}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        paddingRight:50,
                       
                    }} 
                  
                    />
                    <Text style={{...FONTS.largeTitleBold}}>SHOPPING BAG</Text>
               
            </TouchableOpacity>
     <View style={[{ marginTop:60, flexDirection: 'row'},styles.recentContainerShadow]} >

                <View style={{ flex: 1, alignItems: "center", justifyContent: "center",paddingStart:10 }}>
                    <Image
                        source={name.img}
                        resizeMode="contain"
                        style={{
                            width: 130,
                            height: 130,
                        }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: "center",paddingStart:20 }}>
                    <Text style={{ ...FONTS.largeTitleBold,marginBottom:10 }}>{name.name}</Text>
                    <Text style={{ ...FONTS.h3 }}>{name.price}AED</Text>
                    
                </View>
                <View style={{  marginLeft: SIZES.radius, justifyContent: "center",paddingEnd:30 }}>
                <Image
                    source={icons.deletee}
                    resizeMode="contain"
                    style={{
                        width: 25,
                        height: 25,
                        paddingRight:100,
                       
                    }} 
                    onPress={() =>
                        navigation.navigate('Home')
                      }
                    />
                </View>
            </View>

            <View style={{  flexDirection: 'row',marginTop:20}} >
            <Text style={{ ...FONTS.h3 ,marginLeft:30, borderBottomWidth: 1,borderBottomColor: "#47315a"}}>PRICE DETAILS</Text>
           </View>

            <View style={{ flexDirection: 'row',justifyContent:'space-between',marginTop:20}} >
            <Text style={{ ...FONTS.h3 ,marginLeft:30}}>Total AED</Text>
            <Text style={{  ...FONTS.h3 , marginRight:30}}>{name.price}AED</Text>
            </View>
            
            
            <View style={{  flexDirection: 'row',justifyContent:"space-between",marginTop:20}} >
            <Text style={{  ...FONTS.h3 ,marginLeft:30}}>Discount on AED</Text>
            <Text style={{  ...FONTS.h3 , marginRight:30}}>-50AED</Text>
            </View>
            
          
            <View style={{  flexDirection: 'row',justifyContent:"space-between",marginTop:20,marginBottom:30}} >
            <Text style={{  ...FONTS.h3 ,marginLeft:30}}>Platform Handling Fee</Text>
            <Text style={{  ...FONTS.h3 , marginRight:30,color:COLORS.lightGray}}>FREE</Text>
            </View>
          <View style={{ borderBottomWidth: 1,borderBottomColor: "#414045"}}/>
          
            <View style={{ flexDirection: 'row',justifyContent:"space-between",marginTop:20}} >
            <Text style={{  ...FONTS.h3 ,marginLeft:30}}>Total Amount</Text>
                    <Text style={{  ...FONTS.h3, marginRight:30}}>{pp}AED</Text>
            </View>

            <View style={{  flexDirection: 'row',justifyContent:"space-around",marginTop:60}} >
            <TouchableOpacity 
              onPress={() =>
                navigation.navigate('Home')
              }
            >
            <Text  style={{ ...FONTS.largeTitleBold ,marginLeft:30,color:COLORS.lightGray}}>
           {/*  <Image
                    source={icons.arrow}
                    resizeMode="contain"
                    style={{
                        width: 20,
                        height: 20,
                        paddingRight:1,
                       
                    }} 
                    onPress={() =>
                        navigation.navigate('Home')
                      }
                    /> */}
                 Add More</Text>
                 </TouchableOpacity>

                 <TouchableOpacity 
          
            >
                <Button title="PLACE ORDER" color="#BF012C" style={{height:5,color:COLORS.white}} 
                 onPress={cartAlert}
                />
                </TouchableOpacity>
          {/*   <Text style={{ ...FONTS.largeTitleBold ,marginLeft:30}}>Total Amount</Text>
                    <Text style={{ ...FONTS.largeTitleBold , marginRight:30}}>{pp}AED</Text> */}
            </View>
     </View>
    )
}

const styles= StyleSheet.create({
    container: {
     
        flex: 1,
        backgroundColor: COLORS.white,
        paddingStart:0,
     
        borderTopLeftRadius:20,
      borderTopRightRadius:20
        
    },
    recentContainerShadow: {
      shadowColor: "#47315a",
      shadowOffset: {
          width: 3,
          height: 3,
          borderTopLeftRadius:7,
          borderTopRightRadius:7
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,

      elevation: 15,
  }
})

export default Cart;

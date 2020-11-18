import React, {useState} from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TouchableOpacity,
    FlatList,
    Modal
} from 'react-native';
import { images, icons, COLORS, FONTS, SIZES } from '../constants';
import {BlurView} from 'expo-blur';
import AsyncStorage from '@react-native-community/async-storage';
import Cart from './Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Home = ({ navigation}) => {


    const [showAddToBagModal, setShowAddToBagModal] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)
    const [selectedSize, setSelectedSize] = useState("")


    const [trending, setTrending] = useState([
        {
            id: 0,
            name: "HERO BLAST 20T",
            img: images.tr1,
            bgColor: "#BF012C",
            type: "Mountain Riding",
            price: "186AED",
           
        },
        {
            id: 1,
            name: "GEEKAY HASHTAG",
            img: images.tr2,
            bgColor: "#D39C67",
            type: "Long Cycling",
            price: "135AED",
          
        },
        {
            id: 2,
            name: "FIREFOX CYCLONE 24T",
            img: images.tr1,
            bgColor: "#7052A0",
            type: "Highway Cycling",
            price: "199AED",
          
        },
    ]);

    const [recentlyViewed, setRecentlyViewed] = useState([
        {
            id: 0,
            name: "Lista Beast",
            img: images.tr4,
            bgColor: "#414045",
            type: "Cycling",
            price: "119",
           
        },
        {
            id: 1,
            name: "NIGHTRIDE",
            img: images.tr5,
            bgColor: "#4EABA6",
            type: "Cycling",
            price: "135",
         
        },
        {
            id: 2,
            name: "HERO 30T",
            img: images.tr6,
            bgColor: "#2B4660",
            type: "Cycling",
            price: "124",
            
        },
        {
            id: 3,
            name: "Metcon 3R",
            img: images.tr7,
            bgColor: "#A69285",
            type: "Cycling",
            price: "199",
           
        },
        {
            id: 4,
            name: "AIRO 70U",
            img: images.tr8,
            bgColor: "#A02E41",
            type: "Cycling",
            price: "108",
          
        },
        {
            id: 5,
            name: "AIRO 90A",
            img: images.tr9,
            bgColor: "#4EABA6",
            type: "Cycling",
            price: "108",
          
        },
    ]);


    //redering


     function renderHighsales(item,index){


         var highSale = {};

         
       
       
         if (index == 0) {
            highSale = { marginLeft: SIZES.padding, }
        } else {
            highSale = {}
        }

        return(
            <TouchableOpacity style={{height:240, width:180, marginHorizontal:SIZES.base,justifyContent:"center",...highSale}}
            >
                  
                 <View style={[{
                    flex: 1,
                    justifyContent: 'flex-end',
                    marginTop: SIZES.base,
                    borderTopLeftRadius: 30,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    marginRight: SIZES.padding,
                    paddingLeft: SIZES.radius,
                    paddingRight: SIZES.padding,
                    paddingBottom: SIZES.radius,
                    backgroundColor: item.bgColor
                }, styles.trendingShadow]}>
                    <View style={{ height: '25%', justifyContent: 'space-between' }}>
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{item.price}</Text>
                    </View>
                </View>
                <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                        position: 'absolute',
                        top: 5,
                        right: 0,
                        width: "98%",
                        height: 160,
                        transform: [
                            { rotate: '-15deg' }
                        ]
                    }}
                />

            </TouchableOpacity>
        )


     }

   
        const storeData = async (selectedItem) => {
            try {
                console.log(selectedItem)
                const jsonValue = JSON.stringify(selectedItem)
                console.log(jsonValue)
              await AsyncStorage.setItem('recent', jsonValue)
        
     
       getData();
             
            } catch (e) {
              // saving error
            }
          }
        /*   console.log(storeData) */

        

        const getData = async () => {
            try {
                console.log('jsonValue')
              const jsonValue = await AsyncStorage.getItem('recent')
              console.log(jsonValue)
              return jsonValue != null ? JSON.parse(jsonValue) : null;
              console.log(jsonValue)
            /*   console.log(jsonValue) */
            } catch(e) {
              // error reading value
            }
          }


        function renderRecentlyViewed(item, index) {

           
        return (
            <TouchableOpacity
                style={{ flex: 1, flexDirection: 'row',backgroundColor:item.bgColor,
                borderTopLeftRadius: 30,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
                borderTopRightRadius:0,
                marginBottom:5,
                padding:1,
                marginLeft:5,
                marginRight:5
            }}
                onPress={() => {
                   
                    setSelectedItem(item)
                    setShowAddToBagModal(true)
                   
                }}
            >



                
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center",paddingStart:20 }}>
                    <Image
                        source={item.img}
                        resizeMode="contain"
                        style={{
                            width: 130,
                            height: 130,
                        }}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: SIZES.radius, justifyContent: "center",paddingStart:20 }}>
                    <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.name}</Text>
                    <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>{item.type}</Text>
                    
                </View>
                <View style={{  marginLeft: SIZES.radius, justifyContent: "center",paddingEnd:30 }}>
                <Text style={{ ...FONTS.h3,color: COLORS.gray, }}>{item.price}AED</Text>
                </View>
            </TouchableOpacity>
        )
    }

    
   



       //VOID


    return(
        <View style={styles.container}>
        {/*  <Text style={{marginTop: SIZES.radius,textAlign:'center',marginHorizontal: SIZES.padding,...FONTS.largeTitleBold}}>HIGH SALES BICYCLES</Text> */}
         
           <View style={{  justifyContent: 'space-between',flexDirection: 'row',marginTop:50,marginBottom:20 }}>




           <Image
                    source={icons.menu}
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

                        <Text style={{  ...FONTS.largeTitleBold }}>HOME</Text>

                        <TouchableOpacity
                          onPress={() =>
                            navigation.navigate('Cart')
                          }
                        >
                        <Image
                    source={icons.cart}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        paddingRight:100,
                       
                    }} 
                  
                    />
                        </TouchableOpacity>
                      
                    </View>
        

         <View style={{height:260,marginTop:SIZES.radius}}>
         <FlatList 
         horizontal
         showsHorizontalScrollIndicator={false}
         data={trending}
         keyExtractor={item=>item.id.toString()}
         renderItem={({item,index}) => renderHighsales(item,index)}
      
         />
         </View>
         <Text style={{marginTop: SIZES.radius,textAlign:'center',marginHorizontal: SIZES.padding,...FONTS.largeTitleBold}}>TRENDING CYCLE COLLECTION</Text>
         <View
                style={[{
                    flex: 1,
                    flexDirection: 'row',
                    marginTop: SIZES.padding,
                    borderTopLeftRadius: 30,
                    borderTopRightRadius: 30,
                    
                    backgroundColor: COLORS.white
                }, styles.recentContainerShadow]}
            >
               {/*  <View style={{ width: 70, marginLeft: SIZES.base }}>
                    <Image
                        source={images.tt1}
                        resizeMode="contain"
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </View> */}
                <View style={{ flex: 1, paddingBottom: SIZES.padding }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recentlyViewed}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderRecentlyViewed(item, index)}
                    />
                </View>
            </View>

            {selectedItem &&
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showAddToBagModal}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}
                >
                    <BlurView
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                        blurType="light"
                        blurAmount={20}
                        reducedTransparencyFallbackColor="white"
                    >
                        {/* Button to close modal */}
                        <TouchableOpacity
                            style={styles.absolute}
                            onPress={() => {
                                setSelectedItem(null)
                                setSelectedSize("")
                                setShowAddToBagModal(false)
                            }}
                        >
                        </TouchableOpacity>

                        {/* Modal content */}
                        <View style={{ justifyContent: 'center', width: "85%", backgroundColor: selectedItem.bgColor }}>
                            
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: -SIZES.padding * 2 }}>
                                <Image
                                    source={selectedItem.img}
                                    resizeMode="contain"
                                    style={{
                                        width: "90%",
                                        height: 280,
                                        transform: [
                                            { rotate: '-1deg' }
                                        ]
                                    }}
                                />
                            </View>
                            <Text style={{ marginTop: SIZES.padding, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body2 }}>{selectedItem.name}</Text>
                            <Text style={{ marginTop: SIZES.base / 2, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.body3 }}>{selectedItem.type}</Text>
                            <Text style={{ marginTop: SIZES.radius, marginHorizontal: SIZES.padding, color: COLORS.white, ...FONTS.h1 }}>{selectedItem.price}</Text>
                          

                            <TouchableOpacity
                                style={{ width: '100%', height: 70, marginTop: SIZES.base, alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}
                              /*   onPress={() => {
                                  
                                    setSelectedItem(null)
                                    setSelectedSize("")
                                    setShowAddToBagModal(false)
                                }} */
                            >
                                <TouchableOpacity
                                  onPress={() => {
                                  storeData(selectedItem)
                                  setShowAddToBagModal(false)
                                  setSelectedItem(null)
                                  setSelectedSize("")
                                }}
                                >
                                <Text style={{ color: COLORS.white, ...FONTS.largeTitleBold }}>BUY NOW</Text>
                                </TouchableOpacity>
                               
                            </TouchableOpacity>
                        </View>
                    </BlurView>
                </Modal>
            }


          
      </View>
    );

}


const styles = StyleSheet.create({
    container: {
     
        flex: 1,
        backgroundColor: COLORS.white
    },
      trendingShadow: {
          flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
       
    },
    recentContainerShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 7,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 9.51,

        elevation: 15,
    },
    absolute: {
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0
    }
  });
  export default Home;
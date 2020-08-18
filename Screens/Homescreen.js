import React, { Component } from 'react';

import 
 {SafeAreaView,StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    TouchableHighlight,
    Image
} from 'react-native';



export default function Homescreen ({ navigation }){
// _onPressButton1() {
//     this.props.navigation.navigate('Details');
//   }
//   _onPressButton2() {
//     this.props.navigation.navigate('Details');
//   }
   return (
          
          <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#468189" />
          <ScrollView
          style={{ flex: 1 }}>
          <View style={{flex: 1}}>
          <Text></Text>
          <Image style={styles.tinyLogo} source={require('../logo.png')} />
          <Text></Text>
          </View>
          <View style={{borderBottomColor: 'rgb(70,0,70)', borderBottomWidth: 2}}/>
          <View style={{flex: 1, backgroundColor:'rgb(70,0,70)'}}>
          <Text style={{fontSize : 24, alignSelf:"center", color: 'white', fontFamily :'Ariel' }}>Investination</Text>
          </View>
          <View style={{flex: 1}}>
          <View style={styles.multiButtonContainer}>  
                    <Button style = {{width:'30%'}} 
                        onPress={() => navigation.navigate('Details3',{title: 'Investor'})}  
                        title="  Investor  "  
                        color="rgb(255,68,3)"  
                    />  
                    <Button  style = {{width:'30%'}}
                        onPress={() => navigation.navigate('Details2',{title: 'Investee'})}  
                        title="  Investee  "  
                        color="rgb(255,68,3)"  
                    />  
                    <Button  style = {{width:'30%'}}
                        onPress={() => navigation.navigate('Details1',{title: 'Professional'})}  
                        title="Professional"  
                        color="rgb(255,68,3)"  
                    />
                </View>  
          
          </View>
          </ScrollView>
          </SafeAreaView>
        );
    
}

const styles = StyleSheet.create({
    tinyLogo:{
      width: 280,
      height:50,
     },
    
     multiButtonContainer: { 
      marginLeft:5,
      marginRight:5, 
      margin:20,
      width: '70%',
      height: '60%',
      color: 'rgb(255,68,3)',
      flexDirection: 'row',  
      justifyContent: "space-between"
      
    },
    
      white:{
        backgroundColor: 'white',
        color: 'blue',
        borderColor: 'black'
      },
        
        container: {
          flex: 1,
          
        },
        temp:{
          fontSize:40
        }
    });
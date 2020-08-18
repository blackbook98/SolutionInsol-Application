import React, { Component, useState, setState } from 'react';
import 
 {SafeAreaView,
  StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    TouchableHighlight,
    Image
} from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import firebase from 'firebase';
import {db} from '../src/config';

var radio_props2 = [
  {label: 'Industrial', value: 0 },
  {label: 'Plant and Machinery', value: 1 },
  {label: 'Brick and Mortar', value: 2 },
  {label: 'Intellectual', value: 3 },
  {label: 'Brick and Mortar + Intellectual', value: 4 },
  {label: 'Residential', value: 5 },
  {label: 'Commercial', value: 6 },
  {label: 'Combination of Above', value: 7 }
  
];
var radio_props3 = [
  {label: 'Upto 1 Crore', value:'Upto 1 Crore' },
  {label: '1-5 Crores', value: '1-5 Crores' },
  {label: '5-10 Crores', value:'5-10 Crores' },
  {label: '10-15 Crores', value: '10-15 Crores'},
  {label: '15-20 Crores', value: '15-20 Crores' },
  {label: '20-25 Crores', value:'20-25 Crores' },
  {label: '25 Crores and above', value:'25 Crores and above' }
  
];



export default function Det2(){
  const [ name, setName ] = useState('');
  const [ kyc1, setKyc1 ] = useState('');
  const [ kyc2, setKyc2 ] = useState('');
  const [ kyc3, setKyc3 ] = useState('');
  const [ code, setCode ] = useState('');
  const [ number, setNumber ] = useState('');
  const [ std, setStd ] = useState('');
  const [ lnumber, setLnumber] = useState('');
  const [ address1, setAddress1] = useState('');
  const [ address2, setAddress2] = useState('');
  const [ address3, setAddress3] = useState('');
  const [ requirements, setRequirements] = useState('');
  const [ nature, setNature] = useState('');
  const [ limit, setLimit] = useState('');
  
  
  function addDoc() {
    if(name!="" && number!="" && address1!="" && requirements!="" && limit!= "")
    {db.ref('/Investee').push({
    Name: name,
    KYC1: kyc1,
    KYC2: kyc2,
    KYC3: kyc3,
    Contact1: code +" " + number,
    Contact2: std + " " + lnumber,
    Address1: address1,
    Address2: address2,
    Address3: address3,
    Requirements: requirements,
    Limit: limit
    });
    
    setName('');
    setKyc1('');
    setKyc2('');
    setKyc3('');
    setCode('');
    setNumber('');
    setStd('');
    setLnumber('');
    setAddress1('');
    setAddress2('');
    setAddress3('');
    setRequirements('');
  }
  else{
    alert("Name, Mobile Number, Address of Concerned Person1 and Requirements are mandatory fields!");
  }

  }

  return (
        
        
          //INVESTEE
          
          <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#468189" />
          <ScrollView style={{flex:1}}>
          <View style={{flex: 1, backgroundColor:'powderblue'}}>
          {/* <Text style={{fontSize:24, alignSelf : "center"}}>
          {this.props.navigation.getParam('title')}
          </Text> */}
          </View>
          <View style={{flex:2, flexDirection: 'column'}}>
          <Text style={{fontSize:16, margin:5}}>Full Name<Text style={{color: 'red'}}> *</Text></Text>
          <TextInput
           style={styles.inputs}
           placeholder="Type here!"
           value={name}
           onChangeText = {setName}
          />
          </View>
          <View style={{flex:1, flexDirection: 'column'}}>
          <Text style={{fontSize:16, margin:5}}>KYC</Text>
          <TextInput
           style={styles.inputs}
           placeholder="KYC of Concerned Person 1"
           value={kyc1}
           onChangeText = {setKyc1}
          />
          <TextInput
           style={styles.inputs}
           placeholder="KYC of Concerned Person 2"
           value={kyc2}
           onChangeText = {setKyc2}
          />
          <TextInput
           style={styles.inputs}
           placeholder="KYC of Concerned Person 3"
           value={kyc3}
           onChangeText = {setKyc3}
          />
          </View>
          <View style={{flex:1, flexDirection: 'column'}}>
          <Text style={{fontSize:16, margin:5}}>Mobile Number<Text style={{color: 'red'}}> *</Text></Text>
          <View style={{flex:1, flexDirection: 'row'}} >
          <TextInput
           style={{borderColor:'black', 
           borderWidth:1, 
           height: 50,
           margin:5,
           alignContent: 'stretch'}}
           placeholder="STD Code"
           value={code}
           onChangeText = {setCode}
          />
          <TextInput
           style={{borderColor:'black', 
           borderWidth:1, 
           height: 50,
           margin:5,
           width:200,
           alignContent: 'space-around'}}
           placeholder="Number"
           value={number}
           onChangeText = {setNumber}
          />
          </View>
          <View style={{flex:1, flexDirection: 'column'}}>
          <Text style={{fontSize:16, margin:5}}>Landline Number</Text>
          <View style={{flex:1, flexDirection: 'row'}} >
          <TextInput
           style={{borderColor:'black', 
           borderWidth:1, 
           height: 50,
           margin:5,
           alignContent: 'stretch'}}
           placeholder="STD Code"
           value={std}
           onChangeText = {setStd}
          />
          <TextInput
           style={{borderColor:'black', 
           borderWidth:1, 
           height: 50,
           margin:5,
           width:200,
           alignSelf: 'flex-end'}}
           placeholder="Number"
           value={lnumber}
           onChangeText = {setLnumber}
          />
          </View>
          </View>
          <View style={{flex:2, flexDirection: 'column'}}>
          <Text style={{fontSize:16, margin:5}}>Registered Office Address<Text style={{color:'red'}}> First Address *</Text></Text>
          <TextInput
           style={styles.inputs}
           placeholder="Registered Address of Concerened Person1"
           value={address1}
           onChangeText = {setAddress1}
          />
          <TextInput
           style={styles.inputs}
           placeholder="Registered Address of Concerened Person2"
           value={address2}
           onChangeText = {setAddress2}
          />
          <TextInput
           style={styles.inputs}
           placeholder="Registered Address of Concerened Person3"
           value={address3}
           onChangeText = {setAddress3}
          />
          </View>
          <View style={{flex:2, flexDirection: 'column'}}>
          <Text style={{fontSize:16, margin:5}}>Requirements(maximum 300 words)<Text style={{color: 'red'}}> *</Text></Text>
          <TextInput
           style={styles.inputs}
           placeholder="Requirement"
           value={requirements}
           onChangeText = {setRequirements}
          />
          </View>
          <Text style={{fontSize:16, margin:5}}>Nature of Property Required/Being posted (only for Investor and Investee)<Text style={{color: 'red'}}> *</Text></Text>
          <RadioForm style={{ margin:15}}radio_props={radio_props2} initial={null} 
          />
          <Text style={{fontSize:16, margin:5}}>Probable Investment Limit (only for Investor and Investee)<Text style={{color: 'red'}}> *</Text></Text>
          <RadioForm style={{ margin:15}}radio_props={radio_props3} initial={null} onPress={(item) => setLimit(item)}
          />
          <Button title="Submit" onPress={() => addDoc()}></Button>
          </View>
          </ScrollView>
          </SafeAreaView>
          
      );
      
}

const styles = StyleSheet.create({
  inputs: {
    alignSelf: 'stretch',
    borderColor:'black', 
    borderWidth:1, 
    height: 50,
    
    margin:5
  },
      
      container: {
        flex: 1,
        
      },
      temp:{
        fontSize:40
      }
  });
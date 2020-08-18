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


var radio_props1 = [
  {label: 'CMA', value: 'CMA' },
  {label: 'CS', value: 'CS' },
  {label: 'CA', value: 'CA' },
  {label: 'Insolvency Professional', value: "Insolvency Professional" },
  {label: 'Management Graduate', value: 'Management Graduate' },
  {label: 'Valuer', value: 'Valuer'},
  {label: 'Engineer', value: 'Engineer' },
  {label: 'Advocate', value: 'Advocate' },
  {label: 'Forensic Auditor', value: 'Forensic Auditor ' }
];



export default function Det1({ route }){
  const [name, setName] = useState('');
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
  const [ cat, setCat] = useState('');

  function addDoc() {
    if(name!="" && cat!="" && number!="" && address1!="" && requirements!="")
    {
    db.ref('/Professional').push({
    Name: name,
    Category: cat,
    KYC1: kyc1,
    KYC2: kyc2,
    KYC3: kyc3,
    Contact1: code +" " + number,
    Contact2: std + " " + lnumber,
    Address1: address1,
    Address2: address2,
    Address3: address3,
    Requirements: requirements
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
    setCat('');
  }
  else{
    alert("Fields marked with '*' are mandatory");
  }

  }

  

      return (
        
          //PROFESSIONAL
          <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor="#468189" />
          <ScrollView style={{flex:1}}>
          <View style={{flex: 1, backgroundColor:'powderblue'}}>
          </View>
          <View style={{flex:2, flexDirection: 'column'}}>
          <Text style={{fontSize:16, margin:5}}>Full Name <Text style={{color:'red'}}> *</Text></Text>
          <TextInput
           style={styles.inputs}
           placeholder="Type here!"
           value={name}
           onChangeText = {setName}
          />
          </View>
          <View style={{flex:2, flexDirection: 'column'}}>
          <Text style={{fontSize:16, margin:5}}>Category<Text style={{color:'red'}}> *</Text></Text>
          <RadioForm style={{ margin:15}}  radio_props={radio_props1} initial={null}
          onPress={(item) => setCat(item)}
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
           required
          />
          <Button style = {{height: 20, width: 50, alignItems: 'center' }} title="Submit" onPress={() => addDoc()}></Button>
          </View>
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
    height: 60,
    margin:10
  },
      
      container: {
        flex: 1,
        
      },
      temp:{
        fontSize:40
      }
  });
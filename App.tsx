import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useForm,Controller} from 'react-hook-form'
import FormInputController from './src/components/controllers/FormInputController'
const yup = () => { 
  const {
    control,
    handleSubmit,
    formState:{errors}
  } = useForm()
  const submit = (data) => {
    Alert.alert(JSON.stringify(data));
    
  }
  return (
    <View style = {styles.container}>
      <Text style = {styles.text}>React Hook Form</Text>
      <FormInputController
      name={'username'} control={control}
      placeholder={'Enter username'}
      />
      <FormInputController
      name={'email'} control={control}
      placeholder={'Enter Email'}
      />
      <FormInputController
      name={'password'}
      placeholder={'Enter Password'}
      control={control}
      props={{secureTextEntry: true}}
      />
     
     
    
      <TouchableOpacity style = {styles.in} onPress={handleSubmit(submit)}>
        <Text>Submit</Text>
      </TouchableOpacity>
    
    </View>
  )
}

export default yup

const styles = StyleSheet.create({
  textE:{
    color: 'red'
  },
  in:{ borderWidth:1,
    marginTop: 19,
    padding: 5,
  backgroundColor: '#4455',
  borderRadius: 10,

  },
  container:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center'
  },
input:{
  borderWidth:1,
  width: '90%',
  padding: 10,
  marginTop: 4,
  borderRadius:10,
  // margin: 50

},
  text:{
    fontSize:20,
    fontFamily: 'Satisfy-Regular'

  }
})
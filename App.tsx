import { Alert, Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {useForm,Controller} from 'react-hook-form'
import FormInputController from './src/components/controllers/FormInputController'

import { yupResolver } from '@hookform/resolvers/yup'
import { signUp } from './src/constants/schemas/loginschema'
import SignInInput from './src/screens/auth/SignInInput'



const App = () => { 

  return (
    
     <SignInInput
     
     />
      
    
    
  )
}

export default App

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

  text:{
    fontSize:20,
    fontFamily: 'Satisfy-Regular'

  }
})
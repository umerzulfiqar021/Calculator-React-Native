import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native'
import React, { FC } from 'react'
import { Control, Controller, FieldErrors, FieldValues } from 'react-hook-form'
interface FormProp {
    control: Control<FieldValues>
    errors ?: FieldErrors<FieldValues>
    name: string
    placeholder: string
    props?: TextInputProps
}
const FormInputController: FC<FormProp> = ({name,errors,control,placeholder,props}) => {
  return (
    <>
       <Controller
      name= {name}
      control={control}
      render={({field:{onChange,value, onBlur}})=>( 
      <TextInput
        style={styles.input}
        placeholder= {placeholder}
        placeholderTextColor={'#fff'}
        value={value}
        onChangeText={onChange}
        onBlur={onBlur}
        
        {...props}
        />)
      }
  
      />
        {errors &&errors[name] && <Text style = {styles.textE}>{errors[name]?.message}</Text>}
     </>

  )
}

export default FormInputController

const styles = StyleSheet.create({
    textE:{
        color: 'red'
      },
      input:{
        borderWidth:1,
        width: '90%',
        padding: 10,
        marginTop: 15,
        borderRadius:8,
        
      height: 50,
      color: '#fff',
      borderColor: '#fff'
      },

})
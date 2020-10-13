import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Yup  from 'yup'

import {AppForm, AppFormField, AppFormPicker, SubmitButton} from '../components/forms'
import AppFormImagePicker from '../components/forms/AppFormImagePicker'
import Screen from '../components/Screen'
import useLocation from '../hooks/useLocation'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(4).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  description: Yup.string().label('Description'),
  category: Yup.number().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image')
})

const categories = [
  {title:'Furniture', value:1},
  {title:'Clothing', value:2},
  {title:'Camera', value:3}
]

export default function ListingEditScreen() {
  const location = useLocation()

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          title:'',
          price:'',
          description:'',
          category: null,
          images: []
        }}
        onSubmit={(values) => console.log('Values: ' + JSON.stringify(values), 'Location: ' + JSON.stringify(location))}
        validationSchema={validationSchema}
      >
        <AppFormImagePicker name='images' />
        <AppFormField maxLenght={255} name='title' placeholder='Title' />
        <AppFormField 
          keyboardType='numeric'
          maxLenght={8}
          name='price'
          placeholder='Price'
          width={120}
        />
        <AppFormPicker 
          items={categories}
          name='category'
          placeholder='Select a category'
        />
        <AppFormField 
          maxLength={255}
          multiline
          name='description'
          numberOfLines={3}
          placeholder='Description'
        />

        <SubmitButton title='Post' />

      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    marginTop:20
  }
})

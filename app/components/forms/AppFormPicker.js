import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFormikContext} from 'formik'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

export default function AppFormPicker({items, name, placeholder, width}) {
const {errors, setFieldValue, touched, values } = useFormikContext()

  return (
    <>
      <AppPicker
        listItems={items}
        onBlur= { () => setFieldTouched(name)}
        onSelectItem={(item) => {setFieldValue(name, item)}}
        placeholder={placeholder}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}

const styles = StyleSheet.create({})

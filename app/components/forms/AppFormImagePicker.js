import React from 'react'
import {useFormikContext} from 'formik'

import AppListImageInputs from '../AppListImageInputs'
import ErrorMessage from './ErrorMessage'


export default function AppFormImagePicker({name}) {
  const {errors, setFieldValue, touched, values } = useFormikContext()
  const imageUris = values[name]

  const handleAdd = uri => {
    setFieldValue(name, [...imageUris, uri])
  }
  const handleRemove = uri => {
    setFieldValue(name, imageUris.filter(imageUri => imageUri !== uri))
  }

  return (
    <>
      <AppListImageInputs imageUris={imageUris} 
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  )
}


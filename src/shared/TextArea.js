import React from 'react'
import { Field,ErrorMessage } from 'formik'
import AuctionTextError from './AuctionTextError'
const TextArea = (props) => {
    const {label,name,...rest} = props
  return (
    <div className="">
        <label htmlFor={name}>{label}</label>
        <Field as = "textarea" id = {name} name={name} {...rest}/>
        <ErrorMessage name={name} component={AuctionTextError}/>
      
    </div>
  )
}

export default TextArea

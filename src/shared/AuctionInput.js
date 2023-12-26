import React from 'react'
import { Field, ErrorMessage } from 'formik'
import AuctionTextError from './AuctionTextError'

function AuctionInput(props) {
    const { label, name, ...rest } = props
  return (
    <div className='col-sm-4'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage component={AuctionTextError} name={name} />
    </div>
  )
}

export default AuctionInput
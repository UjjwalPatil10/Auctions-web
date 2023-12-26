import React from 'react'
import { Field, ErrorMessage } from 'formik'
import AuctionTextError from './AuctionTextError'


function AuctionSelect(props) {
    const { label, name, options, ...rest } = props
  return (
    <div className='col-sm-4'>
      <label htmlFor={name}>{label} </label>
      
      <Field as='select' id={name} name={name} {...rest}>
        {options.map(option => {
          
          return (
            <option key={option.value} value={option.value}>
              {option.key}
              
            </option>
            
          )
        })}
        
      </Field>
      
      <ErrorMessage component={AuctionTextError} name={name} />
    </div>
  )
}

export default AuctionSelect
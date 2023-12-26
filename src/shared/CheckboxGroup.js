import React from 'react'
import { Field, ErrorMessage } from 'formik'
import AuctionTextError from './AuctionTextError'

function CheckboxGroup(props) {
    const { label, name, options, ...rest } = props
  return (
    <div className='col-sm-4'>
    <label>{label}</label>
    <Field name={name} >
      {({ field }) => {
        return options.map(option => {
          return (
            <React.Fragment key={option.key}>
              <input
                type='checkbox'
                id={option.value}
                {...field}
                value={option.value}
                checked={field.value.includes(option.value)}
              />
              <label htmlFor={option.value}>{option.key}</label>
            </React.Fragment>
          )
        })
      }}
    </Field>
    <ErrorMessage component={AuctionTextError} name={name} />
  </div>
  )
}

export default CheckboxGroup
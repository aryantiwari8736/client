import React from 'react'

const Input = ({ value, label, placeHolder, formikTouched, formikError, formikChange, formikBlur, formikValue, type }) => {
  return (
    <div className=" ">
      <label htmlFor={value} className="block dark:text-white  text-sm font-semibold leading-6 text-gray-900 ">{label} {formikTouched && formikError ? (
        <span className=' text-xs text-red-500 mb-.5'>{`(${formikError}*)`}</span>
      ) : null}</label>
      <div className="mt-2.5">
      <input
        id={value}
        name={value}
        type={type}
        onChange={formikChange}
        onBlur={formikBlur}
        value={formikValue}
        className="block w-full rounded-md dark:text-white  border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder={placeHolder} required />
        </div>
    </div>
  )
}

export default Input
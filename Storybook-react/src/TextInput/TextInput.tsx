import React from 'react'

type TextInputProps = {
    label?:string,
    placeholder?: string,
    bgColor?:string,
}

const  TextInput = (props: TextInputProps)=> {
  return (
    <div style={{backgroundColor: props.bgColor}}>
      <label htmlFor={props.label}>{props.label}</label>
      <input id={props.label} type='text' placeholder={props.placeholder}></input>
    </div>
  )
}

export default TextInput

import React from 'react'
import styled from 'styled-components'

interface InputProps {
  name: string
  register: any
  rules: { [key: string]: any }
  type: string
  id?: any
  value?: any
  onChange?: any
}

const StyledInput = styled.input`
  display: block;
  width: 100%;
  padding: 1rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  -webkit-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
`

function Input({ name, register, rules, type, id, value, onChange }: InputProps) {
  return (
    <StyledInput
      /*  type={props.type} className={input.input}  aria-describedby={props.aria_describedby} 
            placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}*/
      {...register(name, rules)}
      type={type}
      value={value}
      id={id}
      onChange={onChange}
    />
  )
}

export default Input

import React, { ForwardRefRenderFunction, InputHTMLAttributes, RefAttributes, forwardRef } from 'react'
import styled from 'styled-components'

export type InputType = 'text' | 'number'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  name: string
  label: string
  type?: InputType
  className?: string
  disabled?: boolean
  placeholder?: string
}

const StyledInput = styled.input`
  width: 100%;
  border: ${(props) => props.theme.base.inputBorder};
  border-radius: ${(props) => props.theme.inputRadius};
  font-size: 1.6rem;
  line-height: 1.5;
  height: var(--input-height);
  padding: 0 1.8rem;
  -ms-text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  background: 0 0;
  color: #4b4b4b;
`

const Input: ForwardRefRenderFunction<HTMLInputElement, Omit<InputProps, 'ref'> & RefAttributes<HTMLInputElement>> = (
  { id, name, label, type = 'text', placeholder, disabled = false, ...props },
  ref,
) => {
  return (
    <StyledInput id={id} ref={ref} name={name} type={type} className="form-control" disabled={disabled} {...props} />
  )
}

export default forwardRef(Input)

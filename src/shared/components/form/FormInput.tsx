import React from 'react'
import type { FieldValues, Path, RegisterOptions, UseFormRegister } from 'react-hook-form'

import Input, { InputProps } from './Input'

export type FormInputProps<TFormValues extends FieldValues> = {
  name: Path<TFormValues>
  rules?: RegisterOptions
  register?: UseFormRegister<TFormValues>
} & Omit<InputProps, 'name'>

export const FormInput = <TFormValues extends FieldValues>({
  className,
  name,
  register,
  rules,
  ...props
}: FormInputProps<TFormValues>): JSX.Element => {
  return (
    <div className={className}>
      <Input name={name} {...props} {...(register && register(name, rules))} />
    </div>
  )
}

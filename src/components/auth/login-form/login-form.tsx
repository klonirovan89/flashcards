import { useForm, useController } from 'react-hook-form'

import { Button } from '../../ui/button/button'
import { SuperInput } from "../../ui/input/input";
import { Input } from "@mui/material";
import { CheckboxControl } from "../../ui/checkbox/checkbox";
import React from "react";

type FormValues = {
  email: string
  password: string
  rememberMe?: boolean
}

export const LoginForm = () => {
  const { register, handleSubmit , control} = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register('email')} name={'email'} />
      <Input {...register('password')} name={'password'} />
      <CheckboxControl checked={value} onValueChange={onChange} label={'remember me'} />
      <Button type="submit">Submit</Button>
    </form>
  )
}
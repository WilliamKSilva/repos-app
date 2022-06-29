import React from "react";
import { Controller, Control } from 'react-hook-form'
import { TextInputProps } from "react-native";
import { Input } from "../Input";

interface InputFormProps extends TextInputProps {
  control: Control;
  name: string;
  defaultValue?: string;
  placeholder: string;
}

export function InputForm({ control, name, defaultValue, placeholder, ...rest }: InputFormProps) {
  
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field: { onChange, value } }) => (
          <Input 
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            {...rest}
          />
        )}        
      />
    </>
  )
}
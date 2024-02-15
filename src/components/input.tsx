import { View, Text, TextInput, TextInputProps } from 'react-native'
import React from 'react'
import colors from 'tailwindcss/colors'

export default function Input({...rest}: TextInputProps) {
  return (
    <TextInput
    className='h-32 bg-slate-800 rounded-md px-4 py-2 font-body text-sm text-white'
    multiline
    textAlignVertical='top'
    placeholderTextColor={colors.neutral[400]}
    {...rest}/>
  )
}
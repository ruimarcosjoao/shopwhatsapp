import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import colors from 'tailwindcss/colors'

export function Loading() {
  return (
    <View className='flex-1 flex items-center justify-center bg-slate-900'>
      <ActivityIndicator color={colors.white} />
    </View>
  )
}
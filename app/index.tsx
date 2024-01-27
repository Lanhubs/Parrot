import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'

type Props = {}

const Page = (props: Props) => {
  return (
    <Redirect href={"/(tabs)"}/>
  )
}

export default Page
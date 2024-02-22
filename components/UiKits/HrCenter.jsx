import { View, Text } from 'react-native'
import React from 'react'

export default ({children}) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "center" }}>{children}
    </View>
  )
}

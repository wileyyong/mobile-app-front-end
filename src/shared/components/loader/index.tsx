import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from "./styles"

interface LoaderProps{
  error?:string|null
  tab?:string
}

const index = ({error,tab}:LoaderProps) => {
  return (

      <View style={styles.activity}>
        <ActivityIndicator size={'large'} color="white" />
        <Text style={styles.text}>{error?error:`Fetching ${tab?tab:"Pozzles"}...`}</Text>
      </View>
    ) 


}

export default index

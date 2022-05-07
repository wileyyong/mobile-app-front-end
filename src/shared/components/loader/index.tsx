import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import styles from "./styles"

interface LoaderProps{
  error?:string|null
}

const index = ({error}:LoaderProps) => {
  return (

      <View style={styles.activity}>
        <ActivityIndicator size={'large'} color="white" />
        <Text style={styles.text}>{error?error:"Fetching Pozzles..."}</Text>
      </View>
    ) 


}

export default index

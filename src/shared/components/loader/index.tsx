import React from 'react'
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native'
import styles from "./styles"

interface LoaderProps{
  error?:string|null
  tab?:string
  refresh?:()=>void
}

const index = ({error,tab,refresh}:LoaderProps) => {
  return (

      <View style={styles.activity}>
        <ActivityIndicator size={'large'} color="white" />
        <Text style={styles.text}>{error?error:`Fetching ${tab?tab:"Pozzles"}...`}</Text>
        {error?<TouchableOpacity style={styles.refreshbtn} onPress={refresh}>
          <Text style={styles.btntext}>Refresh</Text>
        </TouchableOpacity>:null}
        
      </View>
    ) 


}

export default index

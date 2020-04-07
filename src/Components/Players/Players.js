import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native'
import PlayerButton from './PlayerButton'

class Players extends React.Component{
  render(){
    return(
      <View style={styles.main_style}>
      <PlayerButton navigation = {this.props.navigation}/>
      </View>
    )
  }
}
styles = StyleSheet.create({
  main_style: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text_style: {    fontWeight: 'bold',

       fontSize: 26,

       color: '#666666',

       fontStyle: 'italic'}
})


export default Players

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native'

class Main extends React.Component{
  _Settings = () => {
  this.props.navigation.navigate("Settings")
  }
  _Game = () => {
    this.props.navigation.navigate('Game')
  }
  _Players = () => {
    this.props.navigation.navigate("Players")
  }
  render(){
    return(

      <View style={styles.main_style} >
      <TouchableOpacity style={styles.main_style} onPress={() => this._Players()}>
        <Text style={styles.text_style}>Joueurs</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.main_style} onPress={() => this._Settings()}>
          <Text style={styles.text_style}>Couleurs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.main_style} onPress={() => this._Game()}>
          <Text style={styles.text_style}>Play</Text>
        </TouchableOpacity>
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


export default Main

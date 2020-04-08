import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native'
import {Typo, ViewStyle} from '../../styles'

class Main extends React.Component{
  _Settings = () => {
  this.props.navigation.navigate("Settings")
  }
  _Game = () => {
    this.props.navigation.navigate('Game')
  }
  // _Players = () => {
  //   this.props.navigation.navigate("Players")
  // }
  _Rules = () => {
    this.props.navigation.navigate("Rules1")
  }
  render(){
    return(

      <View style={styles.main_style} >
      {/* <TouchableOpacity style={styles.main_style} onPress={() => this._Players()}>
        <Text style={styles.text_style}>Joueurs</Text> */}
        <TouchableOpacity style={styles.main_style} onPress={() => this._Rules()}>
        <Text style={styles.text_style}>Règles</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.main_style} onPress={() => this._Settings()}>
          <Text style={styles.text_style}>Couleurs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.main_style} onPress={() => this._Game()}>
          <Text style={styles.text_style}>Jouer</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

styles = StyleSheet.create({
  main_style: {...ViewStyle.main_style},
  text_style: {...Typo.menu}
})


export default Main

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native'
import {Typo, ViewStyle} from '../styles'

class SubMenu extends React.Component{
  constructor(){
    super()
}
  static navigationOptions = ({ navigation }) => ({
    title: `Jeu ${navigation.state.params.game}`
  });
  _Settings = () => {
  this.props.navigation.navigate("Settings"+this.props.navigation.state.params.game)
  }
  _Game = () => {
    this.props.navigation.navigate('Game'+this.props.navigation.state.params.game)
  }
  // _Players = () => {
  //   this.props.navigation.navigate("Players")
  // }
  _Rules = () => {
    console.log(this.props.navigation.state.params.game)
    this.props.navigation.navigate("Rules"+this.props.navigation.state.params.game)
  }
  render(){
    return(
        
      <View style={styles.main_style} >
      {/* <TouchableOpacity style={styles.main_style} onPress={() => this._Players()}>
        <Text style={styles.text_style}>Joueurs</Text> */}
        <TouchableOpacity style={styles.main_style} onPress={() => this._Rules()}>
        <Text style={styles.text_style}>Regles</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.main_style} onPress={() => this._Settings()}>
          <Text style={styles.text_style}>Parametres</Text>
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


export default SubMenu

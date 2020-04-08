import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {Typo, ViewStyle} from '../styles'

class Main extends React.Component{
  _SubMenu = (game) => {
  this.props.navigation.navigate("SubMenu", {game: game})
  }
  render(){
    return(

      <View style={styles.main_style} >
      <TouchableOpacity style={styles.main_style} onPress={() => this._SubMenu(1)}>
        <Text style={styles.text_style}>Jeu 1</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.main_style} onPress={() => this._SubMenu(2)}>
          <Text style={styles.text_style}>Jeu 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.main_style} onPress={() => {}}>
          <Text style={styles.text_style}>Jeu 3</Text>
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

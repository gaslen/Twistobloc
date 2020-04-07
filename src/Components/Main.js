import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native'

class Main extends React.Component{
  _Game1 = () => {
  this.props.navigation.navigate("Game1")
  }
  _Game2 = () => {
    this.props.navigation.navigate('Game2')
  }
  _Game3 = () => {
    this.props.navigation.navigate("Game3")
  }
  render(){
    return(

      <View style={styles.main_style} >
      <TouchableOpacity style={styles.main_style} onPress={() => this._Game1()}>
        <Text style={styles.text_style}>Game 1</Text>
      </TouchableOpacity>

        <TouchableOpacity style={styles.main_style} onPress={() => this._Game2()}>
          <Text style={styles.text_style}>Game 2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.main_style} onPress={() => this._Game3()}>
          <Text style={styles.text_style}>Game 3</Text>
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

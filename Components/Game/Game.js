import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native'
import colors from "../../Helpers/colors"


class Game extends React.Component{
  constructor(){

    super()
    this.body_parts = ["Jambe gauche", "Jambe droite", "Bras gauche", "Bras droit"]
    this.sum_weights = 0
    for (i in colors){
      this.sum_weights += colors[i].weight
    }
    this.state={
      NumberBody : Math.random(),
      NumberColor: Math.random()
    }
  }

  _Generate_numbers = () => {
    this.setState({

      NumberBody : Math.random(),
      NumberColor: Math.random()

    })
  }


  _sample_body_part = () => {
    var body_part = this.body_parts[Math.floor(this.state.NumberBody * this.body_parts.length)]
    return body_part
  }

  _sample_color = () => {

    var i, sum=0
    for (i in colors){
      sum += (colors[i].weight / this.sum_weights)
      if (this.state.NumberColor <= sum){
        return i
      }
    }
  }

  render(){
    col = this._sample_color()
    return(
      <View style={[styles.main_style, {backgroundColor: colors[col].id}]}>
        <TouchableOpacity style={styles.main_style} onPress={() => this._Generate_numbers()}>
          <Text style={styles.text_style}>{this._sample_body_part()} {colors[col].fr}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

styles = StyleSheet.create({
  main_style: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_style: {    fontWeight: 'bold',

       fontSize: 26,

       color: '#A9A9A9',

       fontStyle: 'italic'}
})

export default Game

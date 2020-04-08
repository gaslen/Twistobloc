import React from 'react'

import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import {Typo, ViewStyle, Colors} from '../../styles'


class ColorItem extends React.Component {
  constructor(){
      super()
      this.color_id = 0
      this.state={
        myNumber : -1
      }
    }

    onTextChanged = (text) => {
          // code to remove non-numeric characters from text
          console.log(text=="")
          if (text == ""){
            colors[this.color_id].weight = 0
            this.setState({myNumber:0})
          }
          else{
            text = parseInt(text)
            colors[this.color_id].weight = text
            this.setState({myNumber:text})
          }
        }


  render() {
    const {color, displayColor} = this.props
    this.color_id = colors.findIndex(x => x.id === color.id)
    this.state.myNumber = colors[this.color_id].weight
    return (

      <View style={[styles.main_container, {backgroundColor: color.id}]}>

      <TextInput
                  style={styles.title_text}
                  keyboardType = 'numeric'
                  onChangeText = {(text)=> this.onTextChanged(text)}
                  value = {this.state.myNumber.toString()}
                  maxLength={10}
                />
        </View>

    )
  }
}


const styles = StyleSheet.create({

  main_container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 120
  },

  title_text: {
    fontWeight: 'bold',
    fontSize: Typo.largeFontSize,
    color: Colors.light_grey,
    fontStyle: 'italic'
  }
})


export default ColorItem

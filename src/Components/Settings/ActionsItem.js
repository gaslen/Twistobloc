import React from 'react'

import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import {Typo, ViewStyle, Colors} from '../../styles'


class ActionItem extends React.Component {
  constructor(){
      super()
      this.action_id = 0
      this.state={
        myNumber : -1
      }
    }

    onTextChanged = (text) => {
          // code to remove non-numeric characters from text
          console.log(text=="")
          if (text == ""){
            actions[this.action_id].weight = 0
            this.setState({myNumber:0})
          }
          else{
            text = parseInt(text)
            actions[this.action_id].weight = text
            this.setState({myNumber:text})
          }
        }


  render() {
    const {action} = this.props
    this.action_id = actions.findIndex(x => x.id === action.id)
    this.state.myNumber = actions[this.action_id].weight
    return (

        <View style={[styles.main_container, {  borderBottomColor: 'black',
        borderBottomWidth: 1}]}>
          <Text style={styles.title_small_text}>
              {action.id}
          </Text>
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
    fontSize: Typo.mediumFontSize,
    color: Colors.light_grey,
    fontStyle: 'italic'
  },

  title_small_text: {
    fontWeight: 'bold',
    fontSize: Typo.smallFontSize,
    color: Colors.dark_grey,
    fontStyle: 'italic'
  }
})


export default ActionItem

import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native'
import colors from "../../Helpers/colors"
import PlayerButton from '../Players/PlayerButton'
import {Typo, ViewStyle} from '../../styles'


class Game2 extends React.Component{
  constructor(){

    super()
    this.actions = ["Jambe gauche", "Jambe droite", "Bras gauche", "Bras droit", "Match", "pieds"]
    this.state={
        feet_dropped : false,
        NumberBody : Math.random()
    }
  }

  _Generate_numbers = () => {
    this.setState({

      NumberBody : Math.random()

    })
  }


  _sample_action = () => {
    var action = this.actions[Math.floor(this.state.NumberBody * this.actions.length)]
    if (action == "pieds"){
        if (this.state.feet_dropped){
            action = "Reprendre les pieds"
            this.state.feet_dropped = false
        }
        else{
            action = "Lacher les pieds"
            this.state.feet_dropped = true
        }
    }

    return action
  }


  render(){
    return(
        // <PlayerButton navigation = {this.props.navigation}/>
      <View style={[styles.main_style]}>
        <TouchableOpacity style={styles.main_style} onPress={() => this._Generate_numbers()}>
          <Text style={styles.text_style}>{this._sample_action()}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

styles = StyleSheet.create({
  main_style: {...ViewStyle.main_style},
  text_style: {...Typo.game}
})

export default Game2

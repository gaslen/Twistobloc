import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native'
import actions from "../../Helpers/helper2"
import PlayerButton from '../Players/PlayerButton'
import {Typo, ViewStyle, Colors} from '../../styles'


class Game2 extends React.Component{
  constructor(){

    super()
    this.actions = ["Jambe gauche", "Jambe droite", "Bras gauche", "Bras droit", "Match", "Pieds"]
    this.sum_weight = 0
    this.sum_weight_no_legs = 0 
    this.sum_weight_no_match = 0 
    this.sum_weight_no_legs_match = 0 
    for (i in actions){
      this.sum_weight += actions[i].weight
      if (actions[i].id != "Match"){this.sum_weight_no_match += actions[i].weight}
      if (actions[i].id != "Jambe droite" && actions[i].id != "Jambe gauche"){
        this.sum_weight_no_legs += actions[i].weight
        if (actions[i].id != "Match"){this.sum_weight_no_legs_match += actions[i].weight}
      }
    }

    this.state={
      NumberBody : Math.random(),
        feet_dropped : false,
        last_action : ''
    }
  }

  _Generate_numbers = () => {
    this.setState({

      NumberBody : Math.random()

    })
  }

  _sample_one_action = () => {
    if (this.state.feet_dropped){
      if (this.state.last_match){var sum = this.sum_weight_no_legs_match}
      else{var sum = this.sum_weight_no_legs}
    }
    else{
      if (this.state.last_match){var sum = this.sum_weight_no_match}
      else{var sum = this.sum_weight}
    }
    console.log('\n')
    console.log(sum, this.sum_weight)
    var i, proba=0
    for (i in actions){
      if (this.state.feet_dropped && (actions[i].id == "Jambe droite" || actions[i].id == "Jambe gauche")){
        continue
      }
      if (this.state.last_match && actions[i].id == "Match"){continue}
      proba += (actions[i].weight / sum)
      console.log(this.actions[i], this.state.NumberBody, proba)
      if (this.state.NumberBody <= proba){
        return this.actions[i]
      }
    }
  }


  _sample_action = () => {
    var action = this._sample_one_action()
    this.state.last_match = (action == "Match")

    if (action == "Pieds"){
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

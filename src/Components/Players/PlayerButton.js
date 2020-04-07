import React from 'react'
import {StyleSheet, View, TextInput, Button, Text, TouchableNativeFeedback, Image, TouchableOpacity } from 'react-native'

class PlayerButton extends React.Component {
    constructor(){
        super()
    }
    _onpress = () => {
        this.props.navigation.navigate("Players")
        }
  render() {
      const {navigation} = this.props
      // console.log(this.props)
    return (
      <View style={{ flex: 1,flexDirection: "row",justifyContent: "flex-end",  margin: 10 }}>
        <TouchableNativeFeedback  onPress={() => this._onpress()}>
        <Image style={styles.button}
            source={require('../../assets/player_logo.png')}
        />
        </TouchableNativeFeedback>
        <Text> Player </Text>
        
      </View>
    )
  }
}


const styles = StyleSheet.create({
    button: {
        // justifyContent: 'flex-end',
        // alignItems: 'flex-start',
        
        borderRadius: 50,
        width: 40,
        height: 40

    }
  })

  export default PlayerButton
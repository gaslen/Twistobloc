import React from 'react'
import { StyleSheet, View} from 'react-native'

class Play extends React.Component{
  render(){
    return(
      <View style={[styles.main_style, {backgroundColor: this.props.navigation.state.params.color}]}>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_style: {
    flex: 1
  }
})

export default Play

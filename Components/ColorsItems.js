import React from 'react'

import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'


class ColorItem extends React.Component {

  render() {
    const {color, displayDetailForFilm} = this.props
    return (

      <TouchableOpacity style={[styles.main_container, {backgroundColor: color.id}]} onPress={() => displayDetailForFilm(color.id)}>

        <Text style={styles.title_text}>{color.weight.toString()}</Text>

      </TouchableOpacity>

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

     fontSize: 26,

     color: '#666666',

     fontStyle: 'italic'


  }

})


export default ColorItem

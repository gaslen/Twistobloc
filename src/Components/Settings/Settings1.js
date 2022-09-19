// Components/Settings.js


import React from 'react'

import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'

import colors from "../../Helpers/helper1"

import ColorItem from "./ColorsItems"



class Settings extends React.Component {


  render() {

    return (

      <View style={styles.main_container}>

        <FlatList

          data={colors}

          keyExtractor={(item) => item.id.toString()}

          renderItem={({item}) => <ColorItem color={item}/>}

        />
      </View>

    )
  }
}


const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
})


export default Settings

// Components/Settings.js


import React from 'react'

import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'

import actions from "../../Helpers/helper2"

import ActionItem from "./ActionsItem"



class Settings extends React.Component {


  render() {

    return (

      <View style={styles.main_container}>

        <FlatList

          data={actions}

          keyExtractor={(item) => item.id.toString()}

          renderItem={({item}) => <ActionItem action={item}/>}

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

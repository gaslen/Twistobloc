// Components/Settings.js


import React from 'react'

import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'

import colors from "../../Helpers/colors"

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
        <View style={flex=1,backgroundColor="red"}>


        </View>
      </View>

    )

  }

}


const styles = StyleSheet.create({

  main_container: {

    flex: 1,

    marginTop: 20

  },

  textinput: {

    marginLeft: 5,

    marginRight: 5,

    height: 50,

    borderColor: '#000000',

    borderWidth: 1,

    paddingLeft: 5

  }

})


export default Settings

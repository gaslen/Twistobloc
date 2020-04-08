// Navigation/Navigation.js


import {createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Settings from './Components/Settings/Settings'
import Main from './Components/Main'
import Game1 from './Components/Games/Game1'
import Game from './Components/Games/Game1/Game'
import Players from './Components/Players/Players'
import Rules from './Components/Games/Game1/Rules'

const SearchStackNavigator = createStackNavigator({

  Main: {
    screen: Main
  },
  Game1: {
    screen: Game1
  },
  Game2: {
    screen: Game1
  },
  Game3: {
    screen: Game1
  },

  Game: {
    screen: Game
  },

  Rules1: {
    screen: Rules,

    navigationOptions: {

      title: 'Instructions'

    }
  },

  Settings: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue

    screen: Settings,

    navigationOptions: {

      title: 'Poids couleur'

    }

  },
  Players: {
    screen: Players
  },


})

export default createAppContainer(SearchStackNavigator)

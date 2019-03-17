// Navigation/Navigation.js


import { createStackNavigator,createAppContainer } from 'react-navigation'

import Settings from '../Components/Settings/Settings'
import Main from '../Components/Main'
import Game from '../Components/Game/Game'
import Players from '../Components/Players/Players'

const SearchStackNavigator = createStackNavigator({

  Main: {
    screen: Main
  },

  Game: {
    screen: Game
  },

  Settings: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue

    screen: Settings,

    navigationOptions: {

      title: 'Poids couleur'

    }

  },
  Players: {
    screen: Players
  }


})

export default createAppContainer(SearchStackNavigator)

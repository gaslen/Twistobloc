// Navigation/Navigation.js


import {createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Settings1 from './Components/Settings/Settings1'
import Settings2 from './Components/Settings/Settings2'
import Main from './Components/Main'
import SubMenu from './Components/submenu'
import Game1 from './Components/Games/Game1'
import Game2 from './Components/Games/Game2'
import Players from './Components/Players/Players'
import Rules1 from './Components/Rules/Rules1'
import Rules2 from './Components/Rules/Rules2'

const SearchStackNavigator = createStackNavigator({

  Main: {
    screen: Main
  },
  SubMenu: {
    screen: SubMenu
  },

  Game1: {
    screen: Game1,

    navigationOptions: {

      title: 'Jeu'

    }
  },

  Rules1: {
    screen: Rules1,

    navigationOptions: {

      title: 'Instructions'

    }
  },

  Settings1: {
    screen: Settings1,

    navigationOptions: {

      title: 'Parametres'

    }

  },
  Game2: {
    screen: Game2,

    navigationOptions: {

      title: 'Jeu'

    }
  },

  Rules2: {
    screen: Rules2,

    navigationOptions: {

      title: 'Instructions'

    }
  },

  Settings2: {
    screen: Settings2,

    navigationOptions: {

      title: 'Parametres'

    }

  },
  Players: {
    screen: Players
  },


})

export default createAppContainer(SearchStackNavigator)

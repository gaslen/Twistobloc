// Navigation/Navigation.js


import { createStackNavigator,createAppContainer } from 'react-navigation'

import Settings from '../Components/Settings'
import Play from '../Components/Play'
import Main from '../Components/Main'

const SearchStackNavigator = createStackNavigator({



  Settings: { // Ici j'ai appelé la vue "Search" mais on peut mettre ce que l'on veut. C'est le nom qu'on utilisera pour appeler cette vue

    screen: Settings,

    navigationOptions: {

      title: 'Rechercherds'

    }

  },
  Play: {  // same as for Search
    screen: Play
  }

})

export default createAppContainer(SearchStackNavigator)

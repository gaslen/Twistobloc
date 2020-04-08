import React from 'react'
import { MarkdownView } from 'react-native-markdown-view'


class Rules2 extends React.Component{
  render(){
    return(
          <MarkdownView style={{flex: 1, justifyContent: 'center',}}>
              ## Règles du jeu{'\n'} 
            * **But:** Arriver au sommet de la voie en respectant les instructions indiquées.{'\n'} 
            * **Optionnel**: Il est possible de définir un temps imparti pour tenir chaque position.{'\n'}
            * Le joueur commence sur le mur avec les prises qu'il veut. {'\n'} 
            * Dans le jeu, tapez sur l'écran pour obtenir l'action suivante. {'\n'}{'\n'}

            
            ## Instructions possibles {'\n'} 
            
            * Main gauche {'\n'} 
            * Main droite {'\n'} 
            * Match: Ramener les deux mains sur la même prise {'\n'}
            * Lâcher les pieds {'\n'}
            * Reprendre les pieds {'\n'}{'\n'} 
            ** Il est possible de modifier les fréquences d'apparition de ces actions dans *Paramètres*. ** {'\n'} 
          </MarkdownView>
    )
  }
}


export default Rules2


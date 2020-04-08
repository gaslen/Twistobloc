import React from 'react'
import { MarkdownView } from 'react-native-markdown-view'


class Rules1 extends React.Component{
  render(){
    return(
          <MarkdownView style={{flex: 1, justifyContent: 'center',}}>
            * Il s'agit d'un jeu de **twister** sur un mur d'escalade. {'\n'}
            * **But:** Rester le plus longtemps possible sur le mur.{'\n'} 
            * Le joueur commence sur le mur avec les prises qu'il veut. {'\n'} 
            * Les poids dans *Paramètres* correspondent à leur fréquence d'apparition: plus le poids est élevé, plus la couleur apparaîtra.{'\n'}  
            * Le gris est un joker. {'\n'} 
            * Dans le jeu, tapez sur l'écran pour obtenir l'action suivante. 
          </MarkdownView>
    )
  }
}


export default Rules1


# Presentation

With Twistobloc, you can play Twister on a climbing wall ! Currently only game 1 implemented. 

# To launch on an Android device using expo
Install [Node.js](https://nodejs.org/en/download/), downlad expo app on the device and install expo.
```
npm install -g expo-cli
```

```
expo install react-navigation-stack react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
expo start
```

# To install the current apk

Download it [here](https://drive.google.com/open?id=1_WR37DlYN3VY4skH_ra8x8_j1O478n1n) and install it using an apk installer.


# TODO

*  Handle players, counters, scores

* Add games 2 & 3

*  Save data when the app shuts down

* Read actions with microphone

* Follow this code organization: https://thoughtbot.com/blog/structure-for-styling-in-react-native

* FR/EN mode

 * Instruction manual

# Game 1
It consists in a twister game on a climbing wall. The player starts on the wall with the holds they want. Someone uses this app to tell him his next move.

Set the different color weights in *Couleurs* according to the different color routes present in your climbing gym. Grey can be used as a joker. Then launch the game with play. 

In game, tap on the screen to get the next action. 


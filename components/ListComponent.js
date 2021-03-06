import React, { Component } from "react";
import { View } from "react-native";
import { ListItem } from "react-native-elements";
import SecureStore from 'expo-secure-store';

class ListComponent extends Component {  
    
    _onPressItem(nextScreen, currentScreen, value) {
        this.props.navigation.navigate(nextScreen)
        this._storeData(currentScreen, value) 
      }
      async _storeData(currentScreen, value) {  
        try {
          console.warn("Value Stored", value); 
          await SecureStore.setItemAsync(currentScreen, value)
        } catch (e) {
          console.log(e)
        }
      }

  render() {
    return (
      <View>
        {this.props.list.map((item, i) => (
          <ListItem
            key={i}
            title={item.title}
            leftIcon={{ name: item.icon }}
            bottomDivider
            chevron
            onPress={() => {this._onPressItem(this.props.nextScreen,this.props.currentScreen,item.title)}
            }
          />
        ))}
      </View>
    );
  }
}
export default ListComponent;




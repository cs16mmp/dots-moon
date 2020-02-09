import React from "react";
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableHighlight
} from "react-native";
import Constants from "expo-constants";

import Navigation from './Navigation'

const DATA = [
  {
    id: "1",
    title: "Closest Clinic"
  },
  {
    id: "2",
    title: "Clinics"
  },
  {
    id: "3",
    title: "HIV"
  },
  {
    id: "4",
    title: "PrEP"
  },
  {
    id: "5",
    title: "STI"
  },
  {
    id: "6",
    title: "Mental Health"
  }
];
function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function MainScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>    
        data={DATA}
        renderItem=
        {({ item }) => (
          <TouchableHighlight onPress={() => navigation.navigate('Detail')}>
            <Item title={item.title}></Item>
          </TouchableHighlight>
        )}
        keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 30,
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 32
  }
});

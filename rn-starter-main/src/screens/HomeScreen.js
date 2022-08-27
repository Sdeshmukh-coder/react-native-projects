import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <Text style={styles.text}>Hello This is Shreyans Here !</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" />
      <Button
        onPress={() => navigation.navigate('Lists')}
        title="Go to List" />
    </View >

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

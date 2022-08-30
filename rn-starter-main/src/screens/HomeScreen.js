import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello This is Shreyans Here !</Text>
      <Button
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo" />
      <Button
        onPress={() => navigation.navigate('Lists')}
        title="Go to List" />
      <Button
        onPress={() => navigation.navigate('Image')}
        title="Go to ImageScreen" />
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counte Demo" />
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to ColorScreen" />
    </View >

  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

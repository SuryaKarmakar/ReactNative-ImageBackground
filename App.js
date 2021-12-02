import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      {/* <ImageBackground
        source={{ uri: "https://reactjs.org/logo-og.png" }}
        style={styles.image}
      >
        <Text style={styles.text}>Inside</Text>
      </ImageBackground> */}

      <ImageBackground
        source={require("./backGroundImg.png")}
        style={styles.image}
      >
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
  },
});

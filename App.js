import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TextInput, Image, YellowBox } from 'react-native';

export default function App() {

  var textInputValue = "";
  const handlePress = () => console.log(textInputValue)
  const handleChangeText = (text) => {
    textInputValue = text
    console.log(textInputValue)
  }

  return (

    <View style={styles.container}>
      <View style={styles.header} >
        <Text style={styles.headerText}>
          Hello World!
          </Text>

        <Text style={styles.mediumHeaderText}>
          First React Native App
          </Text>

        <Text style={styles.lowerHeaderText}>
          This is a paragraph explaining what this app is all about. As you can see there are already many components including text, images and buttons.
          This is a app made by a student in Mobile app developer program on STI in Stockholm
          </Text>
      </View>

      <Text style={styles.questionsText}>
        What would you like to get out of this course?
        </Text>

      <TextInput
        style={styles.textInputText}
        placeholder="Enter Text"
        multiline
        onChangeText={handleChangeText} />

      <Text style={styles.questionsText}>
        An emoji describing how you are feeling about this course:
        </Text>

      <Image style={styles.imageStyle}
        source={require('./assets/mando.webp')}
      />

      <Button
        style={styles.buttonStyle}
        title="Submit"
        onPress={handlePress}
      ></Button>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    width: "100%",
  },
  header: {
    width: "100%",
    height: "18%",
    backgroundColor: "lightblue"
  },
  headerText: {
    marginTop: 40,
    fontSize: 20,
    fontWeight: 'bold'
  },
  mediumHeaderText: {
    fontSize: 15
  },
  lowerHeaderText: {
    fontSize: 10
  },
  questionsText: {
    marginTop: 30,
    fontSize: 15
  },
  textInputText: {
    marginTop: 10,
    width: "70%",
    height: "15%",
    backgroundColor: 'lightgray'
  },
  imageStyle: {
    backgroundColor: "yellow",
    marginTop: 10,
    width: 450,
    height: 200,
    resizeMode: 'center'
  },
  buttonStyle: {
    backgroundColor: "blue",
  }
});


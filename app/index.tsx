import { Stack } from 'expo-router';
import { StatusBar } from "expo-status-bar";
import React, { useState } from 'react';
import ButtonComponent from "../components/ButtonComponent";
import ConfettiController from '../components/ConfettiController';
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, StyleSheet, Text, View, Image, Alert} from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withDelay, withSequence,
} from 'react-native-reanimated';

export default function Index() {

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [confettiVisible, setConfettiVisible] = useState(false);
  const correctAnswer = 'recursion';

  const shakeX = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: shakeX.value }],
    };
  });

  const triggerShake = () => {
    shakeX.value = withSequence(
      withTiming(-10, { duration: 50 }),
      withRepeat(withTiming(10, { duration: 50 }), 6, true),
      withTiming(0, { duration: 50 })
    );
  };

  const handleSubmit = () => { 

      if (selectedAnswer === null) {
        return;
     }

       if (selectedAnswer === correctAnswer) {
        triggerConfetti();
        showCongratsAlert();
     } else {
        triggerShake();
        showTryAgainAlert();
    }
  };

  const showCongratsAlert = () => {
    Alert.alert('Congratulations, you earned "Fibonacci" badge!',
      '',
      [
        {
          text: 'Good Job!',
          onPress: () => setSelectedAnswer(null),
        },
      ],
      { cancelable: false}
    );
  };

  const showTryAgainAlert = () => {
    Alert.alert('Hint: Think about how the the Fibonacci Sequence works.',
      '',
      [
        {
          text: 'Try Again',
          onPress: () => setSelectedAnswer(null),
        },
      ],
      { cancelable: false}
    );
  };

  const handleButtonPress = (buttonId: string) => {
    if (selectedAnswer === buttonId) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(buttonId);
    }
  }

  const triggerConfetti = () => {
    setConfettiVisible(true);
    setTimeout(() => setConfettiVisible(false), 3000);
  };

  return (
      <View style = {styles.container}>
        <Text style = {styles.Header}>What algorithm is 
        this code snippet implementing?</Text>

        <Image source = {require('../assets/images/codeSnippet.png')}
        style = {styles.image} resizeMode="contain"/>

       <ButtonComponent title = "Greedy" isPressed = {selectedAnswer === 'greedy'}
        onPress={() => handleButtonPress('greedy')}/>

        <ButtonComponent title = "Sorting" isPressed = {selectedAnswer === 'sorting'}
        onPress={() => handleButtonPress('sorting')}/>

        <ButtonComponent title = "Recursion" isPressed = {selectedAnswer === 'recursion'}
        onPress={() => handleButtonPress('recursion')}/>

        <ButtonComponent title = "Brute Force" isPressed = {selectedAnswer === 'brute'}
        onPress={() => handleButtonPress('brute')}/>

        <Animated.View style = {[animatedStyle]} >
        <TouchableOpacity style={ styles.submitButton }
        onPress={handleSubmit} >
        <Text style={styles.submitButtonText}> Submt </Text>
        </TouchableOpacity>
        </Animated.View>

        <ConfettiController visible={confettiVisible} />
        
        <StatusBar backgroundColor="#161622" style="light" />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    },
    submitButton: {
      backgroundColor: 'green',
      padding: 20,
      borderRadius: 10,
      margin: 10,
      width: 200,
    },
    submitButtonText: {
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
    }
})
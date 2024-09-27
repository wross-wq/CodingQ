import { StyleSheet, View } from 'react-native';
import React from 'react';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withRepeat, withDelay,
} from 'react-native-reanimated';


const ConfettiPiece = () => {
    const fall = useSharedValue(0);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: fall.value }],
        };
    });

    React.useEffect(() => {
        fall.value = withDelay(
            Math.random() * 1000,
            withRepeat(
                withTiming(600 + Math.random() * 400, {duration: 3000}), -1, false )
            );
        }, []);

    const randomColor = 'rgba(${Math.floor(Math.random() * 225)}, ${Math.floor(Math.random() * 225)}, ${Math.floor(Math.random() * 225)}, 1)';

    return (
        <Animated.View style={[styles.ConfettiPiece, animatedStyle, {
             backgroundColor: randomColor },
        ]}
        />
    );
};

const styles = StyleSheet.create({
    ConfettiPiece: {
        width: 10,
        height: 20,
        position: 'absolute',
        top: -100,
        left: Math.random() * 300,
    },
});

export default ConfettiPiece;

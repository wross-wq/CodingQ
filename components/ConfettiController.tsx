import React from 'react';
import { View, StyleSheet } from 'react-native';
import ConfettiPiece from './ConfettiPiece';

const ConfettiController = ({ visible }: {visible: boolean }) =>
{
    if (!visible) {
        return null;
    }

    return (
        <View style = {StyleSheet.absoluteFillObject}>
            {Array.from({ length: 50 }).map((_, index) => (
                <ConfettiPiece key={index} />
            ))}
        </View>
    );
};

export default ConfettiController;

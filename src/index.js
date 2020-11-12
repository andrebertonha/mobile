import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// View Container pode ser div footer header main aside section, 
// pode representar qualquer um desses containers
// elementos nao possuem estilizacao propria

export default function App() {
    return <View />
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundCOlor: '#7159c1',
    },
});


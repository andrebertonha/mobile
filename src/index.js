import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';

// View Container pode ser div footer header main aside section, 
// pode representar qualquer um desses containers
// elementos nao possuem estilizacao propria

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container}>            
                <Text>Texto from index js</Text>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
});


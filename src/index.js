import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, StatusBar } from 'react-native';

import api from './services/api';

// View Container pode ser div footer header main aside section, 
// pode representar qualquer um desses containers
// elementos nao possuem estilizacao propria



export default function App() {
    
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get('/projects')
            .then(response => {                
                setProjects(response.data);
            });
    }, []);

    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
            <View style={styles.container}>
                {projects.map(project => (
                    <Text style={styles.project} key={project.id}>{project.title}</Text>
                ))}
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
    project: {
        color: '#FFF',
        fontSize: 122,
        fontWeight: 'bold'
    },
});


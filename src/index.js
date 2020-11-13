import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, Text, StyleSheet, StatusBar } from 'react-native';

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
            <SafeAreaView style={styles.container}>
                <FlatList 
                    data={projects}
                    keyExtractor={project => project.id}
                    renderItem={({ item: project }) => (
                        <Text style={styles.project}>{project.title}</Text>
                    )}
                />
            </SafeAreaView>            
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7159c1',
       
    },
    project: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold'
    },
});


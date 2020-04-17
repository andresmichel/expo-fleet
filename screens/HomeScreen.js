import * as React from 'react';
import { TextInput, StyleSheet, Button, View, ScrollView } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                <TextInput style={styles.input} />
                <TextInput style={styles.input} />
                <Button title={'Sign in'} />
            </ScrollView>
        </View>
    );
}

HomeScreen.navigationOptions = {
    header: null,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        paddingTop: 30,
    },
    input: {
        height: 40,
        backgroundColor: '#eee',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

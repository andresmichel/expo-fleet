import React, { useState } from 'react';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Switch, TouchableOpacity, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LinksScreen() {
    const navigation = useNavigation();
    const [onTransit, setOnTransit] = useState(false);
    return (
        <View style={{ flex: 1, paddingTop: 44 }}>
            <View style={styles.header}>
                <View style={styles.switchContainer}>
                    <MaterialIcons name={'location-off'} size={24} color="rgba(0,0,0,0.1)" />
                    <Switch style={styles.switch} value={onTransit} onValueChange={setOnTransit} />
                    <MaterialIcons name={'location-on'} size={24} color="rgba(0,0,0,0.1)" />
                </View>
            </View>
            {
                onTransit &&
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <Task
                        onPress={() => navigation.navigate('Detail')}
                        title={'1000 Market Street'}
                        icon={'arrow-downward'}
                        receipt={'John Lennon'}
                        deliveryWindow={'7:00 PM - 8:00 PM'}
                    />
                    <Task
                        onPress={() => navigation.navigate('Detail')}
                        title={'1000 Market Street'}
                        icon={'arrow-upward'}
                        receipt={'John Lennon'}
                        deliveryWindow={'7:00 PM - 8:00 PM'}
                    />
                    <Task
                        onPress={() => navigation.navigate('Detail')}
                        title={'1000 Market Street'}
                        icon={'arrow-downward'}
                        receipt={'John Lennon'}
                        deliveryWindow={'7:00 PM - 8:00 PM'}
                    />
                </ScrollView>
            }
            {
                !onTransit &&
                <View style={styles.emptyContainer}>
                    <MaterialIcons name={'location-off'} size={120} color="rgba(0,0,0,0.1)" />
                    <Text style={styles.title}>Off Duty</Text>
                    <Text style={styles.text}>
                        Go on duty to report your location and availability, as well as to see a list of  your current
                        assigned tasks. Your location will not be tracked while off duty.
                    </Text>
                </View>
            }
        </View>
    );
}

function Task(props) {
    return (
        <TouchableOpacity onPress={props.onPress}>
            <View style={styles.taskContainer}>
                <View style={styles.taskStatusWrapper}>
                    <View style={styles.taskStatus} />
                </View>
                <View style={styles.taskContent}>
                    <Text style={styles.taskTitle}>{props.title}</Text>
                    <View style={styles.taskLabelContainer}>
                        <MaterialIcons style={{ marginRight: 5 }} name={props.icon} size={18} color="rgba(0,0,0,0.5)" />
                        <Text style={styles.taskLabel}>{props.receipt}</Text>
                        <MaterialIcons style={{ marginLeft: 10, marginRight: 5 }} name={'query-builder'} size={18} color="rgba(0,0,0,0.5)" />
                        <Text style={styles.taskLabel}>{props.deliveryWindow}</Text>
                    </View>
                </View>
                <View style={styles.taskChevronWrapper}>
                    <MaterialIcons name={'navigate-next'} size={24} color="rgba(0,0,0,0.5)" />
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        paddingTop: 15,
    },
    emptyContainer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 100,
    },
    header: {
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    switch: {
        marginHorizontal: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    text: {
        width: 300,
        textAlign: 'center',
        color: 'rgba(0,0,0,0.5)',
    },
    taskContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingVertical: 20,
    },
    taskStatusWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    taskStatus: {
        height: 10,
        width: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    taskContent: {
        flex: 1,
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    taskLabelContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    taskLabel: {
        color: 'rgba(0,0,0,0.5)',
    },
    taskChevronWrapper: {
        paddingHorizontal: 20,
    },
});

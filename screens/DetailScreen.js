import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { Button, View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

export default function DetailScreen() {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.container}>
                <Image
                    style={styles.image}
                    source={{
                        uri: 'https://api.mapbox.com/styles/v1/mapbox/light-v10/static/pin-l+000(-122.0296,37.3323,13.92)/-122.0296,37.3323,12,0,30/600x400@2x?access_token=pk.eyJ1IjoiYW5kcmVzbWljaGVsIiwiYSI6ImNqa3k2NGFsbzBmODYza21tcWo2NjdlcGUifQ.txk49vcGtXSpKyQOnPqiOQ'
                    }}
                />
                <View>
                    <View style={styles.destinationItemContainer}>
                        <MaterialIcons size={24} style={styles.destinationItemIcon} name={'arrow-downward'} />
                        <View>
                            <Text style={styles.destinationItemTitle}>5902 Avenue Macdonald</Text>
                            <Text style={styles.destinationItemTitle}>No apt Number</Text>
                            <Text style={styles.destinationItemLabel}>Hampstead, Quebec H3X 2X1</Text>
                        </View>
                        <View style={{ marginLeft: 'auto', marginRight: 10 }}>
                            <ActionButton icon={'near-me'} onPress={() => null} />
                        </View>
                    </View>
                    <Item
                        title={'Destination notes'}
                        icon={'edit'}
                        text={'Delivery. Leave box on Porch'}
                    />
                    <Separator />
                    <Item
                        title={'Recipient name'}
                        icon={'person'}
                        text={'Marc Jones'}
                        RightComponent={(
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginRight: 10 }}>
                                    <ActionButton icon={'phone'} onPress={() => null} />
                                </View>
                                <ActionButton icon={'message'} onPress={() => null} />
                            </View>
                        )}
                    />
                    <Item
                        title={'Recipient notes'}
                        icon={'edit'}
                        text={'This is a test delivery!'}
                    />
                    <Separator />
                    <Item
                        title={'Destination notes'}
                        icon={'query-builder'}
                        text={'Before 2019-11-08, 12:00 AM'}
                    />
                    <Item
                        title={'Destination notes'}
                        icon={'edit'}
                        text={'Parking on side street'}
                    />
                </View>
                <TouchableOpacity style={styles.button} onLongPress={() => alert('Long pressed!')}>
                    <Text style={styles.buttonLabel}>Hold to start</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

function Item(props) {
    return (
        <View style={styles.itemContainer}>
            <View>
                <View style={styles.itemTitleContainer}>
                    <MaterialIcons size={24} style={styles.itemIcon} name={props.icon} />
                    <Text style={styles.itemTitle}>{props.title}</Text>
                </View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            {Boolean(props.RightComponent) && <View style={styles.itemRightContainer}>{props.RightComponent}</View>}
        </View>
    );
}

function Separator() {
    return <View style={styles.separator} />;
}

function ActionButton(props) {
    return (
        <TouchableOpacity style={styles.actionButtonContainer}>
            <MaterialIcons size={20} style={styles.actionButtonIcon} name={props.icon} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: 250,
    },
    destinationItemContainer: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    destinationItemIcon: {
        paddingHorizontal: 15,
        color: 'rgba(0,0,0,0.3)',
    },
    destinationItemTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    destinationItemLabel: {
        color: 'rgba(0,0,0,0.3)',
    },
    itemContainer: {
        paddingVertical: 10,
        flexDirection: 'row',
    },
    itemRightContainer: {
        marginLeft: 'auto',
        marginRight: 15,
    },
    itemIcon: {
        paddingHorizontal: 15,
        color: 'rgba(0,0,0,0.3)',
    },
    itemTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemTitle: {
        color: 'rgba(0,0,0,0.3)',
    },
    itemText: {
        marginLeft: 54,
    },
    buttonWrapper: {
        marginTop: 20,
    },
    separator: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.05)',
    },
    actionButtonContainer: {
        height: 40,
        width: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionButtonIcon: {
        color: '#000',
    },
    button: {
        marginTop: 15,
        paddingVertical: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderRadius: 10,
        marginHorizontal: 15,
    },
    buttonLabel: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

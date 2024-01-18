import React, {useState} from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar, View, Image, TouchableOpacity, FlatList } from 'react-native';


const App = () => {
    return  (
        <>
            <StatusBar barStyle="default" />
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.headerContainer}>

                </View>
            </SafeAreaView>
        </>
    );
}


const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: '#121a24',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        borderBottomWidth: 1,
    },
    mainContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
})

export default App;
import React from "react";
import { StyleSheet, View, Text, Image } from "react-native"
import { Icons } from "./Icons.jsx";
// https://usbrandcolors.com/spotify-colors/
// https://developer.spotify.com/documentation/design 
// https://www.figma.com/community/file/1139173521942616788

const albumArt = require('../../assets/img/liniker-caju-tour.jpg');

export const HomePlay = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.albumContainer}>
                    <Image source={albumArt}
                        style={styles.albumArt} />
                </View>
                <View style={styles.header}>
                    <Text style={styles.musicTitle}>Caju</Text>
                    <Text style={styles.artistName}>Liniker</Text>
                </View>
                <Icons />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
    },
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginLeft: 20,
        marginBottom: 10,
    },
    musicTitle: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        textTransform: 'uppercase',
        textAlign: 'right',
    },
    artistName: {
        color: "#ccc",
        fontSize: 16,
        textAlign: 'right',
    },
    albumContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    albumArt: {
        flex: 1,
        width: '100%',
        height: '75%',
        resizeMode: 'cover',
        borderRadius: 10,
        marginBottom: 180,
    },
});
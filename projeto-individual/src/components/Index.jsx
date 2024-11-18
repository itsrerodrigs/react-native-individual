import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
// https://usbrandcolors.com/spotify-colors/
// https://developer.spotify.com/documentation/design 
// https://www.figma.com/community/file/1139173521942616788
const albumArt = require('../../assets/img/liniker-caju-tour.jpg');

const connectIcon = require('../../assets/icons/Connect.png');
const nextIcon = require('../../assets/icons/Next.png');
const pauseIcon = require('../../assets/icons/Pause.png');
const previousIcon = require('../../assets/icons/Previous.png');
const queueIcon = require('../../assets/icons/Queue.png');
const repeatIcon = require('../../assets/icons/Repeat.png');
const shuffleIcon = require('../../assets/icons/Shuffle.png');
const shareIcon = require('../../assets/icons/Share.png');



export const HomePlay = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Caju</Text>
                </View>
                <View style={styles.albumContainer}>
                    <Image source={albumArt}
                        style={styles.albumArt} />
                </View>
                <View style={styles.playing}>
                    <Text style={styles.musicTitle}>Caju</Text>
                    <Text style={styles.artistName}>Liniker</Text>
                </View>

                <View style={styles.controlsContainer}>
                    <TouchableOpacity>
                        <Image source={shuffleIcon} style={styles.iconSmall} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={previousIcon} style={styles.iconMedium} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={pauseIcon} style={styles.iconLarge} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={nextIcon} style={styles.iconMedium} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={repeatIcon} style={styles.iconSmall} />
                    </TouchableOpacity>
                </View>

                <View style={styles.progressBarContainer}>
                    <View style={styles.progressBar} />
                </View>

                <View style={styles.secondContainer}>
                    <TouchableOpacity>
                        <Image source={connectIcon} style={styles.iconSmall} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={queueIcon} style={styles.iconSmall} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={shareIcon} style={styles.iconSmall} />
                    </TouchableOpacity>
                </View>

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
        alignItems: 'center',
    },
    headerTitle: {
        textTransform: 'uppercase',
        fontSize: 24,
        color: 'white',
    },
    playing: {
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
        textAlign: 'left',
    },
    artistName: {
        color: "#ccc",
        fontSize: 16,
        textAlign: 'left',
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
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 0.1,
        alignSelf: 'stretch',
        marginTop: 20,
    },
    secondContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 0.08,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginBottom: '5%',
    },
    progressBar: {
        flex: 1,
        backgroundColor: 'white',
        width: '30%',
    },
    iconSmall: {
        aspectRatio: 1,
        height: '60%',
        resizeMode: 'contain',
    },
    iconMedium: {
        aspectRatio: 1,
        height: '70%',
        resizeMode: 'contain',
    },
    iconLarge: {
        aspectRatio: 1,
        height: '90%',
        resizeMode: 'contain',
    },
});
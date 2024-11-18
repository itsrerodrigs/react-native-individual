import { StyleSheet, View, Text, Image, Touchable, TouchableOpacity } from "react-native"
import { Icons } from "./Icons.jsx";
// https://usbrandcolors.com/spotify-colors/
// https://developer.spotify.com/documentation/design 
// https://www.figma.com/community/file/1139173521942616788

const albumArt = require('../../assets/img/liniker-caju-tour.jpg');

export const HomePlay = () => {
    return (
        <>
            <View>
                <View style={styles.albumContainer}>
                    <Image source={albumArt}
                        style={styles.albumArt} />
                </View>

                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.musicTitle}>Caju</Text>
                        <Text style={styles.artistName}>Liniker</Text>
                    </View>
                    <Icons />
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#121212",
        textDecorationColor: "#ccc",
        justifyContent: "space-between",
        alignItems: "center",
        paddinngVertical: 50,
    },
    header: {
        alignItems: "center",
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
        aspectRatio: 1,
        resizeMode: 'cover',
        borderRadius: 10,
    }
})
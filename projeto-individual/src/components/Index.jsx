import { StyleSheet, View, Text, Image, Touchable, TouchableOpacity } from "react-native"
// https://usbrandcolors.com/spotify-colors/
// https://developer.spotify.com/documentation/design 
// https://www.figma.com/community/file/1139173521942616788

const albumArt = require('../../assets/img/liniker-caju-tour.jpg');

export const HomePlay = () => {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.musicTitle}>Caju</Text>
                    <Text style={styles.artistName}>Liniker</Text>
                </View>

                <Image source={albumArt}
                    style={styles.albumArt} />
                <View style={styles.controls}>
                    <TouchableOpacity>

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
    },
    artistName: {
        color: "#ccc",
        fontSize: 16,
    },
    albumArt: {
        width: 300,
        height: 300,
        borderRadius: 60,
    }
})
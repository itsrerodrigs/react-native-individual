import { StyleSheet, View, Text } from "react-native"
// https://usbrandcolors.com/spotify-colors/
export const Home = () => {
    return (
        <>
            <View style={styles.container}>
                <Text>Hello</Text>
                <View />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#1db954",
        textDecorationColor: "#ccc",
        justifyContent: "center",
        alignItems: "center"
    }
})
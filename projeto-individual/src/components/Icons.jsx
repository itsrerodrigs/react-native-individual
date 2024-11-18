import { StyleSheet, TouchableOpacity } from "react-native";

const connectIcon = require('../../assets/icons/Connect.png');
const nextIcon = require('../../assets/icons/Next.png');
const pauseIcon = require('../../assets/icons/Pause.png');
const previousIcon = require('../../assets/icons/Previous.png');
const queueIcon = require('../../assets/icons/Queue.png');
const repeatIcon = require('../../assets/icons/Repeat.png');
const shuffleIcon = require('../../assets/icons/Shuffle.png');
const shareIcon = require('../../assets/icons/Share.png');

export const Icons = () => {
    return (
        <>
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

        </>
    );
};

const styles = StyleSheet.create({
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flex: 0.1,
        alignSelf: 'stretch',
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
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

function Board(props) {
    return (
        <View style={styles.boardContainer}>
            {props.fillBoard()}
        </View>
    )
}

const styles = StyleSheet.create({
    boardContainer: {
        display: "flex",
        margin: "auto",
        width: "100%",
        height: Dimensions.get('window').width,
        backgroundColor: "black",
        flexDirection: "row",
        flexWrap: "wrap",
    }
})


export default Board;
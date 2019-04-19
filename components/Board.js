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
        width: "70%",
        height: Dimensions.get('window').width * 0.7,
        backgroundColor: "black",
        flexDirection: "row",
        flexWrap: "wrap",
    }
})


export default Board;
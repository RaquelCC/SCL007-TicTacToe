import React from 'react';
import { StyleSheet, Text, View, Dimensions, Button, TouchableOpacity } from 'react-native';

function Square(props) {
    return (
        <TouchableOpacity style={{...style.squareContainer, backgroundColor: props.color, width: props.size+"%", height: props.size+"%"}} onPress={() => props.playMove(props.index)}>
            {props.content && 
            <Text style={style.squareText}>{props.content}</Text>}
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    squareContainer: {
        // width: "33.333%",
        // height: "33.333%",
        borderColor: "white",
        borderWidth: 1,
        borderStyle: "solid",
        display: "flex",
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    squareText: {
        fontSize: 40,
        color: "white"
    }
})

export default Square;
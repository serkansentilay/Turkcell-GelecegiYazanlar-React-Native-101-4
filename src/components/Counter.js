import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useCounter } from '../context/CounterContext'

const Counter = () => {
    const { count, setCount } = useCounter()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{count}</Text>
            <Button title="Arttır" onPress={() => setCount(count + 1)} />
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: { fontSize: 30 }
})
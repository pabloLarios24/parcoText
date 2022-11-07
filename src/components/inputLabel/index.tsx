import React, { useRef } from 'react'
import { View, Text, Animated, TouchableOpacity, TextInput, KeyboardTypeOptions } from 'react-native'

import styles from './styles'

interface InputLabelInterface {
    name: string;
    isNotDisable?: boolean;
    keyboardType?: KeyboardTypeOptions,
    value: string;
    onChangeText?: (portion: string) => void;
}

const InputLabel = ({name, isNotDisable, keyboardType, value, onChangeText}: InputLabelInterface) => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>
                {name}
            </Text>
            <TextInput
                keyboardType={keyboardType ? keyboardType : 'default'}
                style={styles.input}
                editable={!isNotDisable}
                value={value}
                onChangeText={(text)=>{
                    onChangeText(text)
                }}
            />
        </View>
    )
}

export default InputLabel;

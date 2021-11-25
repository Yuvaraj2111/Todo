import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import auth from '@react-native-firebase/auth'
const Login = ({ setToggle, navigation }) => {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const onSubmit = async () => {
        if (email === '' || pwd === '') return
        try {
            await auth().signInWithEmailAndPassword(email, pwd).then(e => {
                console.log(e)
                navigation.push('home', e.user)
            })
        } catch (e) {
            alert(e)
        }
    }
    return (
        <View>
            <Text style={{ fontSize: 30, color: "#000" }}>Login</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
            />
            <TextInput
                placeholder="password"
                value={pwd}
                onChangeText={setPwd}
                secureTextEntry
                style={styles.input}
            />
            <Button title="login" onPress={onSubmit} />
            <Text onPress={() => { setToggle(e => !e) }}>Don't have an account? Signup</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        height: 50,
        width: '75%',
        marginTop: 15,
        borderColor: "#222",
        borderWidth: 1,
        borderStyle: 'solid'
    }
})
export default Login;
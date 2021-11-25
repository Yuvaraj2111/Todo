import React, { useState } from 'react'
import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import auth from '@react-native-firebase/auth';
const Signup = ({ navigation, setToggle }) => {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')
    const [cpwd, setCPwd] = useState('')
    const onSubmit = async () => {
        if (pwd !== cpwd) {
            alert("Password and confirm password not same")
            return
        }
        try {
            await auth().createUserWithEmailAndPassword(email, pwd).then(() => {
                alert("User created successfully")
            })
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <SafeAreaView>
            <Text style={{ fontSize: 30, color: "#000" }}>Sign up</Text>
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
            <TextInput
                placeholder="Confirm password"
                value={cpwd}
                onChangeText={setCPwd}
                secureTextEntry
                style={styles.input}
            />
            <Button title="Signup" onPress={onSubmit} />
            <Text onPress={() => setToggle(e => !e)}>Already have an account Login</Text>
        </SafeAreaView>
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
export default Signup;
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
import database from '@react-native-firebase/database'
import firestore from '@react-native-firebase/firestore';

const Home = ({ route }) => {
    const user = route.params
    const db = database().ref(`/user/${user.uid}`)
    const [task, setTask] = useState('')
    const [list, setList] = useState({})
    db.on('value', e => console.log(e))

    // const onHandleCreate = () => {
    //     firestore()
    //         .collection('tasks').doc('tasklist')
    //         .set({
    //             uid: user.uid,
    //             task: task,
    //         })
    //         .then(() => {
    //             console.log('User added!');
    //         });
    // }
    const res = route.params
    return (
        <SafeAreaView>
            <ScrollView style={{ backgroundColor: "#fff" }}>
                <TextInput
                    placeholder="Enter Task"
                    value={task}
                    onChangeText={setTask}
                />
                <Button title="Create" style={{ color: 'red' }} onPress={() => console.log()} />
                {/* <Button title="Delete" /> */}
                <Button title="View" />
                {/* <Button title="Update" /> */}
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;

import React, { useState } from 'react'
import { Button, TextInput, View } from 'react-native';
const Create = () => {
    const [task, setTask] = useState("")
    return (
        <View>
            <TextInput
                placeholder="Enter task"
                value={task}
                onChangeText={setTask} />
            <Button
                title="Create"
                onPress={() => console.log("create")}
            />
        </View>
    )
}
export default Create;
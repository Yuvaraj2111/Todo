import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import Login from './login';
import Signup from './signup';
const Signin = ({ navigation }) => {
    const [toggle, setToggle] = useState(true)
    return (
        <SafeAreaView>
            {
                toggle ?
                    <Login setToggle={setToggle} navigation={navigation} />
                    :
                    <Signup setToggle={setToggle} />
            }

        </SafeAreaView>
    )
}

export default Signin;
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Login/login";



const Stack = createNativeStackNavigator();

const RotasPublicas = ({setSigin}) => {
    console.log(setSigin)
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login" options={{ headerShown: false }}>
            {(props)=>{return <Login {...props} setSigin={setSigin}/>}}
        </Stack.Screen>
    </Stack.Navigator>
  );
};

export default RotasPublicas;

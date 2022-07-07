import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyDrawer from "./Drawer";
import Login from "../screens/Login/login";
import Produto from "../screens/Produto";
import Contatos from "../screens/Contatos";
import Logout from "../screens/Logout";

const Stack = createNativeStackNavigator();

const RotasPrivadas = ({setSigin}) => {

  return (
    <Stack.Navigator >
      <Stack.Screen name="Drawer"  options={{ headerShown: false }} >
        {(props)=> {return <MyDrawer {...props} setSigin={setSigin}/>}}
      </Stack.Screen>
      <Stack.Screen name="Contatos" component={Contatos} />
      <Stack.Screen name="Produto" component={Produto} />
     <Stack.Screen name="Logout" component={Logout} />
    </Stack.Navigator>
  );
};

export default RotasPrivadas;
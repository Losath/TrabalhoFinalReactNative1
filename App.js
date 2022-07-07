import { StatusBar } from 'expo-status-bar';
import AuthProvider, { AuthContext } from './src/context/context';
import RotasPrivadas from './src/Routes/RotasPrivadas'
import { NavigationContainer } from "@react-navigation/native";
import { useContext, useState } from 'react';
import Login from './src/screens/Login/login';
import 'react-native-gesture-handler';
import RotasPublicas from './src/Routes/RotasPublicas';


const App = () => {

  const {user, password} = useContext(AuthContext)
  const [sigin, setSigin]=useState(false)
  console.log(user, password)

  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          {sigin ? <RotasPrivadas setSigin = {setSigin}/> : <RotasPublicas setSigin = {setSigin}/>} 
          
          <StatusBar style="auto" />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
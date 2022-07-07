import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/context/context';
import RotasPrivadas from './src/Routes/RotasPrivadas'
//import Login from './src/screens/Login/login';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import Login from './src/screens/Login/login';

const App = ({loading}) => {
  console.log("loading")
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          {/* <RotasPrivadas/> */}
          {/* {!!loading ? <RotasPrivadas/> : <Login/>} */}
          <RotasPrivadas/>
          <StatusBar style="auto" />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
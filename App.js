import { StatusBar } from 'expo-status-bar';
import AuthProvider from './src/context/context';
import RotasPrivadas from './src/Routes/RotasPrivadas'
//import Login from './src/screens/Login/login';
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          <RotasPrivadas/>
          {/* <Login/> */}
          <StatusBar style="auto" />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
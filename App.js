import { StatusBar } from 'expo-status-bar';
import AuthProvider, { AuthContext } from './src/context/context';
import RotasPrivadas from './src/Routes/RotasPrivadas'
import { NavigationContainer } from "@react-navigation/native";
import 'react-native-gesture-handler';


const App = () => {

  // console.log(user, password)
  // const {user, password} = useContext(AuthContext)

  return (
    <>
      <NavigationContainer>
        <AuthProvider>
          {/* {!!user ? <RotasPrivadas/> : <Login/>}  */}
           <RotasPrivadas/> 
          <StatusBar style="auto" />
        </AuthProvider>
      </NavigationContainer>
    </>
  );
};

export default App;
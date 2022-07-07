// import React from "react";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Produto from "../screens/Produto";
// import ProdutoDetalhes from "../screens/ProdutoDetalhes";


// const Stack = createNativeStackNavigator();

// const RotasPrivadas = () => {
//   return (
//     <Stack.Navigator>
//       {/* <Stack.Screen
//         name="Produto"
//         component={Produto}
//        //options={{ headerShown: false }}
//       /> */}
//       <Stack.Screen
//         name="ProdutoDetalhes"
//         component={ProdutoDetalhes}
//        //options={{ headerShown: false }}
//       />
//       <Stack.Screen
//         name="Contatos"
//         component={Contatos}
//        //options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default RotasPrivadas;

import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyDrawer from "./Drawer";
import Login from "../screens/Login/login";
import Produto from "../screens/Produto";
import Contatos from "../screens/Contatos";

const Stack = createNativeStackNavigator();

const RotasPrivadas = () => {

  return (
    <Stack.Navigator >
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Drawer" component={MyDrawer} options={{ headerShown: false }} />
      <Stack.Screen name="Contatos" component={Contatos} />
      <Stack.Screen name="Produto" component={Produto} />
    </Stack.Navigator>
  );
};

export default RotasPrivadas;
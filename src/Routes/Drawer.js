// import { createDrawerNavigator } from "@react-navigation/drawer";
// //import contato
// //no Stack Nav. posso por o name com o nome real. mas no drawer é bom por diferente ex: HomeDrawer
// const Drawer = createDrawerNavigator();

// const MyDrawer = () => {
//     return (
//         <Drawer.Navigator>
//             {/* chamar as rotas/paginas que quero aqui */}
//             <Drawer.Screen name="RotaPrivada" component={RotasPrivadas} />
//             {!!user ? <RotasPrivadas /> : <RotasPublicas />} por contatos dentro das privadas também (além de publicas)
//         </Drawer.Navigator>
//     );
// };

// export default MyDrawer;

import { createDrawerNavigator } from "@react-navigation/drawer";
import Contatos from "../screens/Contatos";
import Produto from "../screens/Produto";
import React from "react";
// import Logout from "../screens/Logout";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    return (
        
        <Drawer.Navigator 
        useLegacyImplementation
        screenOptions={{
          drawerActiveBackgroundColor: 'white',
          drawerInactiveBackgroundColor:'rgba(255,255,255,0.5)',
          
          drawerLabelStyle: {color:'black', fontSize:20, marginLeft:60},
          drawerStyle: {
            color:'red',
            backgroundColor: ' rgba(64, 0, 80, 0.8)',
            width: 240,
          },
        }}
      >
               
           
            <Drawer.Screen   name="Produto"  component={Produto}  />
            <Drawer.Screen name="Contatos" component={Contatos} />
            {/* <Drawer.Screen name="Logout" component={Logout} /> */}
        </Drawer.Navigator>
        
    );
};

export default MyDrawer;



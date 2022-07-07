import { useNavigation } from "@react-navigation/native";
import { Text, View} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { styles } from "./style";

const Logout = () => {
    const navigation = useNavigation();

    const sair = () => {
        navigation.reset({
            index: 0, 
            routes: [{name: "Login"}]
        })
    }

    return (
        <View style={styles.view}>
             <TouchableOpacity style={styles.button} onPress={() => sair()}>
                <Text style={styles.titulo}>Logout</Text>
             </TouchableOpacity>
        </View>
    );

}

export default Logout;
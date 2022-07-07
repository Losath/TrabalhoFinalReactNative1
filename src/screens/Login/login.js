import React, { useContext, useState } from "react";
import styles, {
    KeyBoardView,
    Container,
    TextInput,
    Button
} from "./styles";
import { Text, Image, ActivityIndicator } from "react-native";
import logo from '../../../assets/Logo.png'
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/context";




function Login({setSigin}) {
    // const user = "Aluno"
    // const password = "123"

    const navigation = useNavigation()
    const { user, password } = useContext(AuthContext)
    const [loading, setLoading] = useState(false)
    const [usuario, setUsuario] = useState("")
    const [senha, setSenha] = useState("")

    console.log(setSigin)
    const logar = () => {
        
        setLoading(true)
        if (usuario === user && senha === password) {
            setSigin(true)
            // navigation.navigate("Drawer");
        } else {
            setLoading(false)
            alert("Login ou senha inválidos! Tente novamente!")
        }
    };

    return (
        <KeyBoardView >
            {/* <Header/> */}
            <Container >
                <Image source={logo} />
                <TextInput

                    placeholderTextColor="rgba(168, 165, 165, 0.62)"
                    placeholder="Login"
                    onChangeText={text => setUsuario(text)}
                />

                <TextInput

                    placeholderTextColor="rgba(168, 165, 165, 0.62)"
                    placeholder="Senha"
                    onChangeText={text => setSenha(text)}
                    secureTextEntry
                />
                {!loading ?
                    <Button onPress={() => logar()} >
                        <Text style={styles.btn}>Login</Text>
                    </Button>
                    : <ActivityIndicator size="large" color="rgba(64, 0, 80, 0.80)"/>
                }

            </Container>
        </KeyBoardView>
    )
}


export default Login;
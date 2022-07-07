import { useNavigation } from "@react-navigation/native";

const Logout = ({loading}) => {
    const navigation = useNavigation();

    // useEffect(() => {
    //     navigation.navigate("Login")

    // }, []);

    const sair = () => {
        setLoading(false)
    }

    return (
        <>
            {sair}
        </>
    );

}

export default Logout;
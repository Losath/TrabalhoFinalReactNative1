import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const Logout = ({setSigin}) => {
   
    useEffect (()=> {
        setSigin(false)
    },[])

    return (
        <></>
    );

}

export default Logout;
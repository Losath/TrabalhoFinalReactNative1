import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      
      alignItems: 'center',
      padding:20 ,
      
  
    },
    titulo:{
        fontSize:50,
        marginBottom: 10        
    },
    card: {
      backgroundColor: 'rgb(90, 30, 90)',
      borderColor: 'rgba(255, 255, 255, 0.60)',
      borderBottomWidth:5,
      borderRightWidth:5,
      width: 220,
      height: 70,
      justifyContent: 'space-evenly',     
      marginBottom:20,
      marginTop:5,
      borderRadius:8
  
    },
    baseText: {
      color: 'white',
      fontSize: 25,
      alignSelf: 'center'
  
    },
    icon: {
      display: "flex",
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: '2%',
      
    },
    img:{
      width:150,
      height:150,
      borderRadius:8
      
    },
    bk: {
      flex: 1,
      flexDirection: "column"
    },
    imageBackground: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
      alignItems: "center"
    },
    imageForeground: {
      width: 250,
      height: 250
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center"
    }
  });
   


import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
     
      backgroundColor: '#fff',
      alignItems: 'center',
      padding:20 ,
      
  
    },
    titulo:{
        fontSize:50,
        marginBottom: 10        
    },
    card: {
      backgroundColor: 'rgba(64, 0, 80, 0.7)',
      borderColor: 'rgba(1, 10, 1, 0.40)',
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
      
    }
    })  ;


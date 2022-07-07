import React from "react";
import { StatusBar, Text, View, Image, Linking, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './style'
import marcelo from '../../../assets/marcelo.jpg'
import thatto from '../../../assets/thatto.jpg'
import matheus from '../../../assets/matheus.jpg'
import douglas from '../../../assets/douglas.jpg'
import rayssa from '../../../assets/rayssa.jpg'
import rodrigo from '../../../assets/rodrigo.jpg'
import duda from '../../../assets/duda.jpg'

const Contatos = () => {

  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Image style={styles.img} source={douglas} />
      <View style={styles.card}>
        <Text style={styles.baseText}>Douglas Moreira</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://www.facebook.com/douglas.moreira.1426/') }} />
          <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://www.instagram.com/d18mpereira/') }} />
          <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/douglas-moreira-817726104/') }} />
          <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/douglasmpereira') }} />
        </View>
      </View>


      <Image style={styles.img} source={marcelo} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Marcelo Pessanha</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://facebook.com') }} />
          <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://instagram.com/mar.breder?igshid=YmMyMTA2M2Y=') }} />
          <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/marcelo-luiz-de-pessanha-85421b188/') }} />
          <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/Losath') }} />
        </View>

      </View>

      <Image style={styles.img} source={duda} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Maria Eduarda</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://facebook.com') }} />
          <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://instagram.com') }} />
          <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://linkedin.com') }} />
          <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com') }} />
        </View>

      </View>

      <Image style={styles.img} source={matheus} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Matheus Valle</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://facebook.com') }} />
          <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://instagram.com') }} />
          <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/matheus-valle-272612128/') }} />
          <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/trikmatt') }} />
        </View>

      </View>

      <Image style={styles.img} source={rayssa} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Rayssa Medeiros</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://www.facebook.com/rayssa.medeiros.921677') }} />
          <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://instagram.com/ray_mdrs?igshid=YmMyMTA2M2Y=') }} />
          <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/rayssa-medeiros-a443ba210') }} />
          <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/rayssamt') }} />
        </View>

      </View>

      <Image style={styles.img} source={rodrigo} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Rodrigo Ramos</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://www.facebook.com/rodrigo.ramos.37051') }} />
          <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://www.instagram.com/rodrigomramos/') }} />
          <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/rodrigo-ramos-048383b4/') }} />
          <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/rodrigomramos21') }} />
        </View>

      </View>



      <Image style={styles.img} source={thatto} />

      <View style={styles.card}>

        <Text style={styles.baseText}>Thatto Filgueiras</Text>
        <View style={styles.icon}>
          <Icon name="facebook" size={30} color="white" onPress={() => { Linking.openURL('https://www.facebook.com/thatobjj.filgueiras') }} />
          <Icon name="instagram" size={30} color="white" onPress={() => { Linking.openURL('https://www.instagram.com/thattosalvini/') }} />
          <Icon name="linkedin" size={30} color="white" onPress={() => { Linking.openURL('https://www.linkedin.com/in/thácito-filgueiras-thatto-51b422190/') }} />
          <Icon name="github" size={30} color="white" onPress={() => { Linking.openURL('https://github.com/ThattoDev') }} />
        </View>

      </View>

      <StatusBar style="auto" />

    </ScrollView>
  );
}

export default Contatos;

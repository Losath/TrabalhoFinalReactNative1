import React, { useState } from "react";
import { Alert, StyleSheet, Text, Pressable, View, TextInput, ScrollView} from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import CaixaInput from "./caixaInput";
import CaixaInput2 from "./caxinhaInput2";


import Modal from "react-native-modal";

const ModalList = ({toggleModal, isModalVisible, nome,
  setNome,
  custo,
  setCusto,
  preco,
  setPreco,
  descricao,
  setDescricao,
  quantidade,
  setQuantidade,
  categoria,
  setCategoria,
  adicionarProduto,
  editando,
  edit,
  cancelar,
  salvar,})=> {

    const adicionar =()=>{
      adicionarProduto()
      toggleModal()
    }

    return (

      <View style={{ flex: 1 }}>
        <Modal style={styles.modalView} isVisible={isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text style={{fontSize: 30, marginBottom: 15,textAlign: "center"}}>Detalhes do Item:</Text>
                <View style={{ flex: 1 }}>
                      <View >
                      <View>
                                  <Text style = {styles2.titulo}>{"Nome"}</Text>
                                  <TextInput style={styles2.input} placeholder={"Iphone XR"}  value={nome} onChangeText={text => setNome(text)} />
                      </View>
                      <View>
                                  <Text style = {styles2.titulo}>{"Descrição"}</Text>
                                  <TextInput style={styles2.input} placeholder={"Smartphone Apple"}  value={descricao} onChangeText={text => setDescricao(text)} />
                      </View>
                      </View>
                      <View style={{flexDirection:"row"}}>
                          <View>
                                <Text style = {styles3.titulo}>{"Custo"}</Text>
                                <TextInput style={styles3.input} placeholder={"R$ 7.000"}  value={custo} onChangeText={text => setCusto(text)} />
                          </View>
                          {/* <View>
                                <Text style = {styles3.titulo}>{"Categoria"}</Text>
                                <TextInput style={styles3.input} placeholder={"Smartphones"}  value={categoria} onChangeText={text => setCategoria(text)} />
                          </View> */}
                      </View>
                      <View style={{flexDirection:"row"}}>
                          <View>
                                <Text style = {styles3.titulo}>{"Preço Unit"}</Text>
                                <TextInput style={styles3.input} placeholder={"R$ 7.000"}  value={preco} onChangeText={text => setPreco(text)} />
                          </View>
                          <View>
                                <Text style = {styles3.titulo}>{"Quantidade"}</Text>
                                <TextInput style={styles3.input} placeholder={"5"}  value={quantidade} onChangeText={text => setQuantidade(text)} />
                          </View>
                      </View>
                </View>
           <View style={{  flexDirection: "row", justifyContent: "flex-end"}}>
              <TouchableOpacity onPress={adicionar} style={[styles.botoes, {backgroundColor: "green"}]}>
                <Text>Salvar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleModal} style={[styles.botoes, {backgroundColor: "red"}]}>
                <Text>Cancelar</Text>
              </TouchableOpacity>
              </View>
          </View>
        </Modal>
    </View>
  )
}
    
    const styles = StyleSheet.create({
      centeredView: {
        marginTop: 200,
        justifyContent: 'center',
        alignItems: "center",
      },
      modalView: {
        margin: 10,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
      botoes: {
        justifyContent: "center",
        alignItems:"center",
        width: 80,
        height: 40,
        margin: 12,
        borderRadius: 10

      }
    });
    const styles2 = StyleSheet.create({
      input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          width: 340
        },
        titulo: {
          fontSize: 20,
          marginStart: 12,
          marginBottom: -10,
          
        }
      });
      const styles3 = StyleSheet.create({
        input: {
            height: 40,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            width: 160
          },
          titulo: {
            fontSize: 20,
            marginStart: 12,
            marginBottom: -10,
            
          }
        });

    export default ModalList;
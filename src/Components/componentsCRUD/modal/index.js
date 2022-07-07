import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native";
import { Button } from "react-native";
import CaixaInput from "./caixaInput";
import CaixaInput2 from "./caxinhaInput2";

import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "react-native-vector-icons/AntDesign";

import Modal from "react-native-modal";

const ModalList = ({
  editarProduto,
  toggleModal,
  isModalVisible,
  nome,
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
  salvar,
}) => {
  const adicionar = () => {
    adicionarProduto();
    toggleModal();
  };
  const salvarEdicao = ()=>{
    salvar();
    toggleModal();
  };
  const cancelaInput = ()=>{
    cancelar();
    toggleModal();
  }

  const handleCategoria = () => {
    switch (produto.categoria.idCategoria) {
      case 1:
        return <>Smartphones</>;
      case 2:
        return <>Tablets</>;
      case 3:
        return <>Monitores</>;
      case 4:
        return <>Mouses</>;
      case 5:
        return <>Teclados</>;
      default:
        return "Sem Categoria";
    }
  };

  const data = [
    { label: "Smartphones", value: "1" },
    { label: "Tablets", value: "2" },
    { label: "Monitores", value: "3" },
    { label: "Mouses", value: "4" },
    { label: "Teclados", value: "5" },
  ];

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <Modal style={styles.modalView} isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, marginBottom: 15, textAlign: "center" }}>
            Detalhes do Item:
          </Text>
          <View style={{ flex: 1 }}>
            <View>
              <View>
                <Text style={styles2.titulo}>{"Nome"}</Text>
                <TextInput
                  style={styles2.input}
                  placeholder={"Iphone XR"}
                  value={nome}
                  onChangeText={(text) => setNome(text)}
                />
              </View>
              <View>
                <Text style={styles2.titulo}>{"Descrição"}</Text>
                <TextInput
                  style={styles2.input}
                  placeholder={"Smartphone Apple"}
                  value={descricao}
                  onChangeText={(text) => setDescricao(text)}
                />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles3.titulo}>{"Custo"}</Text>
                <TextInput
                  style={styles3.input}
                  placeholder={"R$ 7.000"}
                  keyboardType="numeric"
                  value={custo}
                  onChangeText={(text) => setCusto(text)}
                />
              </View>
              <View>
                <View style={styles4.container}>
                  <Dropdown
                    style={[
                      styles4.dropdown,
                      isFocus && { borderColor: "blue" },
                    ]}
                    placeholderStyle={styles4.placeholderStyle}
                    selectedTextStyle={styles4.selectedTextStyle}
                    inputSearchStyle={styles4.inputSearchStyle}
                    iconStyle={styles4.iconStyle}
                    data={data}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? "Categoria" : "..."}
                    searchPlaceholder="Search..."
                    value={categoria.idCategoria}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={(item) => {
                      setCategoria({ idCategoria: item.value });
                      setIsFocus(false);
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <View>
                <Text style={styles3.titulo}>{"Preço Unit"}</Text>
                <TextInput
                  style={styles3.input}
                  placeholder={"R$ 7.000"}
                  keyboardType="numeric"
                  value={preco}
                  onChangeText={(text) => setPreco(text)}
                />
              </View>
              <View>
                <Text style={styles3.titulo}>{"Quantidade"}</Text>
                <TextInput
                  style={styles3.input}
                  placeholder={"5"}
                  keyboardType="numeric"
                  value={quantidade}
                  onChangeText={(text) => setQuantidade(text)}
                />
              </View>
            </View>
          </View>
          
      {editando.edit ? (
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity
              onPress={salvarEdicao}
              style={[styles.botoes, { backgroundColor: "green" }]}
            >
              <Text style={{color: "white"}} >Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelaInput}
              style={[styles.botoes, { backgroundColor: "red" }]}
            >
              <Text style={{color: "white"}} >Cancelar</Text>
            </TouchableOpacity>
            </View>
      ):(
            <View
              style={{ flexDirection: "row", justifyContent: "flex-end" }}
            >
            <TouchableOpacity
              onPress={adicionar}
              style={[styles.botoes, { backgroundColor: "rgba(64, 0, 80, 0.71)" }]}
            >
              <Text style={{color: "white"}}>Adicionar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={cancelaInput}
              style={[styles.botoes, { backgroundColor: "red" }]}
            >
              <Text style={{color: "white"}} >Cancelar</Text>
            </TouchableOpacity>
          </View>
          )}
        </View>
      </Modal>
    </View>
  );
};
export default ModalList;

const styles = StyleSheet.create({
  centeredView: {
    marginTop: 200,
    justifyContent: "center",
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
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  botoes: {
    justifyContent: "center",
    alignItems: "center",
    width: 80,
    height: 40,
    margin: 12,
    borderRadius: 10,
  },
});
const styles2 = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 340,
  },
  titulo: {
    fontSize: 20,
    marginStart: 12,
    marginBottom: -10,
  },
});
const styles3 = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 160,
  },
  titulo: {
    fontSize: 20,
    marginStart: 12,
    marginBottom: -10,
  },
});
const styles4 = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 45,
    width: 152,
    marginTop: 10,
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

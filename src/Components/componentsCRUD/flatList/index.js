import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import { getProdutos } from '../../../service/axios'
import ModalList from '../modal'


const ListaProdutos = ({navigation, produtos, setProdutos, editarProduto, excluirProduto,
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
    salvar,}) => {
    const [loading, setLoading] = useState(true);
    const [isModalVisible, setModalVisible] = useState(false);
    const [contador, setContador] = useState([0])

    const toggleModal = () => {
    setModalVisible(!isModalVisible)
    
    }
    const excluir = (id) =>{
        excluirProduto(id)
        setContador(contador+1)
    }
    const editar =(prod)=>{
        editarProduto(prod)
        toggleModal()
    }


    useEffect(() => {
        const get = async () => {
            setLoading(true);
            const produto = await getProdutos();
            setProdutos(produto);
            setLoading(false);
        }
        get()
    }, [contador])

    return(
        <View style={styles.container}>
            <TouchableOpacity style={[styles.botoes, {marginBottom: 20, borderRadius: 8,borderColor: "rgba(1, 10, 1, 0.40)",
        borderBottomWidth:3,
        borderRightWidth:3, width:40, height:40, backgroundColor: "rgba(64, 0, 80, 0.71)"}]}  onPress={toggleModal} >
                        <Text style={{color: "white"}}>+</Text>
            </TouchableOpacity> 
            <FlatList
            //numColumns={2}
            keyExtractor={(item) => item.id}
            data={produtos}
            renderItem= {({ item }) => (
                <View style={styles.box}>
                    <View  style={styles.product}>
                        <Text style={{fontWeight: "bold", fontSize: 16}}>Produto : {item.nomeProduto}</Text>
                        <Text>Cod. Prod. : {item.idProduto}</Text>
                        <Text>Preço : {item.precoUnitario}</Text>
                        <Text>Quantidade: {item.quantidadeEstoque}</Text>
                    </View>
                    <View>
                     <TouchableOpacity style={[styles.botoes, {marginBottom: 10, backgroundColor: "rgba(64, 0, 80, 0.80)"}]}
                       onPress={()=> {editar(item)}}  >
                        <Text style={{color: "white"}}>Editar</Text>
                    </TouchableOpacity> 
                    <TouchableOpacity style={styles.botoes}  onPress={()=> {excluir(item.idProduto)}} >
                        <Text style={{color: "white"}}>Excluir</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            )}
            />

            <ModalList toggleModal={toggleModal} isModalVisible={isModalVisible} editarProduto={editarProduto} adicionarProduto={adicionarProduto} salvar={salvar} cancelar={cancelar} nome={nome} setNome={setNome} custo={custo} setCusto={setCusto}
    preco={preco} setPreco={setPreco} descricao={descricao} setDescricao={setDescricao}
    quantidade={quantidade} setQuantidade={setQuantidade} categoria={categoria} setCategoria={setCategoria} editando={editando}/>
        </View>
    )
}

export default ListaProdutos;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 40,
        paddingHorizontal: 20
    },
    product: {
        width: "80%",
        height: 90,
        padding: 20,
        justifyContent: "center"  
        
    },
    botoes : {
        backgroundColor: " rgba(255, 0, 0, 0.59)",
        width: 60,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 5,
        

    },
    box: {
        flex: 1,
        flexDirection: "row",
        marginBottom: 15,
        backgroundColor: "rgba(64, 0, 80, 0.2)",
        borderColor: "rgba(1, 10, 1, 0.40)",
        borderBottomWidth:5,
        borderRightWidth:5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    }

})
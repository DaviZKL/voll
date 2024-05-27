import { VStack, Image, Text, Box, Link, useToast } from 'native-base';
import { useEffect, useState } from 'react';

import { Logo } from './assets/Logo.png';
import { TouchableOpacity } from 'react-native';
import { Botao } from './componentes/Botao';
import { EntradaTexto } from './componentes/EntradaTexto';
import { Titulo } from './componentes/titulo';
import { fazerLogin } from './servicos/AutenticacaoServico';
import { jwtDecode } from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login( {navigation} : any) {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [carregando, setCarregando] = useState(true)
    const toast = useToast()

    useEffect(() => {
        AsyncStorage.removeItem('token')
        async function verificarLogin() {
            const token = await AsyncStorage.getItem('token')
            if(token){
                navigation.replace('Tabs')
            }
            setCarregando(false)
        }
        verificarLogin()
    },[])

    async function login(){
        const resultado = await fazerLogin(email,senha)
        if(resultado){
            const {token} = resultado;
            AsyncStorage.setItem('token', token)
            const tokenDecode = jwtDecode(token) as any
            const paciente = tokenDecode.id
            AsyncStorage.setItem('paciente', paciente)
            navigation.replace('Tabs')
            toast.show({
                title: "Login efetuado com sucesso",
                backgroundColor: "green.500"
            })
        }else{
            toast.show({
                title: "erro no login",
                description: "O email ou senha não confere",
                backgroundColor: "red.500"
            })
        }
    }

    if (carregando){ 
        return null
    }
    return (
        <VStack flex={1} alignItems='center' justifyContent="center" p={5}>
            <Image source={Logo} alt='Login'></Image>
            <Titulo>
                Faça Login em sua conta
            </Titulo>
            <Box>
                <EntradaTexto 
                    placeholder='Insira seu email' 
                    label='Email' 
                    value={email} 
                    onChangeText={setEmail}>
                </EntradaTexto>
                <EntradaTexto 
                    placeholder='Insira sua senha' 
                    label='Senha' 
                    secureTextEntry={true} 
                    value={senha} 
                    onChangeText={setSenha}>
                </EntradaTexto>
            </Box>
            <Botao onPress={login}>
                Entrar
            </Botao>
            <Link href='https://google.com.br' mt={2}>Esqueceu sua senha?</Link>
            <Box w={'100%'} flexDirection={'row'} justifyContent={'center'} mt={2}>
                <Text>Ainda não tem cadastro?</Text>
                <TouchableOpacity onPress={()=> navigation.navigate('Cadastro')}>
                    <Text color={'blue.500'}>Faça seu cadastro</Text>
                </TouchableOpacity>
            </Box>
        </VStack>
    );
}
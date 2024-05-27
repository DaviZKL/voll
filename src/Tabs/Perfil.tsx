import { VStack, Text, ScrollView, Avatar, Divider } from "native-base";
import { Titulo } from "../componentes/titulo";

export default function Perfil(){
    return(
        <ScrollView>
            <VStack flex={1} alignItems='center' justifyContent="center" p={5}>
                <Titulo color="blue.500">Meu Perfil</Titulo>
                <Avatar
                size="xl" 
                source={{uri: "https://avatars.githubusercontent.com/u/143119868?v=4"
                }}/>
                
                <Titulo color="blue.500">Informações Pessoais</Titulo>
                <Titulo fontSize="lg">Davi</Titulo>
                <Titulo fontSize="lg">2006/09/16</Titulo>
                <Titulo fontSize="lg">Votuporanga / SP</Titulo>

                <Divider mt="5"/>
                
                <Titulo color="blue.500">Histórico médico</Titulo>
                <Text fontSize="md">Sopro no miocardio</Text>
                <Text fontSize="md">Boderline</Text>
            </VStack>
        </ScrollView>    
    )
}
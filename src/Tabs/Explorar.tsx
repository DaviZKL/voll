import { VStack, Text, Box, ScrollView } from "native-base";

import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";
import { Titulo } from "../componentes/titulo";
import { CardConsulta } from "../componentes/CardConsulta";


export default function Explorar(){

    return(
        <ScrollView flex={1} bgColor="whiteGray">
            <VStack flex={1} alignItems='flex-start' justifyContent="flex-start"  p={5} shadow={1}  m={5} borderRadius={10}>
                <EntradaTexto 
                placeholder="Digite a especialidade"></EntradaTexto>
                <EntradaTexto 
                placeholder="Digite a sua localização"></EntradaTexto>
                <Botao
                mt={3}
                mb={3}
                >Buscar</Botao>
            </VStack>
            <Titulo mb={5} color="blue.500" alignSelf="center">Resultado da Busca</Titulo>
            {[1, 2, 3].map((_, index) =>(
            <VStack flex={1} alignItems='center' justifyContent="center" p={5} key={index}>
                <CardConsulta
                nome="ALice"
                especialidade="proctologista"
                foto="https://avatars.githubusercontent.com/u/143119868?v=4"
                />
            </VStack>
            ))}
        </ScrollView>
    )
}
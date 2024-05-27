import { VStack, Text } from "native-base";
import { CardConsulta } from "../componentes/CardConsulta";
import { Titulo } from "../componentes/titulo";

export default function Consultas(){
    return(
        <VStack p={5}>
            <Titulo color="blue.500">Consultas</Titulo>
            <CardConsulta 
            nome="Profissional Davi" 
            especialidade="Cardiologista" 
            data="2024/06/20" 
            foto="https://avatars.githubusercontent.com/u/143119868?v=4"
            Atendido
            Agendado
            />
        </VStack>
    )
}
import { VStack, Text, Avatar } from "native-base";
import { Botao } from "./Botao";

interface CardProps {
    nome: string;
    foto: string;
    especialidade: string;
    data?: string;
    Atendido?: boolean;
    Agendado?: boolean;
}

export function CardConsulta({
    nome,foto,especialidade,data,Atendido,Agendado
}:CardProps
) {
    return (
        <VStack w="100%" bg={Atendido ? 'blue.100' : 'white'} borderRadius="10" p="5" shadow="2">
            <VStack flexDir="row">
                <Avatar
                    size="xl"
                    source={{
                        uri: foto
                    }} />
                <VStack pl="4" mt="3">
                    <Text fontSize="md">{nome}</Text>
                    <Text fontSize="md">{especialidade}</Text>
                    <Text fontSize="md">{data}</Text>
                </VStack>
            </VStack>
            <Botao mt="1">
                {Agendado ? "Cancelar" : "Agendar Consulta"}
            </Botao>
        </VStack>
    )
}
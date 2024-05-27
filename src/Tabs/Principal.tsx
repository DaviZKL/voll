import { VStack, Text, Image, ScrollView, Divider } from "native-base";

import { Titulo } from "../componentes/titulo";
import Logo from '../assets/Logo.png';
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Botao } from "../componentes/Botao";


export default function Principal() {
    return (
        <ScrollView>
            <Image source={Logo} alt='Login'></Image>
            <Titulo color="blue.500">Boas-vindas!</Titulo>
            <VStack alignItems='center' justifyContent="center" p={5} shadow={2} borderRadius={10}>
                <EntradaTexto
                    placeholder="Digite a especialidade"></EntradaTexto>
                <EntradaTexto
                    placeholder="Digite a sua localização"></EntradaTexto>
                <Botao
                    mt={3}
                    mb={3}
                >Buscar</Botao>
            </VStack>
            <Titulo mb={5} alignSelf="center" color="blue.800">Depoimentos</Titulo>
            {[1, 2, 3].map((_, index) => (
                <VStack flex={1} alignItems='center' justifyContent="center" p={5} key={index} mb={5}>
                    <Text mb={5}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque aliquet velit eget orci malesuada interdum vel non metus.
                        Pellentesque blandit cursus cursus. Aenean sed augue a diam pulvinar volutpat.
                        Suspendisse potenti. Etiam lobortis et nunc laoreet commodo.
                        Aliquam sit amet metus purus. Pellentesque efficitur aliquet erat, id sollicitudin diam elementum sit amet.
                        Fusce tellus metus, hendrerit eu ullamcorper rutrum, finibus et metus.
                        Praesent blandit, odio et ornare ullamcorper, est orci scelerisque arcu, id pharetra risus mi vitae enim. 
                        Quisque in eros vitae risus ultrices tincidunt. Pellentesque eu suscipit neque. 
                        Quisque ligula elit, molestie quis laoreet et, cursus a est. Suspendisse potenti. 
                        Morbi quis velit odio. Suspendisse urna lorem, varius eu lorem congue, suscipit venenatis lacus. 
                        Nulla ornare, libero a accumsan finibus, augue magna scelerisque tellus, sed tincidunt nunc justo vestibulum orci.
                    </Text>
                    <Text mb={5}>
                        Yan, 69 anos, Xique-Xique/BA
                    </Text>
                    <Divider/>
                </VStack>
            ))}
        </ScrollView>
    )
}
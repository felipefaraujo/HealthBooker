import { VStack, Box, ScrollView, Text, Divider } from "native-base";
import { Botao } from "../componentes/Botao";
import { EntradaTexto } from "../componentes/EntradaTexto";
import { Titulo } from "../componentes/Titulo";
import { dashboard } from "../utils/dashboard";

export default function Principal(){

  return (
    <ScrollView flex={1} bgColor="white">
      <VStack flex={1} p={5}>
        <Titulo color="green.800" justifyContent="center">Dashboard</Titulo>

        <Box w="100%" borderRadius="lg" p={3} mt={10} shadow="1" borderRightRadius="md">
          <EntradaTexto
            placeholder="Digite a especialidade do exame solicitado"
          />
          <Botao mt={3} mb={3}>
            Buscar
          </Botao>
        </Box>

        <Titulo color="green.800" alignSelf="center">Depoimentos</Titulo>
        <VStack space={3} divider={<Divider />} w="100%">
          {
            dashboard.map(dashboard => (
              <Box key={dashboard.id} w="100%" borderRadius="lg" p={3}>
                <Text color="gray.300" fontSize="md" textAlign="justify">
                  {dashboard.text}
                </Text>
                <Text color="gray.500" fontSize="lg" fontWeight="bold" alignSelf="center" mt="2">{dashboard.titulo}</Text>
              </Box>
            ))
          }
        </VStack>
      </VStack>
    </ScrollView>
  );
}
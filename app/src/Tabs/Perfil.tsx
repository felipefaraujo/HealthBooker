import { VStack, Text, ScrollView, Avatar, Divider } from 'native-base';
import { Titulo } from '@/app/src/componentes/Titulo';

export default function Perfil(){
  return(
    <ScrollView flex={1}>
      <VStack flex={1} alignItems="center" p={5}>
        <Titulo color="green.800">Meu Perfil</Titulo>

        <Avatar size="xl" source={{uri: "https://avatars.githubusercontent.com/u/128504045"}} mt={5}></Avatar>

        <Titulo color="green.800">Informações Pessoais</Titulo>
        <Titulo fontSize="lg" mb={1}>Felipe de Freitas Araújo</Titulo>
        <Text>08/12/1998</Text>
        <Text>Sorocaba</Text>

        <Divider mt={5} />

        <Titulo color="green.800" mb={1}>Histórico Médico</Titulo>
        <Text>Alergia a dipirona</Text>
        <Text>Alergia a camarão</Text>
      </VStack>
    </ScrollView>
  )
}
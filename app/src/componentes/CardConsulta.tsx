import { ImageSourcePropType } from 'react-native';
import { Text, Avatar, VStack } from 'native-base';
import { Botao } from './Botao';
import Profile from '../assets/Profile.png';

interface CardProps {
  nome: string;
  foto: ImageSourcePropType;
  especialidade: string;
  data?: string;
  foiAtendido?: boolean;
  foiAgendado?: boolean;
}

export function CardConsulta({
  nome,
  foto, 
  data,
  especialidade,
  foiAgendado,
  foiAtendido
}: CardProps){
  return(
    <VStack w="100%" bg={foiAtendido ? 'blue.100': 'white'} p="5" borderRadius="lg" shadow="2" mb={5}>
      <VStack flexDir="row">
        <Avatar size="lg" source={foto} />
        <VStack pl="4">
          <Text fontSize="md" bold>{nome}</Text>
          <Text>{especialidade}</Text>
          <Text>{data}</Text>
        </VStack>
      </VStack>
      <Botao mt={4}>
        {foiAgendado ? 'Cancelar' : 'Agendar consulta'}
      </Botao>
    </VStack>
  )
}
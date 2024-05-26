import { VStack, Divider, ScrollView } from 'native-base';
import { Botao } from '../componentes/Botao';
import { CardConsulta } from '../componentes/CardConsulta';
import { Titulo } from '../componentes/Titulo';
import Profile from '../assets/Profile.png';

export default function Consultas(){
  return(
    <ScrollView p="5">
      <Titulo color="green.800">Minhas consultas</Titulo>
      <Botao mt={5} mb={5}>Agendar nova consulta</Botao>

      <Titulo color="green.800" fontSize="lg" alignSelf="flex-start" mb={2}>Próximas consultas</Titulo>
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto={Profile}
        data='20/04/2023'
        foiAgendado
      />

      <Divider mt={5} />

      <Titulo color="green.800" fontSize="lg" alignSelf="flex-start" mb={2}>Consultas passadas</Titulo>
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto={Profile}
        data='20/04/2023'
        foiAtendido
      />
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto={Profile}
        data='20/04/2023'
        foiAtendido
      />
      <CardConsulta 
        nome='Dr. Andre'
        especialidade='Cardiologista'
        foto={Profile}
        data='20/04/2023'
        foiAtendido
      />
    </ScrollView>
  )
}

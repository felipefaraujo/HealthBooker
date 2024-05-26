const secoes = [
    {
        id: 1,
        titulo: 'Insira seus dados básicos',
        entradaTexto: [
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome completo'
            },
            {
                id: 2,
                label: 'Email',
                placeholder: 'Digite seu email'
            },
            {
                id: 3,
                label: 'Telefone',
                placeholder: 'Número de telefone'
            },
            {
                id: 4,
                label: 'CPF',
                placeholder: 'CPF'
            },
            {
                id: 5,
                label: 'Senha',
                placeholder: 'Digite sua senha'
            },
            {
                id: 6,
                label: 'Confirme sua senha',
                placeholder: 'Digite novamente sua senha'
            }
        ],
        checkbox: [],
    },
    {
        id: 2,
        titulo: 'Endereço para cadastro:',
        entradaTexto: [
            {
                id: 1,
                label: 'CEP',
                placeholder: 'Digite seu CEP'
            },
            {
                id: 2,
                label: 'Rua',
                placeholder: 'Rua, Número'
            },
            {
                id: 3,
                label: 'Bairro',
                placeholder: 'Digite seu bairro'
            },
            {
                id: 4,
                label: 'Cidade',
                placeholder: 'Digite sua cidade'
            },
            {
                id: 5,
                label: 'Estado',
                placeholder: 'Digite seu estado'
            },
        ],
        checkbox: [],
    },
    {
        id: 3,
        titulo: 'Selecione os seus planos de saúde:',
        entradaTexto: [],
        checkbox: [
            {
                id: 1,
                value: 'Sulamerica'
            },
            {
                id: 2,
                value: 'Unimed'
            },
            {
                id:3,
                value: 'Bradesco'
            },
            {
                id: 4,
                value: 'Amil'
            },
            {
                id: 5,
                value: 'Biosaúde'
            },
            {
                id: 6,
                value: 'Biovida'
            },
            {
                id: 7,
                value: 'Outros'
            },
            {
                id: 8,
                value: 'Não tenho plano'
            }
        ],
    }
]

export { secoes }
export const secoes = [
    {
        id: 1,
        titulo: 'Insira alguns dados básicos',
        entradaTexto: [
            {
                id: 1,
                label: 'Nome',
                placeholder: 'Digite seu nome completo',
                name: 'Nome'
            },
            {
                id: 2,
                label: 'Email',
                placeholder: 'Insira seu endereço de email',
                name: 'email'
            },
            {
                id: 3,
                label: 'Crie uma senha',
                placeholder: 'Insira sua senha',
                name: 'senha'
            },
            {
                id: 4,
                label: 'Repita a senha',
                placeholder: 'repita sua senha',
                name: 'confirmaSenha'
            },
            {
                id: 5,
                label: 'CPF',
                placeholder: 'Insira seu CPF',
                name: 'cpf'
            },
            {
                id: 6,
                label: 'foto de perfil',
                placeholder: 'link da foto de perfil',
                name: 'imagem'
            }
        ],
        checkbox: []
    },
    {
        id: 2,
        titulo: 'Agora, mais alguns dados sobre você',
        entradaTexto: [
            {
                id: 1,
                label: 'CEP',
                placeholder: 'Insira seu CEP',
                name: 'cep'
            },
            {
                id: 2,
                label: 'Rua',
                placeholder: 'Insira seu Rua',
                name: 'rua'
            },
            {
                id: 3,
                label: 'Número',
                placeholder: 'Insira o número da sua residência',
                name: 'numero'
            },
            {
                id: 4,
                label: 'Complemento',
                placeholder: 'Insira seu complemento',
                name: 'complemento'
            },
            {
                id: 5,
                label: 'Telefone',
                placeholder: '(00) 00000-0000',
                name: 'telefone'
            },
            {
                id: 6,
                label: 'Estado',
                placeholder: 'Insera o seu Estado',
                name: 'estado'
            }
        ],
        checkbox: []
    },
    {
        id: 3,
        titulo: 'Para finalizar, qual o seu plano de saúde?',
        entradaTexto: [],
        checkbox: [
            {
                id: 1,
                value: 'Sulamérica'
            },
            {
                id: 2,
                value: 'Unimed'
            },
            {
                id: 3,
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
                value: 'Outras'
            },
            {
                id: 8,
                value: 'Não tenho plano'
            }
        ]
    }
]
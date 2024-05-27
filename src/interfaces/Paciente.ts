export interface Paciente{
    cpf: string; 
    nome: string;
    email: string;
    endereco: endereco;
    senha: string;
    telefone: string;
    possuiPlanoSaude: boolean; 
    planosSaude: number[];
    imagem: string;
}

export interface endereco{
    cep: string;
    rua: string;
    numero: number; 
    estado: string;
    complemento: string;
}
import { Paciente } from "../interfaces/Paciente";
import { api } from "./api";

export async function cadastrarPaciente(Paciente: Paciente){
    if(!Paciente)return;

    try{
        const resultado = await api.post('/paciente', Paciente)
        console.log(resultado.data)
        return resultado.data
    }catch(error){
        console.log(error)
        return null
    }
}
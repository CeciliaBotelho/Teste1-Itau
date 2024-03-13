export enum Status {
    FAZER = "FAZER",
    ANDAMENTO = "ANDAMENTO",
    FEITO = "FEITO"
}

export class Task {
    codigo: number = 0;
    nome: string = ''; // Propriedade existente para o nome do task
    status: Status = Status.FAZER; // Agora usando o enum Status como tipo
}

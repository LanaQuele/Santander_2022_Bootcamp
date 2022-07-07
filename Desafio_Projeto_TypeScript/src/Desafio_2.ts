interface Visitante {
    nome: string;
    idade: number;
    profissao: 'atriz' | 'padeiro';
}

let visitante1: Visitante = {
    nome: 'Maria',
    idade: 29,
    profissao: "atriz"
}

let visitante2: Visitante = {
    nome: 'Roberto',
    idade: 19,
    profissao: "padeiro"
}

let visitante3: Visitante = {
    nome: 'Laura',
    idade: 32,
    profissao: "atriz"
}

let visitante4: Visitante = {
    nome: 'Carlos',
    idade: 19,
    profissao: "padeiro"
}

console.log(visitante3)

var agora = new Date()
var diaSem = agora.getDay()

diaSem = 0

/*
0 = Domingo
1 = Segunda
2 = Terça
3 = Quarta
4 = Quinta
5 = Sexta 
6 = Sábado
*/

//console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 2:
        console.log('Segunda')
        break
    case 3: 
        console.log('Terça')
        break
    case 4:
        console.log('Quarta')
        break
    case 5:
        console.log('Quinta')
        break
    case 6:
        console.log('Sexta')
        break
    default:
        console.log('Dia Inválido')
}
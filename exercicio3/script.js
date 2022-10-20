// Parte 1

console.log("Letra a:", 5 > 20 && 5 < 2)
console.log("Letra b:", 5 === 5 || 5 === "5")
console.log("Letra b:", 20 > !50)
console.log("Letra b:", 20 > !50 || 50 > !60)

// Parte 2

const salario = 2000.00
const filhos = 2
const auxilioCreche = 45.50 * filhos
const comissao = 0.10
const vendasJaneiro = 5784.50
const vendasFevereiro = 3418.41
const vendasMarco = 4124.10
const vendasAbril = 1874.00
const vendasMaio = 7000.00
const vendasJunho = 9450.00

const inss = 0.05

let salarioMaisCreche = (filhos * auxilioCreche) + salario
const comissaoJaneiro = vendasJaneiro * comissao
const inssJaneiro = (salario + comissaoJaneiro) * inss

const salarioJaneiro = (vendasJaneiro * comissao) + salario
const salarioFevereiro = (vendasFevereiro * comissao) + salario
const salarioMarco = (vendasMarco * comissao) + salario
const salarioAbril = (vendasAbril * comissao) + salario
const salarioMaio = (vendasMaio * comissao) + salario
const salarioJunho = (vendasJunho * comissao) + salario

console.log("Salário Janeiro:", (salarioJaneiro - (salarioJaneiro * inss)) + auxilioCreche)
console.log("Salário Fevereiro:", (salarioFevereiro - (salarioFevereiro * inss)) + auxilioCreche)
console.log("Salário Março:", (salarioMarco - (salarioMarco * inss)) + auxilioCreche)
console.log("Salário Abril:", (salarioAbril - (salarioAbril * inss)) + auxilioCreche)
console.log("Salário Maio:", (salarioMaio - (salarioMaio * inss)) + auxilioCreche)
console.log("Salário Junho:", (salarioJunho - (salarioJunho * inss)) + auxilioCreche)

const somaSalarial = salarioJaneiro + salarioFevereiro + salarioMarco + salarioAbril + salarioMaio + salarioJunho
const mediaSalarial = (somaSalarial + (auxilioCreche * 6)) / 6

console.log("A média salárial do funcionário foi", mediaSalarial)
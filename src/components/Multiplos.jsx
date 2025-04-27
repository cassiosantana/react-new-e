export const BomDia = props => <h1>Bom dia {props.nome}!</h1>
const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>
export default { BomDia }
export { BoaTarde, BoaNoite } // para nao ter que escrever export varias vezes
// export default BomDia // para acessar o BomDia sem precisar do operador destructor
// para exportar como default não é possivel utilizar let, var ou const
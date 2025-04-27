// export const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
// export const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>
// export default { BoaTarde }


const BoaTarde = props => <h1>Boa tarde {props.nome}!</h1>
const BoaNoite = props => <h1>Boa noite {props.nome}!</h1>
export { BoaTarde, BoaNoite }
export default { BoaTarde }

// para exportar como default não é possivel utilizar let, var ou const
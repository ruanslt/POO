import {Gato,Cao} from './herenca.js'



const scooby = new Cao('TOTO','AU AU AU AU')
const tom = new Gato('Tomcat', 'Miau')

// usa o setter para trocar o nome
scooby.nome = 'Scooby'

// chama os métodos

scooby.fazerBarulho()
tom.fazerBarulho()
tom.mostrarJSON()
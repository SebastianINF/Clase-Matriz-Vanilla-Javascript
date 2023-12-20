import botones from './components.js'
import { Matriz, Integer } from 'library-utilities'

const { textBox1, textBox2, textBox3 } = botones

let m1 = new Matriz()
let m2 = new Matriz()
let m3 = new Matriz()

let n1 = new Integer()

botones.Cargar1.addEventListener('click', () => {
  const nroFilas = botones.inputNroFilas.value
  const nroColumnas = botones.inputNroColumnas.value
  const inicio = botones.inputInicial.value
  const final = botones.inputFinal.value

  m1.cargar(
    parseInt(nroFilas),
    parseInt(nroColumnas),
    parseInt(inicio),
    parseInt(final)
  ) //
})

botones.Descargar1.addEventListener('click', () => {
  textBox1.value = m1.descargar()
})

botones.CargarSerieArit.addEventListener('click', () => {
  const nroFila = parseInt('Filas')
  const nroCol = parseInt('Columnas')
  const a1 = parseInt('Numero de inicio')
  const r = parseInt('Razón')
  m1.cargarSerieAritmetica(nroFila, nroCol, a1, r)
})

botones.CargarSerieGeo.addEventListener('click', () => {
  const nroFila = parseInt('Filas')
  const nroCol = parseInt('Columnas')
  const a1 = parseInt('Numero de inicio')
  const r = parseInt('Razón geometrica')
  m1.cargarSerieGeometrica(nroFila, nroCol, a1, r)
})

botones.Pertenencia.addEventListener('click', () => {
  const numero = parseInt('Numero')
  alert(m1.pertenencia(numero))
})

botones.VerificarOrdenado.addEventListener('click', () => {
  alert(m1.verificarOrdenado())
})

botones.VerificarIguales.addEventListener('click', () => {
  alert(m1.verificarTodosIguales())
})

botones.VerificarDiferentes.addEventListener('click', () => {
  alert(m1.verificarTodosDiferentes())
})

botones.MultiplicarEscalar.addEventListener('click', () => {
  const escalar = parseInt('Escalar')
  m1.multiplicacionPorEscalar(escalar)
  textBox2.value = m1.descargar()
})

botones.Transpocicion.addEventListener('click', () => {
  m1.transposicion()
  textBox2.value = m1.descargar()
})

botones.Frecuencia.addEventListener('click', () => {
  const numero = parseInt('Numero a buscar')
  alert(m1.frecuencia(numero))
})

botones.Ordenar.addEventListener('click', () => {
  m1.ordenar()
  textBox2.value = m1.descargar()
})

botones.Segmentar.addEventListener('click', () => {
  n1 = new Integer()
  m1.segmentar(n1.verificarPar)
  textBox2.value = m1.descargar()
})

botones.Intercalar.addEventListener('click', () => {
  n1 = new Integer()
  m1.intercalar(n1.verificarPrimo)
  textBox2.value = m1.descargar()
})

botones.AñadirColMayorFrecYFrec.addEventListener('click', () => {
  m1.añadirColumnaMayorFrecuenciaYFrecuencia()
  textBox2.value = m1.descargar()
})

botones.AñadirColMenorFrecYFrec.addEventListener('click', () => {
  m1.añadirColumnaMenorFrecuenciaYFrecuencia()
  textBox2.value = m1.descargar()
})

botones.AñadirColSuma.addEventListener('click', () => {
  m1.añadirColumnaSuma()
  textBox2.value = m1.descargar()
})

botones.AñadirColPar.addEventListener('click', () => {
  m1.añadirColumnaPares()
  textBox2.value = m1.descargar()
})

botones.AñadirColPrim.addEventListener('click', () => {
  m1.añadirColumnaPrimos()
  textBox2.value = m1.descargar()
})

botones.AñadirColCap.addEventListener('click', () => {
  m1.añadirColumnaCapicuas()
  textBox2.value = m1.descargar()
})

botones.AñadirColFib.addEventListener('click', () => {
  m1.añadirColumnaNoFibonaccis()
  textBox2.value = m1.descargar()
})

botones.AñadirColDif.addEventListener('click', () => {
  m1.añadirColumnaElementosDiferentes()
  textBox2.value = m1.descargar()
})

botones.AñadirColUnic.addEventListener('click', () => {
  m1.añadirColumnaElementosUnicos()
  textBox2.value = m1.descargar()
})

botones.AñadirFilMayorFrecYFrec.addEventListener('click', () => {
  m1.añadirFilaMayorFrecuenciaYFrecuencia()
  textBox2.value = m1.descargar()
})

botones.AñadirFilMenorFrecYFrec.addEventListener('click', () => {
  m1.añadirFilaMenorFrecuenciaYFrecuencia()
  textBox2.value = m1.descargar()
})

botones.AñadirFilSum.addEventListener('click', () => {
  m1.añadirFilaSuma()
  textBox2.value = m1.descargar()
})

botones.AñadirFilPar.addEventListener('click', () => {
  m1.añadirFilaPares()
  textBox2.value = m1.descargar()
})

botones.AñadirFilPrim.addEventListener('click', () => {
  m1.añadirFilaPrimos()
  textBox2.value = m1.descargar()
})

botones.AñadirFilCap.addEventListener('click', () => {
  m1.añadirFilaCapicuas()
  textBox2.value = m1.descargar()
})

botones.AñadirFilFib.addEventListener('click', () => {
  m1.añadirFilaFibonaccis()
  textBox2.value = m1.descargar()
})

botones.AñadirFilDif.addEventListener('click', () => {
  m1.añadirFilaElementosDiferentes()
  textBox2.value = m1.descargar()
})

botones.AñadirFilUnic.addEventListener('click', () => {
  m1.añadirFilaElementosUnicos()
  textBox2.value = m1.descargar()
})

botones.OrdernarDiagPrincial.addEventListener('click', () => {
  m1.ordenarDiagonalPrincipal()
  textBox2.value = m1.descargar()
})

botones.OrdenarDiagSecundaria.addEventListener('click', () => {
  m1.ordenarDiagonalSecundaria()
  textBox2.value = m1.descargar()
})

botones.SegTrianSupIzq.addEventListener('click', () => {
  n1 = new Integer()
  m1.segmentarTriangularSuperiorIzquierda(n1.verificarPar)
})

botones.SegTrianSupDer.addEventListener('click', () => {
  n1 = new Integer()
  m1.segmentarTriangularSuperiorDerecha(n1.verificarPrimo)
})

botones.SegTrianInfIzq.addEventListener('click', () => {
  n1 = new Integer()
  m1.segmentarTriangularSuperiorIzquierda(n1.verificarCapicua)
})

botones.SegTrianInfDer.addEventListener('click', () => {
  n1 = new Integer()
  m1.segmentarTriangularSuperiorIzquierda(n1.verificarFibonacci)
})

botones.IntTrianSupIzq.addEventListener('click', () => {
  n1 = new Integer()
  m1.IntercalarTriangularSuperiorIzquierda(n1.verificarPar)
})

botones.IntTrianSupDer.addEventListener('click', () => {
  n1 = new Integer()
  m1.IntercalarTriangularSuperiorDerecha(n1.verificarPrimo)
})

botones.IntTrianInfIzq.addEventListener('click', () => {
  n1 = new Integer()
  m1.IntercalarTriangularInferiorIzquierda(n1.verificarCapicua)
})

botones.IntTrianInfDer.addEventListener('click', () => {
  n1 = new Integer()
  m1.IntercalarTriangularInferiorDerecha(n1.verificarFibonacci)
})

// matriz 2
botones.Cargar2.addEventListener('click', () => {
  const nroFilas = botones.inputNroFilas.value
  const nroColumnas = botones.inputNroColumnas.value
  const inicio = botones.inputInicial.value
  const final = botones.inputFinal.value

  m2.cargar(
    parseInt(nroFilas),
    parseInt(nroColumnas),
    parseInt(inicio),
    parseInt(final)
  )
})

botones.Descargar2.addEventListener('click', () => {
  textBox2.value = m2.descargar()
})

botones.CargarSerieArit2.addEventListener('click', () => {
  const nroFila = parseInt('Filas')
  const nroCol = parseInt('Columnas')
  const a1 = parseInt('Numero de inicio')
  const r = parseInt('Razón')
  m2.cargarSerieAritmetica(nroFila, nroCol, a1, r)
})

botones.CargarSerieGeo2.addEventListener('click', () => {
  const nroFila = parseInt('Filas')
  const nroCol = parseInt('Columnas')
  const a1 = parseInt('Numero de inicio')
  const r = parseInt('Razón geometrica')
  m2.cargarSerieGeometrica(nroFila, nroCol, a1, r)
})

// matriz 3
botones.Cargar3.addEventListener('click', () => {
  const nroFilas = botones.inputNroFilas.value
  const nroColumnas = botones.inputNroColumnas.value
  const inicio = botones.inputInicial.value
  const final = botones.inputFinal.value

  m3.cargar(
    parseInt(nroFilas),
    parseInt(nroColumnas),
    parseInt(inicio),
    parseInt(final)
  )
})

botones.Descargar3.addEventListener('click', () => {
  textBox3.value = m3.descargar()
})

botones.Suma.addEventListener('click', () => {
  m3.suma(m1, m2)
  textBox3.value = m3.descargar()
})

botones.Resta.addEventListener('click', () => {
  m3.resta(m1, m2)
  textBox3.value = m3.descargar()
})

botones.Multiplicacion.addEventListener('click', () => {
  m3.multiplicacion(m1, m2)
  textBox3.value = m3.descargar()
})

botones.botonReset.addEventListener('click', () => {
  m1 = new Matriz()
  m2 = new Matriz()
  m3 = new Matriz()
  
  n1 = new Integer()

  textBox1.value = ''
  textBox2.value = ''
  textBox3.value = ''

  botones.inputNroFilas.value = ""
  botones.inputNroColumnas.value = ""
  botones.inputInicial.value = ""
  botones.inputFinal.value = ""
})
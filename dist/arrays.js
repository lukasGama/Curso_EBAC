var alunos = [{
  nome: 'lukas',
  nota: 8.1
}, {
  nome: 'Mateus',
  nota: 4.0
}, {
  nome: 'Raiane',
  nota: 9.5
}, {
  nome: 'Odilon',
  nota: 6.5
}, {
  nome: 'Elveni',
  nota: 3.8
}, {
  nome: 'André',
  nota: 8.9
}, {
  nome: 'Julia',
  nota: 4.0
}, {
  nome: 'josé',
  nota: 3.5
}, {
  nome: 'Luciana',
  nota: 10.0
}];
var aprovados = alunos.filter(function (aprovados) {
  return aprovados.nota >= 6;
});
console.log(aprovados);
listaObras = [];
function Tempo(){
  date1 = new Date('2019/04/05');
  date2 = new Date();
  var diferenca = Math.abs(date1 - date2); //diferença em milésimos e positivo
  var dia = 1000*60*60*24; // milésimos de segundo correspondente a um dia
  var total = Math.round(diferenca/dia); //valor total de dias arredondado 
  alert(total+ ' dias desde o primeiro bj')
};

function AbrirSecao(secao){
    window.open(""+secao+"", "_parent");
}

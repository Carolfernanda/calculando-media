// sabor do suco
// número da mesa que fez o pedido

// PEDIDO GERAL
const mesa = 10
const suco = "laranja"
const qtd = 2
const comAcucar = true

// PEDIDO
if(comAcucar === true){
  console.log(`Pedido: Suco de ${suco} com açúcar. Quantidade: ${qtd}. Mesa: ${mesa}.`);  
}else{
  console.log(`Pedido: Suco de ${suco} sem açúcar. Quantidade: ${qtd}. Mesa: ${mesa}.`);
}

// incluimos a saida do pedido e viagem do pedido = informação para profa

// SAÍDA - CONTA
const pgtCartao = true
const pgtDinheiro = false
const pgtPix = false

// SAÍDA - CONTA

if(pgtCartao === true){
  console.log("Pagamento em cartão realizado com sucesso.")
}else if(pgtDinheiro === true){
  console.log("Pagamento em dinheiro realizado com sucesso.")
}else{
  console.log("Pagamento em Pix realizado com sucesso.")
}
  

// SAÍDA - VIAGEM
const viagem = false

// SAÍDA - VIAGEM
 if(viagem === true){
   console.log("Cliente deseja pedido para viagem.")
 }else{
   console.log("Cliente atendido na mesa.")
 }




let [
  A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, W, Y, Z] = 
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

let placa = new Array(3);
let estado = "";
let regiao = "";

const faixas = [
  {inicio: "AAA", final: "BEZ", estado: "Paraná", regiao: "Sul"},
  {inicio: "BFA", final: "GKI", estado: "São Paulo", regiao: "Sudeste"},
  {inicio: "GKJ", final: "HOK", estado: "Minas Gerais", regiao: "Sudeste"},
  {inicio: "HOL", final: "HQE", estado: "Maranhão", regiao: "Nordeste"},
  {inicio: "HQF", final: "HTW", estado: "Mato Grosso do Sul", regiao: "Centro-Oeste"},
  {inicio: "HTX", final: "HZA", estado: "Ceará", regiao: "Nordeste"},
  {inicio: "HZB", final: "IAP", estado: "Sergipe", regiao: "Nordeste"},
  {inicio: "IAQ", final: "JDO", estado: "Rio Grande do Sul", regiao: "Sul"},
  {inicio: "JDP", final: "JKR", estado: "Distrito Federal", regiao: "Centro-Oeste"},
  {inicio: "JKS", final: "JSZ", estado: "Bahia", regiao: "Nordeste"},
  {inicio: "JTA", final: "JWE", estado: "Pará", regiao: "Norte"},
  {inicio: "JWF", final: "JXY", estado: "Amazonas", regiao: "Norte"},
  {inicio: "JXZ", final: "KAU", estado: "Mato Grosso", regiao: "Centro-Oeste"},
  {inicio: "KAV", final: "KFC", estado: "Goiás", regiao: "Centro-Oeste"},
  {inicio: "KFD", final: "KME", estado: "Pernambuco", regiao: "Nordeste"},
  {inicio: "KMF", final: "LVE", estado: "Rio de Janeiro", regiao: "Sudeste"},
  {inicio: "LVF", final: "LWQ", estado: "Piauí", regiao: "Nordeste"},
  {inicio: "LWR", final: "MMM", estado: "Santa Catarina", regiao: "Sul"},
  {inicio: "MMN", final: "MOW", estado: "Paraíba", regiao: "Nordeste"},
  {inicio: "MOX", final: "MTZ", estado: "Espírito Santo", regiao: "Sudeste"},
  {inicio: "MUA", final: "MVK", estado: "Alagoas", regiao: "Nordeste"},
  {inicio: "MVL", final: "MXG", estado: "Tocatins", regiao: "Norte"},
  {inicio: "MXH", final: "MZM", estado: "Rio Grande do Norte", regiao: "Nordeste"},
  {inicio: "MZN", final: "NAG", estado: "Acre", regiao: "Norte"},
  {inicio: "NAH", final: "NBA", estado: "Roraima", regiao: "Norte"},
  {inicio: "NBB", final: "NEH", estado: "Rondônia", regiao: "Norte"},
  {inicio: "NEI", final: "NFB", estado: "Amapá", regiao: "Norte"},
  {inicio: "NFC", final: "NGZ", estado: "Goiás", regiao: "Centro-Oeste"},
  {inicio: "NHA", final: "NHT", estado: "Maranhão", regiao: "Nordeste"},
  {inicio: "NHU", final: "NIX", estado: "Piauí", regiao: "Nordeste"},
  {inicio: "NIY", final: "NJW", estado: "Mato Grosso", regiao: "Centro-Oeste"},
  {inicio: "NJX", final: "NLU", estado: "Goiás", regiao: "Centro-Oeste"},
  {inicio: "NLV", final: "NMO", estado: "Alagoas", regiao: "Nordeste"},
  {inicio: "NMP", final: "NNI", estado: "Maranhão", regiao: "Nordeste"},
  {inicio: "NNJ", final: "NOH", estado: "Rio Grande do Norte", regiao: "Nordeste"},
  {inicio: "NOI", final: "NPB", estado: "Amazonas", regiao: "Norte"},
  {inicio: "NPC", final: "NPQ", estado: "Mato Grosso", regiao: "Centro-Oeste"},
  {inicio: "NPR", final: "NQK", estado: "Paraíba", regiao: "Nordeste"},
  {inicio: "NQL", final: "NRE", estado: "Ceará", regiao: "Nordeste"},
  {inicio: "NRF", final: "NSD", estado: "Mato Grosso do Sul", regiao: "Centro-Oeste"},
  {inicio: "NSE", final: "NTC", estado: "Pará", regiao: "Norte"},
  {inicio: "NTD", final: "NTW", estado: "Bahia", regiao: "Nordeste"},
  {inicio: "NTX", final: "NUG", estado: "Mato Grosso", regiao: "Centro-Oeste"},
  {inicio: "NUH", final: "NUL", estado: "Roraima", regiao: "Norte"},
  {inicio: "NUM", final: "NVF", estado: "Ceará", regiao: "Nordeste"},
  {inicio: "NVG", final: "NVN", estado: "Sergipe", regiao: "Nordeste"},
  {inicio: "NVO", final: "NWR", estado: "Goiás", regiao: "Centro-Oeste"},
  {inicio: "NWS", final: "NXQ", estado: "Maranhão", regiao: "Nordeste"},
  {inicio: "NXR", final: "NXT", estado: "Acre", regiao: "Norte"},
  {inicio: "NXU", final: "NXW", estado: "Pernambuco", regiao: "Nordeste"},
  {inicio: "NXX", final: "NYG", estado: "Minas Gerais", regiao: "Sudeste"},
  {inicio: "NYH", final: "NZZ", estado: "Bahia", regiao: "Nordeste"},
  {inicio: "OAA", final: "OAO", estado: "Amazonas", regiao: "Norte"},
  {inicio: "OAP", final: "OBS", estado: "Mato Grosso", regiao: "Centro-Oeste"},
  {inicio: "OBT", final: "OCA", estado: "Pará", regiao: "Norte"},
  {inicio: "OCB", final: "OCU", estado: "Ceará", regiao: "Nordeste"},
  {inicio: "OCV", final: "ODT", estado: "Espírito Santo", regiao: "Sudeste"},
  {inicio: "ODU", final: "OEI", estado: "Piauí", regiao: "Nordeste"},
  {inicio: "OEJ", final: "OES", estado: "Sergipe", regiao: "Nordeste"},
  {inicio: "OET", final: "OFH", estado: "Paraíba", regiao: "Nordeste"},
  {inicio: "OFI", final: "OFW", estado: "Pará", regiao: "Norte"},
  {inicio: "OFX", final: "OGG", estado: "Paraíba", regiao: "Nordeste"},
  {inicio: "OGH", final: "OHA", estado: "Goiás", regiao: "Centro-Oeste"},
  {inicio: "OHB", final: "OHK", estado: "Alagoas", regiao: "Nordeste"},
  {inicio: "OHL", final: "OHW", estado: "Rondônia", regiao: "Norte"},
  {inicio: "OHX", final: "OIQ", estado: "Ceará", regiao: "Nordeste"},
  {inicio: "OIR", final: "OJQ", estado: "Maranhão", regiao: "Nordeste"},
 
];

function placaToString(placaArr) {
  return placaArr.map(num => String.fromCharCode(num + 65)).join("");
}

function comparaPlaca(placaStr, inicio, final) {
  return placaStr >= inicio && placaStr <= final;
}

function letterToNumber(letra){
  return letra.toUpperCase().charCodeAt(0) - 65;
}

function analisaPlaca(array) {
  const PlacaTexto = document.getElementById("placaInput").value.toUpperCase();
  const resultado = document.getElementById("resultado");

  if(PlacaTexto.length < 3) {
    resultado.textContent = "Digite os 3 primeiros caracteres da placa.";
    return;
  }

  placa[0] = letterToNumber(PlacaTexto[0]);
  placa[1] = letterToNumber(PlacaTexto[1]);
  placa[2] = letterToNumber(PlacaTexto[2]);
  const placaStr = placaToString([placa[0], placa[1], placa[2]]);

  let encontrado = false;
  for (let faixa of faixas) {
    if (comparaPlaca(placaStr, faixa.inicio, faixa.final)) {
      estado = faixa.estado;
      regiao = faixa.regiao;
      encontrado = true;
      break;
    }
  }

  if (encontrado) {
    resultado.textContent = `${estado} (${regiao})`;
    console.log(`${placaStr}: ${estado} (${regiao})`);
  } else {
    resultado.textContent = "Placa não encontrada nas faixas cadastradas.";
    console.log("Placa não encontrada nas faixas cadastradas.");
  }
}

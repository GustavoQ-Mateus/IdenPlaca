// let [
//   A,
//   B,
//   C,
//   D,
//   E,
//   F,
//   G,
//   H,
//   I,
//   J,
//   K,
//   L,
//   M,
//   N,
//   O,
//   P,
//   Q,
//   R,
//   S,
//   T,
//   U,
//   V,
//   X,
//   W,
//   Y,
//   Z,
// ] = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
//   22, 23, 24, 25,
// ];

// let placa = new Array(7);

// function analisaPlaca(array) {
//   if (
//     placa[0] >= 1 &&
//     placa[0] <= 6 &&
//     placa[1] >= 5 &&
//     placa[1] <= 10 &&
//     placa[2] >= 0 &&
//     placa[2] <= 8
//   ) {
//     console.log("Sao paulo");
//   } else if (
//     placa[0] >= 10 &&
//     placa[0] <= 11 &&
//     placa[1] >= 12 &&
//     placa[1] <= 21 &&
//     placa[2] >= 4 &&
//     placa[2] <= 5
//   ) {
//     console.log("Placa Rio de Janeiro");
//   } else if (
//     placa[0] >= 12 &&
//     placa[1] >= 14 &&
//     placa[1] <= 19 &&
//     placa[2] >= 22 &&
//     placa[2] <= 25
//   ) {
//     console.log("Placa do Espírito Santo.");
//   } else if (
//     placa[0] >= 6 &&
//     placa[0] <= 7 &&
//     placa[1] >= 10 &&
//     placa[1] <= 14 &&
//     placa[2] >= 9 &&
//     placa[2] <= 10
//   ) {
//     console.log("Placa de Minas Gerais.");
//   } else {
//     console.log("Essa placa nao faz parte da região sudeste do Brasil.");
//   }
//   return array;
// }

// placa = [H, M, J, 1, 2, A, 4];

// analisaPlaca(placa);

// // }

// // A| |B| |C| |D| |E| |F| |G| |H| |I| |J| |K|  |L|  |M|  |N|  |O|  |P|  |Q|  |R|  |S|  |T|  |U|  |V|  |X|  |W|   |Y|   |Z
// // 0| |1| |2| |3| |4| |5| |6| |7| |8| |9| |10| |11| |12| |13| |14| |15| |16| |17| |18| |19| |20| |21| |22| |23|  |24|  |25

// //BFA a GKI São Paulo

// //KMF a LVE Rio de Janeiro

// //MOX a MTZ Espírito Santo

// //GKJ a HOK Minas Gerais

let [
  A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, X, W, Y, Z] = 
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

let placa = new Array(7);

function analisaPlaca(array) {
  if (
    placa[0] >= 1 && placa[0] <= 6 &&
    placa[1] >= 5 && placa[1] <= 10 &&
    placa[2] >= 0 && placa[2] <= 8
  ) {
    console.log("São Paulo");
  } else if (
    placa[0] >= 10 && placa[0] <= 11 &&
    placa[1] >= 12 && placa[1] <= 21 &&
    placa[2] >= 4 && placa[2] <= 5
  ) {
    console.log("Placa Rio de Janeiro");
  } else if (
    placa[0] >= 12 &&
    placa[1] >= 14 && placa[1] <= 19 &&
    placa[2] >= 22 && placa[2] <= 25
  ) {
    console.log("Placa do Espírito Santo.");
  } else if (
    placa[0] >= 6 && placa[0] <= 7 &&
    placa[1] >= 10 && placa[1] <= 14 &&
    placa[2] >= 9 && placa[2] <= 10
  ) {
    console.log("Placa de Minas Gerais.");
  } else {
    console.log("Essa placa não faz parte da região sudeste do Brasil.");
  }
  return array;
}

placa = [H, M, J, 1, 2, A, 4];

analisaPlaca(placa);


// function beliGula(duit, cb) { // ini duluan jadi callback nya di sini
//   // console.log(duit+'hooo');
//   return cb(duit-4000);
//   // console.log(duit);
// }
//
// function beliPermen(duitkembalian) {
//   // console.log(duitkembalian);
//   if (duitkembalian >= 1000) {
//     return 'hore bisa beli permen'
//   } else {
//     return 'pulang duit gk cukup';
//   }
// }
//
//
// console.log(beliGula(5000, beliPermen));
//
//
//
//
//
//
//
//
//
//
// // with only one function
// function beliGula(duit, cb) { // ini duluan jadi callback nya di sini
//
//   return cb(duit-4000); // jadi parameter
//
// }
//
// // ================================================================================
// console.log(beliGula(5000, beliPermen => { // nama function di jadiin
//   if (beliPermen >= 1000) {
//     return 'hore bisa beli permen'
//   } else {
//     return 'pulang duit gk cukup';
//   }
// }));
// // ================================================================================
// // OR
// // ================================================================================




function beliGula(duit, cb) {
  let kembalian = duit - 4000;
  return cb(kembalian);
}

        // function beliPermen(sisa) {
        //   if (sisa>=1000) {
        //     return 'beli cuy'
        //   } else {
        //     return 'huhu gk jd'
        //   }
        // }
console.log(beliGula(5000, parBeliPermen => {
  if (parBeliPermen>=1000) {
    return 'beli cuy'
  } else {
    return 'huhu gk jd'
  }
}));

        // console.log(beliGula(5000, beliPermen));

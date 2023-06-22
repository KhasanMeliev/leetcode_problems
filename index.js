var countVowelPermutation = function (n) {
  if (n === 1) {
    return 5;
  } else {
    return n * 3;
  }
};

console.log(countVowelPermutation(3));
//a = ae, aea, aeae, aeaea
//e = ea, eae, eaea, eaeae
//i = ia, ie, io, iu, iai, iei, ioi, iui, iaia, ieie, ioio, iuiu, iaiai, ieiei, ioioi, iuiui,
//o = oi, ou, oio, ouo, oioi, ouou, oioio, ououo
//u = ua, uau, uaua, uauau
12 + 16 + 8 + '36';

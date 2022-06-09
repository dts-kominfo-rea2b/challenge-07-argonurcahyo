const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (hasil) => {
  let ixx = await promiseTheaterIXX();
  let vgc = await promiseTheaterVGC();

  let ixx_hasil = ixx.filter((value) => {
    return value.hasil === hasil;
  });
  let vgc_hasil = vgc.filter((value) => {
    return value.hasil === hasil;
  });
  return ixx_hasil.length + vgc_hasil.length;
};

const promiseOutput2 = (hasil) => {
  let sum = 0;
  promiseTheaterIXX()
    .then((data) => {
      sum += data.filter((value) => value.hasil === hasil);
    })
    .catch((err) => console.log(err))
    .finally(() => sum);
  return sum;
};

module.exports = {
  promiseOutput,
};

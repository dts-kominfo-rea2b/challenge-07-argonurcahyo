const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput1 = async (hasil) => {
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

const promiseOutput = (hasil) => {
  let ixx = promiseTheaterIXX()
    .then(results => results.map(result => result.hasil));

  let vgc = promiseTheaterVGC()
    .then(results => results.map(result => result.hasil));

  return Promise.all([ixx, vgc])
    .then(values => {
      const [ixx, vgc] = values;
      return ixx.filter(v => v === hasil).length +
        vgc.filter(v => v === hasil).length;
    })
};

module.exports = {
  promiseOutput,
};

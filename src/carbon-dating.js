const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false
  }

  const a = parseFloat(sampleActivity)

  if (a <= 0 || isFinite(a) || isNaN(a)) {
    return false
  } else {
    const a0 = MODERN_ACTIVITY
    const n = a
    const n0 = a0
    const k = 0.693 / HALF_LIFE_PERIOD
    const t = Math.ceil(Math.log(n0 / n) * k)
  }
  return t
}

module.exports = {
  dateSample
};

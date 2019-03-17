export const MAX = 360;
/**
 *
 * @param {*} ordinal order/index of the group
 * @param {*} colorUnit 0~360 depends on the total number
 * @param {*} angleUnit 0~360 depends on the total number
 */
export const carouselStyle = (ordinal, colorUnit, angle, totalCarousels) => ({
  background: `hsla( ${ordinal * colorUnit}, 100%, 50%, 0.8)`,
  transform: `rotateX(${angle}deg) translateZ(288px)`,
  height: `${(16 / totalCarousels) * 110}px`,
  lineHeight: `${(16 / totalCarousels) * 110}px`
});

export const getFacingUp = angleArray =>
  angleArray.sort(
    (a, b) => (Math.abs(a - 360) % 360) - (Math.abs(b - 360) % 360)
  )[0];

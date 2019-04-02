export const MAX = 360;

const colorPalatte = [
  "rgba(186, 86, 86,1)",
  "rgba(214, 199, 107,1)",
  "rgba(98, 165, 131,1)",
  "rgba(108, 173, 181,1)",
  "rgba(72, 108, 160,1)",
  "rgba(137, 107, 183,1)"
];
/**
 *
 * @param {*} ordinal order/index of the group
 * @param {*} colorUnit 0~360 depends on the total number
 * @param {*} angleUnit 0~360 depends on the total number
 */
export const carouselStyle = (ordinal, colorUnit, angle, totalCarousels) => ({
  background: `${colorPalatte[ordinal % colorPalatte.length]}`,
  transform: `translateY(${angle}px) `,
  height: `fit-content`,
  fontSize: `${Math.min((16 / totalCarousels) * 80, 100)}px`
});

export const getFacingUp = angleArray =>
  angleArray.sort(
    (a, b) => (Math.abs(a - 360) % 360) - (Math.abs(b - 360) % 360)
  )[0];

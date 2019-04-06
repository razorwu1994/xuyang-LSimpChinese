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
// `${colorPalatte[ordinal % colorPalatte.length]}`
export const carouselStyle = (ordinal, angle, totalCarousels) => ({
  background: "white",
  transform: `translateY(${angle}px) `,
  height: `fit-content`,
  fontSize: `100px`
});

export const closest = (counts, goal) =>
  counts.length > 0
    ? counts.reduce(function(prev, curr) {
        return Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev;
      })
    : 0;

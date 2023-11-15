export const getRandomInteger = (a, b) => {
    const min = Math.ceil(Math.min(a, b));
    const max = Math.floor(Math.max(a, b));
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
export const getRandomArrayElement = (elements) =>
    elements[getRandomInteger(0, elements.length - 1)];

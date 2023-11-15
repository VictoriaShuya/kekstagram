import { getRandomArrayElement, getRandomInteger } from './util.js';

const MESSAGES = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const DESCRIPTIONS = [
    'Как уже неоднократно упомянуто',
    'Активно развивающиеся страны третьего мира',
    'и по сей день остаются уделом либералов',
    'жаждут быть превращены в посмешище',
    'их существование приносит несомненную пользу обществу',
];
const NAMES = [
    'Ира Балалайкина',
    'Константин Меладзе',
    'Владимир Владимирович',
    'Мамина подруга',
    'Кристина Орбакайте',
];
const POSTS_COUNT = 25;
const MIN_COUNT_COMMENTS = 0;
const MAX_COUNT_COMMENTS = 30;
const MIN_COUNT_LIKES = 15;
const MAX_COUNT_LIKES = 200;

const createComment = (id) => ({
    id,
    avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
    message: getRandomArrayElement(MESSAGES),
    name: getRandomArrayElement(NAMES),
});
const createComments = () =>
    Array.from(
        { length: getRandomInteger(MIN_COUNT_COMMENTS, MAX_COUNT_COMMENTS) },
        (_, i) => createComment(i + 1)
    );
const createPost = (id) => ({
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(MIN_COUNT_LIKES, MAX_COUNT_LIKES),
    comments: createComments(),
});
export const createPosts = () =>
    Array.from({ length: POSTS_COUNT }, (_, i) => createPost(i + 1));

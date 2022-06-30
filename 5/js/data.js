import {getRandomInclusive} from './util.js';

const descriptions = [
  'Красивая',
  'Город',
  'Море'
];
const massages =[
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Вася',
  'Петя',
  'Маша',
  'Оля',
  'Вера'
];

const creatComment = (comId) => ({
  id: comId,
  avatar: `img/avatar-${getRandomInclusive(1,6)}.svg`,
  message: massages[getRandomInclusive(0,massages.length-1)],
  name: names [getRandomInclusive(0,names.length-1)],
});

const creatComments = () => {
  const comments = [];
  for (let i = 1; i<=5 ; i++) {
    const comment = creatComment(i);
    comments.push(comment);
  }
  return comments;
};

const creatPhoto = (identificator) => ({
  id: identificator,
  url:`photos/${identificator}.jpg`,
  description: descriptions[getRandomInclusive(0,descriptions.length-1)],
  likes:getRandomInclusive(15,200),
  comments: creatComments(),
});

const createPhotos = () => {
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    const photo = creatPhoto(i);
    photos.push(photo);
  }

  return photos;
};

export {createPhotos};

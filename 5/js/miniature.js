import{createPhotos} from './data.js';
//нашел кляше
const userPhotoTemplate = document.querySelector('#picture')
  .content
  .querySelector('.picture');

// нашел место, куда добавлять фото
const userListPhoto = document.querySelector('.pictures');

const photos = createPhotos();
//не получается в клонированный документ добавлять элементы из массива с фото
const similarListFragment = document.createDocumentFragment();

photos.forEach((photo) => {
  const userPhoto = userPhotoTemplate.cloneNode(true);
  const pictureLike = userPhoto.querySelector('.picture__likes');
  pictureLike.textContent = photo.likes;
  const pictureComments = userPhoto.querySelector('.picture__comments');
  pictureComments.textContent = photo.comments.length;
  const picture = userPhoto.querySelector('.picture__img');
  picture.src = photo.url;
  similarListFragment.appendChild(userPhoto);
});

userListPhoto.appendChild(similarListFragment);


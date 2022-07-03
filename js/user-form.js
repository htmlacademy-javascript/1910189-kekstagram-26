const upLoad = document.querySelector('#upload-file');
const editForm = document.querySelector('.img-upload__overlay');
const picture = document.querySelector('body');
const cancelButton = document.querySelector('.img-upload__cancel');
const imgUploadForm = document.querySelector('.img-upload__form');
const re = /^#[A-Za-zА-яа-яЁё0-9]{1,19}$/;
const hashtag = document.querySelector('.text__hashtags');


re.test(hashtag);

upLoad.addEventListener('click', () => {
  editForm.classList.remove('hidden');
  picture.classList.add('modal-open');
});

cancelButton.addEventListener('click', () => {
  editForm.classList.add('hidden');
  picture.classList.remove('modal-open');
  imgUploadForm.reset();
});

document.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    editForm.classList.add('hidden');
    picture.classList.remove('modal-open');
    imgUploadForm.reset();
  }
});

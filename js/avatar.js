const setAvatar = () => {
  const FILE_TYPES = ['jpg', 'jpeg', 'png'];

  const fileChooserElement = document.querySelector('#avatar');
  const previewElement = document.querySelector('.ad-form-header__preview img');

  fileChooserElement.addEventListener('change', () => {
    const file = fileChooserElement.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => fileName.endsWith(it));

    if (matches) {
      previewElement.src = URL.createObjectURL(file);
    }
  });
};
export { setAvatar };

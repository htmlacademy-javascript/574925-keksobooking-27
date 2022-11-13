const getData = async (onSucces, onFail) => {
  try {
    const response = await fetch('https://27.javascript.pages.academy/keksobooking/data'
    );
    if (!response.ok) {
      throw new Error('Не удалось загрузить данные');
    }
    const offers = await response.json();
    onSucces(offers);
  } catch (error) {
    onFail(error.message);
  }
};

const sendData = async (onSucces, onFail, body) => {
  try {
    const response = await fetch('https://27.javascript.pages.academy/keksobooking', {
      method: 'POST',
      body,
    });

    if (!response.ok) {
      throw new Error('Не удалось отправить данные. Попробуйте еще раз');
    }

    onSucces();
  } catch (error) {
    onFail(error.message);
  }
};

export { getData, sendData };

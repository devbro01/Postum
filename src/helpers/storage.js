export const setItem = (name, value) => {
  try {
    localStorage.setItem(name, value);
  } catch (error) {
    console.log('!problem with saving auth data');
  }
};

export const getItem = (value) => {
  try {
    return localStorage.getItem(value);
  } catch (error) {
    console.log(error);
  }
};

export const removeItem = (value) => {
  try {
    localStorage.removeItem(value);
  } catch (error) {
    console.log(error);
  }
};

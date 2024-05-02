export const setToken = (name, value) => {
  try {
    localStorage.setItem(name, value);
  } catch (error) {
    console.log("!problem with saving auth data!");
  }
};

export const getToken = (value) => {
  try {
    return localStorage.getItem(value);
  } catch (error) {
    console.log(error);
  }
};

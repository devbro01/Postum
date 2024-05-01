export const setToken = (name, value) => {
  try {
    localStorage.setItem(name, value);
  } catch (error) {
    console.log("!problem with saving auth data!");
  }
};

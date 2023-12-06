export const checkValidData = (email, password) => {
  // write regex inside /inside this/
  const isEmailValid = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email);

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!isEmailValid) return "Email ID is not valid.";
  if (!isPasswordValid) return "Password is not valid.";

  return null;
};

export const checkValidate = (email, password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isEmailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

  if (!isEmailValidation) return "Email is not  valid";
  if (!isPasswordValid) return "PassWord is not valid";

  return null;
};

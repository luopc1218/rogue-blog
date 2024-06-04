export const getUserInfo = async () => {
  return await fetch("localhost:8080/user/getUserInfo");
};

const isUserExist = (loginValue: string) => {
  const user = localStorage.getItem(loginValue);
  return !!user;
};
export default isUserExist;

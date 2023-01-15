export const updateUserById = (id, changeField, changeValue, usersArray) => {
  const userIndex = usersArray.findIndex((user) => user.id === id);
  const user = usersArray[userIndex];
  user[changeField] = changeValue;
};

import Api from "./Api";

export const login = async (email, password) => {
  try {
    const response = await Api.post("/users/login", { email, password });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (user) => {
  try {
    const response = await Api.post("/users", user);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const UsersService = { login, registerUser };

export default UsersService;

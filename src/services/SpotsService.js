import Api from "./Api";

export const getSpots = async () => {
  try {
    const response = await Api.get("/spots");

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMySpots = async (userId) => {
  try {
    const response = await Api.get("/spots", { params: { userId } });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const SpotsService = { getSpots, getMySpots };

export default SpotsService;

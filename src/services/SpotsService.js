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

export const registerSpot = async (spot) => {
  try {
    const response = await Api.post("/spots", spot, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const SpotsService = { getSpots, getMySpots, registerSpot };

export default SpotsService;

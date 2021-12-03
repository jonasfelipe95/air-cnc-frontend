import Api from "./Api";

export const reserveSpot = async (spotId, date) => {
  try {
    const response = await Api.post("/bookings", {
      spotId,
      date,
    });

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const SpotsService = { reserveSpot };

export default SpotsService;

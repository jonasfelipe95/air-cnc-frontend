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

export const getReserves = async (userId) => {
  try {
    const response = await Api.get(`/bookings?userId=${userId}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMyReserves = async (userId) => {
  try {
    const response = await Api.get(`/bookings/by-user?userId=${userId}`);

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const approveReserve = async (id) => {
  try {
    const response = await Api.put(`/bookings/${id}/approvals`, {});

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const rejectReserve = async (id) => {
  try {
    const response = await Api.put(`/bookings/${id}/rejections`, {});

    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const SpotsService = {
  reserveSpot,
  getReserves,
  approveReserve,
  rejectReserve,
  getMyReserves,
};

export default SpotsService;

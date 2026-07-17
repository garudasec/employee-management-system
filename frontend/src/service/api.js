const backendApiUrl = import.meta.env.VITE_BACKEND_URL;

export const createuserapi = `${backendApiUrl}/createuser`;
export const getuserapi = `${backendApiUrl}/getuser`;
export const updateuserapi = `${backendApiUrl}/updateuser`;
export const deleteuserapi = `${backendApiUrl}/deleteuser`;
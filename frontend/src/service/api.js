const backendApiUrl = import.meta.env.VITE_BACKEND_URL;

export const createuserapi = `${backendApiUrl}/createUser`;
export const getuserapi = `${backendApiUrl}/getUser`;
export const updateuserapi = `${backendApiUrl}/updateUser`;
export const deleteuserapi = `${backendApiUrl}/deleteUser`;
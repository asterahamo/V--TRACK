// import { request  } from "../../utils/request"
import { toast } from "react-toastify"; 
import { dataAction } from "../slices/authSlice";
import { request } from "../../utils/request";


// export const RegisterAdmin = (userData, setState) => {
//     return async (dispatch) => {
//         dispatch(dataAction.setLoading());
//         try {
//             const { data } = await axios.post('http://localhost:8000/api/auth/register_admin', userData);
//             dispatch(dataAction.registerAdmin(data));
//             setState(true);
//         } catch (error) {
//             toast.error(error.response.data.message)
//             console.log(error);
//         } finally {
//             dispatch(dataAction.setLoading());
//         }
//     }
// };

export const LoginAdmin = (userData, setState) => {
    return async (dispatch) => {
        dispatch(dataAction.setLoading());
        try{
            const {data} = await request.post(`/users/auth/login`, userData)
                const token = data.token || data.access_token; // Adjust this based on your API response

            if (token) {
                localStorage.setItem('authToken', token); // Save the token to localStorage
            } else {
                console.warn("No token found in login response data.", data);
                toast.error("Login successful, but no token was received.");
            }
            dispatch(dataAction.LoginAdmin(data));
            setState(true);
        }catch(error){
            console.log(error);
             toast.error(error.response.data.message);
        }finally{
            dispatch(dataAction.setLoading());
        }
    }
}

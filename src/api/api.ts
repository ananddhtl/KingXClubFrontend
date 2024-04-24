import axios from "axios";
// import axiosRetry from "axios-retry";

console.log(import.meta.env.VITE_BASEAPP_API_SERVER);

const baseURL = axios.create({
    baseURL: import.meta.env.VITE_BASEAPP_API_SERVER,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getTodayTicketStatus = () => {
    return baseURL.get("/ticket/today", {
    });
};
export const getLuckyWinners = () => {
    return baseURL.get("/ticket/lucky-winners", {
    });
};

// export const getTodayTicketStatus = (address: string) => {
//     return baseURL.get("/ticket/today", {
//         params: { address },
//     });
// };

export const logIn = (payload: any) => {
    return baseURL.post("/auth/login", payload);
};

export const register = (payload: any) => {
    return baseURL.post("/auth/register", payload);
};


export const logout = (payload: any) => {
    return baseURL.post("/auth/logout", payload);
};

export const buyOneTicket = (payload: any) => {
    return baseURL.post("/ticket/buy", payload);
};

// Configure retry options
// axiosRetry(iconChainBaseURL, {
//     retries: 3,
//     retryDelay: (retryCount) => retryCount * 1000,
//     retryCondition: (error: any) => {
//         return Promise.resolve(
//             axiosRetry.isNetworkError(error) || (error.response && error.response.status >= 500)
//         );
//     },
// });
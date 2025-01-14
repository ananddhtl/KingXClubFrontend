import axios from "axios";
// import axiosRetry from "axios-retry";

console.log(import.meta.env.VITE_BASEAPP_API_SERVER);

const baseURL = axios.create({
    baseURL: import.meta.env.VITE_BASEAPP_API_SERVER,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}` || "",
    },
});

export const getTodayTicketStatus = () => {
    return baseURL.get("/ticket/today");
};
export const getLuckyWinners = () => {
    return baseURL.get("/ticket/lucky-winners");
};

export const getTodaysTicket = () => {
    return baseURL.get("/ticket/today/all");
};

export const getTodaysTicketForAgent = () => {
    return baseURL.get("/ticket/agent/today/all");
};

export const getPurchasedTicket = () => {
    return baseURL.get("/ticket/me");
};

export const getAllResult = () => {
    return baseURL.get("/result/all");
};

export const getUserDetail = () => {
    return baseURL.get("/user/me");
};

export const getUserDetailForAgent = () => {
    return baseURL.get("/user/agent/getUser");
};

export const getAllUser = () => {
    return baseURL.get("/user/all");
};

// export const getTodayTicketStatus = (address: string) => {
//     return baseURL.get("/ticket/today", {
//         params: { address },
//     });
// };

export const logIn = (payload: any) => {
    return baseURL.post("/auth/login", payload);
};

export const publishResultAPI = (payload: any) => {
    return baseURL.post("/result/publish", payload, {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}` || "",
        },
    });
};

export const getMyActivity = () => {
    return baseURL.get("/activity/me", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}` || "",
        },
    });
};

export const register = (payload: any) => {
    return baseURL.post("/auth/register", payload);
};

export const logout = (payload: any) => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    return baseURL.post("/auth/logout", payload);
};

export const buyTicketAPI = (payload: any) => {
    return baseURL.post("/ticket/buy", payload);
};

export const agentFormAPI = (payload: any) => {
    return baseURL.post("/user/submit/agent-form", payload);
};

export const makeAgentFormAPI = (payload: any) => {
    return baseURL.post("/user/make/agent", payload);
};

export const updateBalance = (payload: any) => {
    return baseURL.post("/user/update-balance", payload);
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

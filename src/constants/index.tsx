import { ClubPanther, ClubTiger, ClubLion, ClubPuma, JackpotPlay } from "@/constants/assets/Icons";

export const routes = {
    INDEX: '/',
    PLACE_BID: '/place-bid',
    RESULT: '/result',
    BID_HISTORY: '/bid-history',
    MASTER_RESULT: '/master/result',
    MASTER_USER: '/master/users',
    ADMIN: '/admin',
    AGENT: '/agent',
    PROFILE: '/profile',
    LOGIN: '/login',
    SIGNUP: '/signup',
    AGENT_FORM: '/apply/agent',
    MAKE_AGENT: '/make/agent',
    REFERRAL: '/refer',
    NOTIFICATION: '/notifications',
    CLUBLUDO: '/ludo-panel'
};

export enum ROLE {
    MASTER = 'master',
    ADMIN = 'admin',
    AGENT = 'agent',
    USER = 'user',
}

export const CLUBS = [
    {
        place: "Club Panther",
        icon: <ClubPanther />,
        time: ["00:08:00", "00:14:00", "00:19:00", "01:00:15"],
    },
    {
        place: "Club Tiger",
        icon: <ClubTiger />,
        time: ["00:09:00", "00:15:00", "00:20:00", "01:01:15"],
    },
    {
        place: "Club Lion",
        icon: <ClubLion />,
        time: ["00:10:00", "00:16:00", "00:21:00", "01:02:30"],
    },
    {
        place: "Club Puma",
        icon: <ClubPuma />,
        time: ["00:12:00", "00:18:00", "00:22:00", "01:03:30"],
    },
    {
        place: "Club Ludo",
        icon: <JackpotPlay />,
        time: ["00:12:00", "00:18:00", "00:22:00", "01:03:30"],
    },
    
    // Uncomment and use if needed:
    // {
    //     place: "Club Cobra",
    //     icon: <ClubCobra />,
    //     time: ["00:11:00", "00:17:00", "00:21:00", "01:02:00"],
    // },
];

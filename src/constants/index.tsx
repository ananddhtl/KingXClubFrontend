import { ClubPanther, ClubTiger, ClubLion, ClubPuma, ClubCobra } from "@/constants/assets/Icons";

export const routes = { INDEX: '/', PLACE_BID: '/place-bid', RESULT: '/result', BID_HISTORY: '/bid-history', MASTER: '/master', ADMIN: '/admin', AGENT: '/agent', PROFILE: '/profile', LOGIN: '/login', SIGNUP: '/signup', AGENT_FORM :'/apply/agent', REFERRAL : '/refer', NOTIFICATION: '/notifications' }

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
      time: ["07:00", "13:00", "17:00", "01:00"],
  },
  {
      place: "Club Tiger",
      icon: <ClubTiger />,
      time: ["08:00", "14:00", "18:00", "22:00"],
  },
  {
      place: "Club Lion",
      icon: <ClubLion />,
      time: [ "09:00", "13:00", "19:00", "23:00"],
  },
  {
      place: "Club Puma",
      icon: <ClubPuma />,
      time: ["10:00", "16:00", "20:00", "00:00"],
  },
  {
      place: "Club Cobra",
      icon: <ClubCobra />,
      time: ["11:00", "17:00", "21:00", "02:00"],
  },
];

//1. show 2 day time
// show wallet balance at top
//4. Agents dashboard to show all the customer he brings
/**
 * Deposit/Withdraw
 * No. of customer -> balance, ticket purchase information
 */
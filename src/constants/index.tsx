import { ClubPanther, ClubTiger, ClubLion, ClubPuma, ClubCobra } from "@/constants/assets/Icons";

export const routes = { INDEX: '/', PLACE_BID: '/place-bid', RESULT: '/result', BID_HISTORY: '/bid-history', ADMIN: '/admin', PROFILE: '/profile', LOGIN: '/login', SIGNUP: '/signup', AGENT :'/agent', REFERRAL : '/refer' }

export const CLUBS = [
  {
      place: "Club Panther",
      icon: <ClubPanther />,
      time: ["07:00", "11:00", "15:00", "19:00"],
  },
  {
      place: "Club Tiger",
      icon: <ClubTiger />,
      time: ["09:00", "13:00", "17:00", "21:00"],
  },
  {
      place: "Club Lion",
      icon: <ClubLion />,
      time: [ "00:00", "11:00", "16:00", "20:00"],
  },
  {
      place: "Club Puma",
      icon: <ClubPuma />,
      time: ["01:00", "12:00", "17:00", "21:00"],
  },
  {
      place: "Club Cobra",
      icon: <ClubCobra />,
      time: ["03:00", "08:00", "15:00", "22:00"],
  },
];
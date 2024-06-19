import { ClubPanther, ClubTiger, ClubLion, ClubPuma, ClubCobra } from "@/constants/assets/Icons";

export const routes = { INDEX: '/', PLACE_BID: '/place-bid', RESULT: '/result', BID_HISTORY: '/bid-history', ADMIN: '/admin', PROFILE: '/profile', LOGIN: '/login', SIGNUP: '/signup', AGENT :'/agent', REFERRAL : '/refer' }

export const EXTERNAL_LINKS = {
    TWITTER: 'https://twitter.com/cedro_finance',
    DISCORD: 'https://discord.gg/cedro-finance',
    TELEGRAM: 'https://t.me/cedrofinance',
    MEDIUM: 'https://medium.com/@cedrolabs',
    APP: 'https://app.cedro.finance/'
}  
export const MENU_LIST = {
    HowItWorks: {
        title: 'Home',
        href: routes.INDEX,
      },
      Benefits: {
        title: 'Features',
        href: '#features',
      },
      CalculateROI: {
        title: 'How it works',
        href: '#steps',
      },
      FAQ: {
        title: 'FAQ',
        href: '#faq',
      },
}


export const CLUBS = [
  {
      place: "Club Panther",
      icon: <ClubPanther />,
      time: ["07:00", "11:00", "15:00", "18:00", "23:00"],
  },
  {
      place: "Club Tiger",
      icon: <ClubTiger />,
      time: ["08:00", "11:00", "16:00", "19:00", "23:00"],
  },
  {
      place: "Club Lion",
      icon: <ClubLion />,
      time: ["09:00", "12:00", "17:00", "20:00", "23:30"],
  },
  {
      place: "Club Puma",
      icon: <ClubPuma />,
      time: ["10:00", "12:00", "17:00", "21:00", "23:45"],
  },
  {
      place: "Club Cobra",
      icon: <ClubCobra />,
      time: ["11:00", "13:00", "15:00", "18:00", "22:00"],
  },
];
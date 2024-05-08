import Logo from "@/assets/image/logo.png";
import { routes } from "@/constants";
import { NavLink } from "react-router-dom";

export const Profile = () => {
    return (
        <section className="bg-[#000000] flex flex-col items-center justify-start gap-10 min-h-screen p-4">
            <span className="text-[40px] font-sans font-light">Profile</span>
            <img src={Logo} alt="logo" />
            <div className="flex flex-col items-center gap-4">
              <span className="text-xl text-[#FE480F] font-semibold">Wallat Balance: Rs 1000</span>
                <NavLink to={routes.BID_HISTORY} className="bg-orange-600 relative flex items-center justify-end w-[70dvw] h-[52px] px-4 rounded-3xl">
                    <button className="absolute flex items-center justify-start h-full w-[85%] top-0 left-0 rounded-3xl bg-white px-8 py-3 text-black">
                        <svg
                            width="22"
                            height="22"
                            viewBox="0 0 22 22"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M2.25896 4.32276L0.587083 2.65088C0.53901 2.60269 0.477709 2.56985 0.410952 2.55654C0.344195 2.54322 0.274988 2.55003 0.212104 2.5761C0.149221 2.60216 0.0954932 2.64631 0.0577325 2.70295C0.0199718 2.75959 -0.000121242 2.82617 5.50408e-07 2.89424V7.90713C5.50408e-07 8.09686 0.15399 8.25085 0.343726 8.25085H5.35662C5.42469 8.25098 5.49126 8.23088 5.5479 8.19312C5.60454 8.15536 5.64869 8.10163 5.67476 8.03875C5.70083 7.97587 5.70763 7.90666 5.69432 7.8399C5.68101 7.77314 5.64817 7.71184 5.59997 7.66377L3.73286 5.79665C4.94997 4.09679 6.72452 2.87744 8.74775 2.35075C10.771 1.82406 12.9148 2.02337 14.8063 2.914C16.6978 3.80464 18.2171 5.33022 19.1 7.22532C19.9829 9.12041 20.1735 11.2651 19.6385 13.2861C19.1035 15.3072 17.8769 17.0767 16.1721 18.2869C14.4673 19.497 12.3921 20.0712 10.3077 19.9094C8.22335 19.7477 6.26162 18.8603 4.7639 17.4016C3.26617 15.943 2.32724 14.0054 2.11047 11.926C2.0824 11.6538 1.94733 11.4039 1.735 11.2312C1.52267 11.0586 1.25045 10.9774 0.978243 11.0055C0.706034 11.0335 0.456128 11.1686 0.283502 11.3809C0.110875 11.5933 0.0296686 11.8655 0.0577464 12.1377C0.322261 14.683 1.46586 17.0564 3.29166 18.8494C5.11746 20.6424 7.51123 21.7428 10.0609 21.9611C12.6105 22.1794 15.1565 21.502 17.2606 20.0455C19.3646 18.589 20.8951 16.4446 21.5885 13.9813C22.2818 11.5181 22.0948 8.89016 21.0595 6.54997C20.0242 4.20978 18.2054 2.30374 15.9162 1.15998C13.6271 0.0162188 11.0108 -0.293697 8.51778 0.283583C6.02477 0.860863 3.811 2.28922 2.25759 4.32276H2.25896ZM10.6555 5.50105C10.929 5.50105 11.1913 5.60969 11.3846 5.80307C11.578 5.99646 11.6867 6.25874 11.6867 6.53223V10.6459L14.475 11.7624C14.7207 11.8695 14.915 12.068 15.0168 12.316C15.1186 12.564 15.1199 12.8418 15.0203 13.0907C14.9207 13.3396 14.7281 13.5399 14.4834 13.6492C14.2386 13.7585 13.9609 13.7682 13.7091 13.6762L10.2719 12.3013C10.0807 12.2247 9.9169 12.0926 9.80148 11.9221C9.68607 11.7515 9.62436 11.5503 9.62431 11.3444V6.53223C9.62431 6.25874 9.73295 5.99646 9.92634 5.80307C10.1197 5.60969 10.382 5.50105 10.6555 5.50105Z"
                                fill="#F6571E"
                            />
                        </svg>
                        Bid History
                    </button>
                    <svg
                        width="10"
                        height="19"
                        viewBox="0 0 10 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.5L9 9.5L1 17.5"
                            stroke="white"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </NavLink>

                <div className="bg-orange-600 relative flex items-center justify-end w-[70dvw] h-[52px] px-4 rounded-3xl">
                    <button className="absolute flex items-center justify-start h-full w-[85%] top-0 left-0 rounded-3xl bg-white px-8 py-3 text-black">
                        <svg
                            width="22"
                            height="20"
                            viewBox="0 0 22 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.97957 19.9036C4.85927 19.9003 5.71309 19.6056 6.40754 19.0656C7.102 18.5256 7.59795 17.7707 7.81787 16.9189H14.0698C14.2601 17.6996 14.6799 18.4053 15.275 18.9452C15.8701 19.4851 16.6132 19.8343 17.4086 19.948C18.2041 20.0617 19.0153 19.9345 19.7378 19.5829C20.4603 19.2313 21.0609 18.6714 21.4622 17.9753C21.8636 17.2792 22.0473 16.4789 21.9896 15.6775C21.932 14.8761 21.6356 14.1103 21.1388 13.4788C20.6419 12.8473 19.9673 12.3792 19.2019 12.1346C18.4366 11.89 17.6155 11.8803 16.8445 12.1066L13.7454 6.80685C14.3058 6.25181 14.6885 5.54279 14.8451 4.76981C15.0018 3.99682 14.9252 3.19473 14.6251 2.46537C14.325 1.736 13.8149 1.11225 13.1597 0.673299C12.5044 0.23435 11.7335 0 10.9448 0C10.1561 0 9.38523 0.23435 8.72997 0.673299C8.07472 1.11225 7.56467 1.736 7.26458 2.46537C6.96449 3.19473 6.88788 3.99682 7.0445 4.76981C7.20111 5.54279 7.58387 6.25181 8.1442 6.80685L5.05207 12.1096C4.7039 12.0054 4.34298 11.9498 3.97957 11.9445C2.92412 11.9445 1.9119 12.3638 1.16559 13.1101C0.419275 13.8564 0 14.8686 0 15.9241C0 16.9795 0.419275 17.9917 1.16559 18.738C1.9119 19.4844 2.92412 19.9036 3.97957 19.9036ZM17.9081 13.9343C18.3016 13.9343 18.6863 14.051 19.0135 14.2696C19.3408 14.4882 19.5958 14.799 19.7464 15.1626C19.897 15.5262 19.9364 15.9263 19.8596 16.3122C19.7829 16.6982 19.5933 17.0528 19.3151 17.331C19.0368 17.6093 18.6822 17.7988 18.2963 17.8756C17.9103 17.9524 17.5102 17.913 17.1466 17.7624C16.783 17.6118 16.4723 17.3567 16.2536 17.0295C16.035 16.7023 15.9183 16.3176 15.9183 15.9241C15.9183 15.3963 16.1279 14.8902 16.5011 14.5171C16.8742 14.1439 17.3804 13.9343 17.9081 13.9343ZM10.9438 1.99555C11.3374 1.99555 11.7221 2.11225 12.0493 2.33089C12.3765 2.54953 12.6315 2.86029 12.7821 3.22388C12.9328 3.58746 12.9722 3.98754 12.8954 4.37352C12.8186 4.7595 12.6291 5.11405 12.3508 5.39233C12.0725 5.6706 11.718 5.86011 11.332 5.93689C10.946 6.01366 10.546 5.97426 10.1824 5.82366C9.81878 5.67306 9.50802 5.41802 9.28938 5.0908C9.07074 4.76358 8.95404 4.37888 8.95404 3.98533C8.95404 3.45761 9.16368 2.9515 9.53683 2.57834C9.90999 2.20519 10.4161 1.99555 10.9438 1.99555ZM9.87133 7.79975C10.2195 7.904 10.5804 7.95958 10.9438 7.96491C11.3087 7.95997 11.6711 7.90371 12.0203 7.79776L15.1164 13.0936C14.6085 13.6 14.2469 14.2342 14.0698 14.9292H7.81787C7.64216 14.2374 7.28337 13.6057 6.7792 13.1005L9.87133 7.79975ZM3.97957 13.9343C4.37312 13.9343 4.75782 14.051 5.08504 14.2696C5.41226 14.4882 5.66729 14.799 5.8179 15.1626C5.9685 15.5262 6.0079 15.9263 5.93113 16.3122C5.85435 16.6982 5.66484 17.0528 5.38656 17.331C5.10829 17.6093 4.75374 17.7988 4.36776 17.8756C3.98178 17.9524 3.5817 17.913 3.21811 17.7624C2.85453 17.6118 2.54377 17.3567 2.32513 17.0295C2.10649 16.7023 1.98979 16.3176 1.98979 15.9241C1.98979 15.3963 2.19942 14.8902 2.57258 14.5171C2.94574 14.1439 3.45185 13.9343 3.97957 13.9343Z"
                                fill="#F6571E"
                            />
                        </svg>
                        Referral
                    </button>
                    <svg
                        width="10"
                        height="19"
                        viewBox="0 0 10 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.5L9 9.5L1 17.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="bg-orange-600 relative flex items-center justify-end w-[70dvw] h-[52px] px-4 rounded-3xl">
                    <button className="absolute flex items-center justify-start h-full w-[85%] top-0 left-0 rounded-3xl bg-white px-8 py-3 text-black">
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M12.4599 0.726312L12.4599 0.726048L12.4702 0.724963C12.5743 0.714009 12.9383 0.709908 13.2702 0.719256L13.2704 0.719261C14.6141 0.758208 15.8015 1.26119 16.7521 2.20203L16.7523 2.20223C17.4057 2.85076 17.8924 3.69289 18.1312 4.58463L18.1314 4.58556C18.1978 4.83835 18.2396 5.22081 18.2556 5.5964C18.2717 5.97278 18.2628 6.36407 18.22 6.63621L18.2199 6.63648C17.942 8.3868 16.7631 9.90213 15.1486 10.5997L15.148 10.5999C14.7803 10.7575 14.4812 10.8617 14.1609 10.9246C13.8413 10.9874 13.5088 11.0075 13.076 11.0051L13.0756 11.0051C12.4176 11.0004 12.2381 10.986 11.8204 10.8717C9.98004 10.3845 8.55712 8.96686 8.06979 7.14428L8.06979 7.14428L8.06957 7.14342C8.00318 6.89063 7.96144 6.50817 7.94542 6.13258C7.92936 5.7562 7.93823 5.36491 7.98106 5.09277L7.98111 5.0925C8.3077 3.03545 9.86146 1.34463 11.8802 0.851691C12.1046 0.794441 12.3633 0.741564 12.4599 0.726312ZM14.0727 2.35385L14.0715 2.35349C13.8989 2.30357 13.5968 2.26352 13.2842 2.24561C12.9701 2.22761 12.6768 2.23378 12.5195 2.26403L12.5175 2.26439C11.1893 2.50588 10.1477 3.34332 9.68696 4.5306L9.68673 4.53119C9.35029 5.38999 9.38136 6.50582 9.7624 7.34764L9.76266 7.34822C10.0159 7.9124 10.5086 8.51093 10.9733 8.83098C13.0098 10.2302 15.7954 9.32664 16.5672 7.03351L16.5675 7.03272C16.6344 6.83656 16.67 6.71409 16.6925 6.57927C16.7153 6.44228 16.7256 6.2864 16.735 6.02219C16.7488 5.52453 16.7391 5.37177 16.6612 5.05988L16.6607 5.05787C16.3445 3.73542 15.3804 2.72302 14.0727 2.35385Z"
                                fill="#FE480F"
                                stroke="#F6571E"
                                strokeWidth="0.4"
                            />
                            <path
                                d="M5.68494 23.016L5.64415 23.2118C5.45165 23.1717 5.24424 23.0883 5.05952 22.9868C4.87612 22.886 4.70102 22.7597 4.58021 22.625C4.47086 22.5045 4.32007 22.2719 4.23779 22.0922C4.17552 21.959 4.12446 21.8335 4.09233 21.6868C4.06013 21.5398 4.04882 21.3805 4.05596 21.1791C4.06997 20.7836 4.15697 20.1952 4.32023 19.169L4.32031 19.1685C4.63381 17.2267 4.73018 16.7748 4.96847 16.1523L4.96848 16.1523C5.94627 13.5995 8.22502 11.7977 10.9414 11.4365L10.9423 11.4364C11.0479 11.4229 11.361 11.4136 11.7629 11.4078C12.1722 11.402 12.6903 11.3996 13.2186 11.402L13.2193 11.402C14.9881 11.416 15.1948 11.4246 15.6509 11.5237L15.6514 11.5238C17.1791 11.8601 18.452 12.5634 19.5067 13.6518L19.5073 13.6525C20.4402 14.6238 21.0295 15.681 21.3522 16.9621C21.4081 17.1786 21.6048 18.1159 21.7914 19.0303C21.9777 19.9431 22.159 20.858 22.1815 21.0249M5.68494 23.016L5.64267 23.2115C5.6843 23.2205 5.75648 23.2251 5.83726 23.2288C5.92624 23.2329 6.04801 23.2365 6.20356 23.2399C6.51493 23.2465 6.96624 23.2518 7.57088 23.2559C8.78041 23.2641 10.6068 23.2676 13.1615 23.2676C13.4306 23.2676 13.69 23.2676 13.9403 23.2676C17.3454 23.2678 19.0431 23.2678 19.9362 23.2388C20.4124 23.2233 20.6768 23.1993 20.8535 23.1574C21.0158 23.1189 21.1075 23.0631 21.1951 23.0098C21.2104 23.0005 21.2255 22.9913 21.2409 22.9822L21.1396 22.8098M5.68494 23.016C5.34744 22.9457 4.93025 22.716 4.72869 22.491M5.68494 23.016C5.85837 23.0535 8.05212 23.0676 13.1615 23.0676C20.2121 23.0676 20.6677 23.0751 21.0139 22.8842C21.054 22.8622 21.0925 22.8375 21.1396 22.8098M21.1396 22.8098L21.2404 22.9825C21.5533 22.8 21.8412 22.494 21.982 22.1909L21.9832 22.1881L21.9832 22.1881C22.0595 22.0171 22.1186 21.8047 22.154 21.6013C22.1891 21.4003 22.2042 21.1899 22.1815 21.0249M21.1396 22.8098L4.72869 22.491M22.1815 21.0249C22.1816 21.0251 22.1816 21.0252 22.1816 21.0253L21.9834 21.052L22.1815 21.0246C22.1815 21.0247 22.1815 21.0248 22.1815 21.0249ZM4.72869 22.491C4.63494 22.3879 4.49431 22.1723 4.41931 22.0082C4.18025 21.4973 4.18962 21.2629 4.51775 19.2004C4.83181 17.2551 4.92556 16.8238 5.15525 16.2238C6.10681 13.7395 8.324 11.9863 10.9677 11.6348L4.72869 22.491ZM10.9705 18.2365L10.9705 18.2365L10.6007 21.6271L8.31741 21.6488L8.3173 21.6488C8.25081 21.6495 8.186 21.6502 8.12282 21.6508C6.84666 21.6637 6.23723 21.6699 5.91942 21.6332C5.75462 21.6141 5.70776 21.5867 5.69 21.5724C5.66803 21.5547 5.65741 21.5356 5.61035 21.4509C5.60504 21.4413 5.59928 21.4309 5.59298 21.4196L10.9705 18.2365ZM10.9705 18.2365L11.3492 14.7686L11.0458 14.4613C11.0458 14.4613 11.0458 14.4613 11.0458 14.4612C10.6437 14.0543 10.3171 13.5274 10.2504 13.1082L10.9705 18.2365ZM12.6124 13.7659L12.6131 13.7662C12.8916 13.863 13.3094 13.8602 13.599 13.7656C13.7786 13.7027 14.0177 13.5099 14.205 13.2833C14.2966 13.1725 14.3669 13.0641 14.4077 12.974C14.4178 12.9519 14.4251 12.9329 14.4304 12.917C14.4254 12.9171 14.42 12.9172 14.4145 12.9173C14.2773 12.9274 13.5918 12.9364 12.8821 12.941C12.7796 12.9423 12.6848 12.9433 12.5971 12.9443C12.3602 12.9469 12.1753 12.9489 12.0307 12.9535C11.9261 12.9569 11.851 12.9616 11.7976 12.9671C11.8029 12.9773 11.8079 12.987 11.8132 12.9973C11.8242 13.0185 11.8365 13.0423 11.8544 13.0781C11.9199 13.209 12.0412 13.3597 12.1876 13.4921C12.3348 13.6251 12.4899 13.7239 12.6124 13.7659ZM16.0786 13.2492L16.0786 13.2492L16.0767 13.2485C16.0162 13.2274 15.9587 13.2077 15.9086 13.1909C15.9063 13.1989 15.904 13.2073 15.9015 13.2161C15.893 13.2467 15.8832 13.2821 15.8717 13.3231C15.7617 13.7408 15.4951 14.1588 15.1273 14.5315L15.1264 14.5324L14.852 14.8069L15.2306 18.2834L15.2306 18.2834L15.6002 21.6723H17.9146C19.1384 21.6723 19.7566 21.6722 20.0858 21.6601C20.2527 21.654 20.3305 21.645 20.3711 21.6357C20.3934 21.6307 20.3957 21.6289 20.4086 21.6187C20.4097 21.6179 20.4109 21.6169 20.4121 21.616L20.4121 21.6159L20.4173 21.6121C20.5969 21.4814 20.6512 21.3534 20.6491 21.2778L20.649 21.2762C20.6491 21.2773 20.6489 21.2732 20.6475 21.261C20.6462 21.2494 20.6442 21.2339 20.6413 21.2144C20.6355 21.1753 20.627 21.1235 20.6158 21.0601C20.5935 20.9336 20.5616 20.765 20.5228 20.5673C20.4453 20.1723 20.3409 19.6645 20.2326 19.1521C20.0145 18.12 19.7856 17.0932 19.7262 16.9098C19.1599 15.2163 17.7768 13.8243 16.0786 13.2492ZM13.7454 18.5559L13.7454 18.5556L13.412 15.364L13.1064 15.3551C13.106 15.355 13.1056 15.355 13.1052 15.355C12.9922 15.353 12.8874 15.3519 12.8053 15.3516C12.8021 15.3806 12.7984 15.413 12.7945 15.4487C12.7754 15.621 12.7483 15.8692 12.7152 16.175C12.649 16.7866 12.5588 17.6279 12.4604 18.5513L12.4604 18.5514L12.1232 21.6957H13.1006H14.0782L13.7454 18.5559Z"
                                fill="#FE480F"
                                stroke="#F6571E"
                                strokeWidth="0.4"
                            />
                        </svg>
                        Agent
                    </button>
                    <svg
                        width="10"
                        height="19"
                        viewBox="0 0 10 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.5L9 9.5L1 17.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
                <div className="bg-orange-600 relative flex items-center justify-end w-[70dvw] h-[52px] px-4 rounded-3xl">
                    <button className="absolute flex items-center justify-start h-full w-[85%] top-0 left-0 rounded-3xl bg-white px-8 py-3 text-black">
                        <svg
                            width="22"
                            height="20"
                            viewBox="0 0 22 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.3715 0.00184067C20.0872 0.0150648 19.8194 0.0977153 19.5814 0.190284H19.5781C19.3368 0.286159 18.1896 0.768839 16.4473 1.49947C14.705 2.23341 12.4437 3.18554 10.1989 4.13107C5.71593 6.01881 1.30899 7.8768 1.30899 7.8768L1.36189 7.85696C1.36189 7.85696 1.05774 7.95614 0.740357 8.17434C0.578362 8.28013 0.399836 8.4256 0.244454 8.65371C0.0890701 8.88183 -0.0365593 9.23227 0.00972547 9.59262C0.0857643 10.2042 0.482488 10.5712 0.766805 10.7729C1.05443 10.9778 1.32883 11.0737 1.32883 11.0737H1.33544L5.46798 12.4656C5.65311 13.0606 6.72757 16.5915 6.98544 17.4048C7.13752 17.8908 7.28629 18.1949 7.47143 18.4263C7.56069 18.5453 7.66648 18.6445 7.79211 18.7239C7.8417 18.7536 7.8946 18.7768 7.9475 18.7966C7.96403 18.8065 7.98056 18.8098 8.00039 18.8131L7.95741 18.8032C7.97064 18.8065 7.98056 18.8164 7.99047 18.8197C8.02353 18.8297 8.04668 18.833 8.08965 18.8396C8.74425 19.0379 9.26991 18.6313 9.26991 18.6313L9.29966 18.6082L11.7395 16.3865L15.8291 19.5239L15.9216 19.5636C16.7746 19.9372 17.6375 19.7289 18.0937 19.3619C18.5532 18.9917 18.7318 18.5189 18.7318 18.5189L18.7615 18.4429L21.9221 2.25324C22.0113 1.85322 22.0345 1.47963 21.9353 1.11597C21.8361 0.752309 21.5816 0.411788 21.2741 0.229956C20.9633 0.0448188 20.6559 -0.0113834 20.3715 0.00184067ZM20.2856 1.7375C20.2823 1.7904 20.2922 1.78379 20.2691 1.88628V1.89619L17.1383 17.9172C17.125 17.9403 17.1019 17.9899 17.0391 18.0395C16.9729 18.0924 16.9201 18.1255 16.6457 18.0164L11.6436 14.1814L8.62193 16.9353L9.25668 12.8821C9.25668 12.8821 17.092 5.57911 17.4292 5.26504C17.7664 4.95096 17.654 4.88484 17.654 4.88484C17.6771 4.50134 17.1449 4.77244 17.1449 4.77244L6.83998 11.1564L6.83667 11.1398L1.89747 9.47691V9.47361C1.89416 9.47361 1.88755 9.4703 1.88424 9.4703C1.88755 9.4703 1.91069 9.46038 1.91069 9.46038L1.93714 9.44716L1.96359 9.43724C1.96359 9.43724 6.37383 7.57925 10.8568 5.69151C13.1016 4.74599 15.3629 3.79385 17.1019 3.05992C18.8409 2.32928 20.1269 1.79371 20.1996 1.76395C20.2691 1.7375 20.236 1.7375 20.2856 1.7375Z"
                                fill="#FE480F"
                            />
                        </svg>
                        Telegram
                    </button>
                    <svg
                        width="10"
                        height="19"
                        viewBox="0 0 10 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M1 1.5L9 9.5L1 17.5"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
};

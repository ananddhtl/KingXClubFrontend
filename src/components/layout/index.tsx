import { ReactNode, FC, useContext, createContext, useState } from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./header";
import Footer from "./footer";

const ProfileContext = createContext(null);
interface LayoutProps {
    children: ReactNode;
    className?: string;
    hideheader?: boolean;
    hideFooter?: boolean;
    headerClass?: string;
    mainClass?: string;
}

export interface IUser {
    amount: number,
    email: string, 
    name: string, 
    phone: string

} 
const Layout: FC<LayoutProps> = ({
    children,
    className,
    hideheader,
    hideFooter,
    headerClass,
    mainClass,
}: LayoutProps) => {
    const [user, setUser] = useState<null | IUser>(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    return (
        <ProfileContext.Provider value={{user, setUser, showLoginModal, setShowLoginModal}}>
            <HelmetProvider>
                <div
                    className={`scroll-smooth flex-col justify-between items-center min-h-screen site-layout ${
                        className ?? ""
                    }`}
                >
                    {!hideheader && <Header setShowLoginModal={setShowLoginModal} showLoginModal={showLoginModal} user={user} setUser={setUser} classname={headerClass} />}
                    <main className={`w-full overflow-hidden ${mainClass}`}>{children}</main>
                    {!hideFooter && <Footer />}
                </div>
            </HelmetProvider>
        </ProfileContext.Provider>
    );
};

export const useProfileContext = () => {
    return useContext(ProfileContext);
};

export default Layout;

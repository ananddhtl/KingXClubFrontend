import { ReactNode, FC } from "react";
import { HelmetProvider } from "react-helmet-async";
import Header from "./header";
import Footer from "./footer";

interface LayoutProps {
    children: ReactNode;
    className?: string;
    hideheader?: boolean;
    hideFooter?: boolean;
    headerClass?: string;
    mainClass?: string;
}

const Layout: FC<LayoutProps> = ({
    children,
    className,
    hideheader,
    hideFooter,
    headerClass,
    mainClass,
}: LayoutProps) => {
    return (
        <HelmetProvider>
            <div
                className={`scroll-smooth flex-col justify-between items-center min-h-screen site-layout ${
                    className ?? ""
                }`}
            >
                {!hideheader && (
                    <Header />
                )}
                <main className={`w-full overflow-hidden ${mainClass}`}>{children}</main>
                {!hideFooter && <Footer />}
            </div>
        </HelmetProvider>
    );
};

export default Layout;

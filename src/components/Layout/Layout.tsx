import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PageLoader from "../PageLoader/PageLoader";

function Layout() {

    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

    return (
        <>
            <Header />
            {isLoading && (<PageLoader />)}
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout() {

    const navigation = useNavigation()
    const isLoading = navigation.state === 'loading'

    return (
        <>
            <Header />
            {isLoading && <p>Загрузка...</p>}
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
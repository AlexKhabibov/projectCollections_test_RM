import { Outlet, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


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
import {
    isRouteErrorResponse,
    useRouteError,
} from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    let message = "Что-то пошло не так";

    if (isRouteErrorResponse(error)) {
        message = error.statusText;
    } else if (error instanceof Error) {
        message = error.message;
    }

    return (
        <>
            <h2>Ошибка</h2>
            <p>{message}</p>
        </>
    );
}

export default ErrorPage;
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import CollectionsListPage from "../pages/CollectionListPage/CollectionListPage";
import CollectionDetailsPage from "../pages/CollectionDetailsPage/CollectionDetailsPage";
import QuestionsListPage from "../pages/QuestionsListPage/QuestionsListPage";
import QuestionDetailsPage from "../pages/QuestionDetailsPage/QuestionDetailsPage";
import Layout from "../components/Layout/Layout";
import SimulatorStartPage from "../pages/SimulatorStartPage/SimulatorStartPage";
import SimulatorSessionPage from "../pages/SimulatorSessionPage/SimulatorSessionPage";
import SimulatorResultPage from "../pages/SimulatorResultPage/SimulatorResultPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <CollectionsListPage />,
            },

            {
                path: 'collections/:id',
                element: <CollectionDetailsPage />,
            },

            {
                path: 'questions',
                element: <QuestionsListPage />,
            },

            {
                path: "questions/:id",
                element: <QuestionDetailsPage />,
            },
            {
                path: "simulator",
                element: <SimulatorStartPage />,
            },
            {
                path: "simulator-session",
                element: <SimulatorSessionPage />
            },
            {
                path: "/simulator-result",
                element: <SimulatorResultPage />,
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);
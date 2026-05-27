import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import QuestionsListPage from "../pages/QuestionsListPage/QuestionsListPage";
import QuestionDetailsPage from "../pages/QuestionDetailsPage/QuestionDetailsPage";
import CollectionsPage from "../pages/CollectionsPage/CollectionsPage";
import { getCollectionsList } from "../api/collectionsApi";
import { getQuestionsList } from "../api/questionsApi";
import { getQuestionDetails } from "../api/questionDetailsApi";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'collections',
                element: <CollectionsPage />,
                loader: getCollectionsList
            },
            {
                path: 'questions', 
                element: <QuestionsListPage />,
                loader: getQuestionsList
            },
            {
                path: 'questions/:id', 
                element: <QuestionDetailsPage />,
                loader: getQuestionDetails
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
    }
]);

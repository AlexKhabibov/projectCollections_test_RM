import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import CollectionsListPage from "../pages/CollectionListPage/CollectionListPage";
import CollectionDetailsPage from "../pages/CollectionDetailsPage/CollectionDetailsPage";
import QuestionsListPage from "../pages/QuestionsListPage/QuestionsListPage";
import QuestionDetailsPage from "../pages/QuestionDetailsPage/QuestionDetailsPage";
import { getCollectionsList } from "../api/collectionsApi";
import { getQuestionsList } from "../api/questionsApi";
import { getQuestionDetails } from "../api/questionDetailsApi";
import { getCollectionDetails } from "../api/collectionDetailsApi";
import Layout from "../components/Layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <CollectionsListPage />,
                loader: getCollectionsList
            },

            {
                path: 'collections/:id',
                element: <CollectionDetailsPage />,
                loader: getCollectionDetails
            },

            {
                path: 'questions',
                element: <QuestionsListPage />,
                loader: getQuestionsList
            },

            {
                path: "questions/:id",
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
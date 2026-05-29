import {
    useNavigate,
    useSearchParams
} from "react-router-dom";

export function usePagination() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const changePage = (page: number) => {
        const params = new URLSearchParams(searchParams);
        params.set("page", String(page));
        navigate(`/questions?${params.toString()}`);
    };

    return {
        changePage
    };
}
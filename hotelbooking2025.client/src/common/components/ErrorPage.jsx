import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export function ErrorPage() {
    const error = useRouteError();
    if (isRouteErrorResponse(error))
        return (<>
            <h1>
                {error.status} {error.statusText}
            </h1>
            {error.data?.message && (<p>{error.data.message}</p>)}
        </>);
    else if (error instanceof Error)
        return (<>
            <h1>Error</h1>
            <p>{error.message}</p>
    </>);
}
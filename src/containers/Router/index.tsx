import {
    createHashRouter,
} from "react-router-dom";
import Layout from "../Layout";
import LandingPage from "../Landing-Page";

const router = createHashRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <LandingPage />
            }
        ]
    }
])

if (import.meta.hot) {
    import.meta.hot.dispose(() => router.dispose());
}

export default router;
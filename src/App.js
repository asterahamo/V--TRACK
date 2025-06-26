import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";



import Home from "./components/Home";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import AllViolations from "./components/AllViolations";
import List from "./components/List";
import AddProducts from "./components/AddProducts";
const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Home />,
            children:
                [
                    {
                        index: true,
                        element: <Login />
                    },
                    {
                        path: "/login",
                        element: <Login />
                    },
                    {
                        path: "/dashboard",
                        element: <Dashboard />
                    },
                    {
                        path: "/allViolations",
                        element: <AllViolations />
                    },
                    {
                        path: "/List",
                        element: <List />
                    },
                    {
                        path:"/addProducts",
                        element: <AddProducts/>
                    },
                ]
        }
    ]
)



function App() {
    return (
        <>
            <div>
                
                <RouterProvider router={router} />
            </div>
        </>
    )
}

export default App;

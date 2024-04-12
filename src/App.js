import TodoLanding from "./pages/app-landing";
import NewTask from "./pages/newTask";
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
     <Route index element={<TodoLanding/>} />
     <Route path='/newtask' element={<NewTask/>} />
    </>
  )
);




const App = () => {
    return <RouterProvider router={router} />;

}
    
 
export default App;
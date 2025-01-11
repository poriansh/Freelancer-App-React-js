import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Notfound from "./pages/Notfound";
import Applayout from "./pages/Applayout";
import OwnerDashbord from "./pages/OwnerDashbord";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
// import Freelancer from "./pages/Freelancer";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Toaster
          toastOptions={{
            className: "",
            style: {
              fontSize: "12px",
              whiteSpace: "nowrap",
              padding: "0px 5px",
              lineHeight: "1.4rem",
              wordWrap: "break-word",
              background: "#e8ac15",
              color: "#fff",
            },
            duration: 5000, // مدت زمان نمایش Toast
            position: "top-center",

            success: {
              style: {
                background: "green",
                color: "#fff",
                whiteSpace: "nowrap",
              },
            },
            error: {
              style: {
                background: "red",
                color: "#fff",
                whiteSpace: "nowrap",
              },
            },
          }}
        />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/CompleteProfile" element={<CompleteProfile />} />
          <Route path="/owner" element={<Applayout />}>
            <Route index element={<Navigate to="dashbord" replace />} />
            <Route path="dashbord" element={<OwnerDashbord />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<SingleProject />} />
          </Route>
          <Route path="/" element={<Navigate to="/Login" replace />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;

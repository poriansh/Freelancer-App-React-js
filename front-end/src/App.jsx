import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Login";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Notfound from "./pages/Notfound";
import OwnerDashbord from "./pages/OwnerDashbord";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import { ThemeProvider } from "../context/ThemeContext";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FreelancerDashbord from "./pages/FreelancerDashbord";
import Proposals from "./pages/Proposals";
import SubmitedProjects from "./pages/SubmitedProjects";
// import Freelancer from "./pages/Freelancer";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ThemeProvider>
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
            <Route path="/owner" element={<OwnerLayout />}>
              <Route index element={<Navigate to="dashbord" replace />} />
              <Route path="dashbord" element={<OwnerDashbord />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<SingleProject />} />
            </Route>
            <Route path="/freelancer" element={<FreelancerLayout />}>
              <Route index element={<Navigate to="dashbord" replace />} />
              <Route path="dashbord" element={<FreelancerDashbord/>} />
              <Route path="projects" element={<SubmitedProjects/>} />
              <Route path="proposals"  element={<Proposals/>} />
            </Route>
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

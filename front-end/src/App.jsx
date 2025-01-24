import {Navigate, Route, Routes} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Toaster} from "react-hot-toast";
import {ThemeProvider} from "../context/ThemeContext";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import AdminLayout from "./features/admin/AdminLayout";
import AdminDashbord from "./pages/AdminDashbord";
import Users from "./pages/Users";
import Login from "./pages/Login";
import CompleteProfile from "./pages/CompleteProfile";
import Notfound from "./pages/Notfound";
import OwnerDashbord from "./pages/OwnerDashbord";
import Projects from "./pages/Projects";
import SingleProject from "./pages/SingleProject";
import OwnerLayout from "./features/owner/OwnerLayout";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import FreelancerDashbord from "./pages/FreelancerDashbord";
import Proposals from "./pages/Proposals";
import SubmitedProjects from "./pages/SubmitedProjects";
import Verify from "./pages/Verify";
import Categorys from "./pages/categorys";
// کامپوننت‌ها به صورت lazy load بارگذاری می‌شوند
// const Login = lazy(() => import("./pages/Login"));
// const CompleteProfile = lazy(() => import("./pages/CompleteProfile"));
// const Notfound = lazy(() => import("./pages/Notfound"));
// const OwnerDashbord = lazy(() => import("./pages/OwnerDashbord"));
// const Projects = lazy(() => import("./pages/Projects"));
// const SingleProject = lazy(() => import("./pages/SingleProject"));
// const OwnerLayout = lazy(() => import("./features/owner/OwnerLayout"));
// const FreelancerLayout = lazy(() => import("./features/freelancer/FreelancerLayout"));
// const FreelancerDashbord = lazy(() => import("./pages/FreelancerDashbord"));
// const Proposals = lazy(() => import("./pages/Proposals"));
// const SubmitedProjects = lazy(() => import("./pages/SubmitedProjects"));

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />
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
              duration: 5000,
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
            <Route path="/" element={<Navigate to="/Login" replace />} />
            <Route path="/CompleteProfile" element={<CompleteProfile />} />
            <Route
              path="/owner"
              element={
                <ProtectedRoute>
                  <OwnerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashbord" replace />} />
              <Route path="dashbord" element={<OwnerDashbord />} />
              <Route path="projects" element={<Projects />} />
              <Route path="projects/:id" element={<SingleProject />} />
            </Route>
            <Route
              path="/freelancer"
              element={
                <ProtectedRoute>
                  <FreelancerLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashbord" replace />} />
              <Route path="dashbord" element={<FreelancerDashbord />} />
              <Route path="projects" element={<SubmitedProjects />} />
              <Route path="proposals" element={<Proposals />} />
            </Route>
            <Route
              path="/admin"
              element={
                <ProtectedRoute>
                  <AdminLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="dashbord" replace />} />
              <Route path="dashbord" element={<AdminDashbord />} />
              <Route path="projects" element={<SubmitedProjects />} />
              <Route path="proposals" element={<Proposals />} />
              <Route path="users" element={<Users />} />
              <Route path="category" element={<Categorys />} />
            </Route>
            <Route path="/verify" element={<Verify />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

import http from "./httpService";

export function getOtp(data) {
  // {phonNumber}

  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}
export function checkOtp(data) {
  // {otp-code}

  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}
export function completProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}
export function getUser() {
  return http.get("/user/profile").then(({ data }) => data.data);
}
export function logOutApi() {
  return http.post("/user/logout").then(({ data }) => data.data);
}

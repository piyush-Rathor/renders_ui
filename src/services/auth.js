import httpRequest from "./httpRequest";

const authService = {};

authService.auth = (body) => {
  return httpRequest.post("auth", JSON.stringify(body));
};

authService.confirmAuth = (body) => {
  return httpRequest.post("auth/confirm", JSON.stringify(body));
};

export default authService;

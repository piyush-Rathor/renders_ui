import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = "http://localhost:6000"||"http://65.0.81.190:6000";

const httpRequest = {};

let headers = {
  "Content-Type": "application/json",
};

async function getSessAuthToken() {
  const me = await AsyncStorage.getItem("me");
  if (!!me) {
    headers["Authorization"] = JSON.parse(me).payload.jwt_token;
  }
  return headers;
}

httpRequest.post = async (url, body, multipart = false) => {
  if (multipart) {
    headers["Content-Type"] = "application/json";
  }
  await getSessAuthToken();
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}/${url}`, body, { headers })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

httpRequest.get = async (url, params) => {
  await getSessAuthToken();
  return new Promise((resolve, reject) => {
    axios
      .get(`${baseUrl}/${url}`, { headers, params })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

httpRequest.delete = async (url, params) => {
  await getSessAuthToken();
  return new Promise((resolve, reject) => {
    axios
      .delete(`${baseUrl}/${url}`, { headers, params })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

httpRequest.deleteWithBody = async (url, data, params) => {
  await getSessAuthToken();
  return new Promise((resolve, reject) => {
    axios
      .delete(`${baseUrl}/${url}`, { data, headers, params })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

httpRequest.getWithBody = async (url, data, params) => {
  await getSessAuthToken();
  return new Promise((resolve, reject) => {
    axios({
      url: `${baseUrl}/${url}`,
      method: "GET",
      data,
      headers,
      params,
    })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

httpRequest.put = async (url, params, multipart = false) => {
  await getSessAuthToken();
  if (multipart) {
    headers["Content-Type"] = "multipart/form-data";
  }
  return new Promise((resolve, reject) => {
    axios
      .put(`${baseUrl}/${url}`, params, { headers })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

httpRequest.postWithFormData = async (url, params) => {
  const me = await AsyncStorage.getItem("me");
  let headers = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    Authorization: JSON.parse(me).payload.jwt_token,
  };
  return new Promise((resolve, reject) => {
    axios
      .post(`${baseUrl}/${url}`, params, { headers })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export default httpRequest;

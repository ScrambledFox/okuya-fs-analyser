function useFetch() {
  const request = (method: string) => {
    return (url: string, body?: any) => {
      const requestOptions: any = {
        method,
      };
      if (body) {
        requestOptions.headers = { "Content-Type": "application/json" };
        requestOptions.body = JSON.stringify(body);
      }
      return fetch(url, requestOptions).then(handleResponse);
    };
  };

  const handleResponse = async (response: any) => {
    const isJson = response.headers
      ?.get("content-type")
      ?.includes("application/json");
    const data = isJson ? await response.json() : null;

    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  };

  return {
    get: request("GET"),
    post: request("POST"),
    put: request("PUT"),
    delete: request("DELETE"),
  };
}

export { useFetch };

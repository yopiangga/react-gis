import toast from "react-hot-toast";

export function handleOtherStatusCodes(statusCode) {
  switch (statusCode) {
    case 400:
      toast.error("Bad Request: The request is invalid.");
      break;
    case 401:
      toast.error("Unauthorized: Authentication is required.");
      break;
    case 403:
      toast.error(
        "Forbidden: The request is understood, but it has been refused or access is not allowed."
      );
      break;
    case 404:
      toast.error("Not Found: The requested resource was not found.");
      break;
    default:
      toast.error(`Unhandled Status Code: ${statusCode}`);
  }
}

export function handleAxiosError(error) {
  if (error.response) {
    handleOtherStatusCodes(error.response.status);
  } else if (error.request) {
    toast.error("No response received. Request may have timed out.");
  } else {
    toast.error("Error:", error.message);
  }
}

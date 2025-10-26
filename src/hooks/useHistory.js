import { useNavigate } from "react-router-dom";

export const useHistory = () => {
  const navigate = useNavigate();

  return {
    push: (path) => navigate(path),
    goBack: () => navigate(-1),
    goForward: () => navigate(1),
    replace: (path) => navigate(path, { replace: true }),
  };
};

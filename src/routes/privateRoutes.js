import { useContext } from "react";
import { Context } from "../context/Context";
import { useRouter } from "next/navigation";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(Context);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
};

export default PrivateRoute;
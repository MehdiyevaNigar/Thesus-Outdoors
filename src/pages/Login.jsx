import { useEffect, useRef } from "react";
import LoginPage from "./login-section/LoginPage";
const Login = () => {
  const scrollToTopRef = useRef();
  
  useEffect(() => {
    scrollToTopRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div ref={scrollToTopRef}>
      <LoginPage />
    </div>
  );
};

export default Login;

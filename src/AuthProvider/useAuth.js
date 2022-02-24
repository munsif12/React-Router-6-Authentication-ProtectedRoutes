import React from "react";
import { AuthContext } from "./index";
const useAuth = () => {
    //we created this so we dont we usecontext hook in every file where we need {Token,onLogin,onLogout}
    return React.useContext(AuthContext);
};
export default useAuth;
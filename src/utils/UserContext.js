import { createContext } from "react";

const UserContext = createContext({
  user: {
    userName: "Vishal Yadav",
    email: "vydhoni75@gmail.com",
  },
});

UserContext.displayName = "UserContext";

export default UserContext;

import { useContext, createContext, useState } from "react";
import IUser from "../interfaces/IUser";

const AccountContext = createContext(undefined as any);

const AccountProvider = (props: any) => {

    const [user, setUser] = useState<IUser>({
        username: "",
        token: "",
    });

    return (
        <AccountContext.Provider value={[user, setUser]}>
            {props.children}
        </AccountContext.Provider>
    );
}

export const useAccount = () => {
    const context = useContext(AccountContext);

    if (context == undefined) throw 'Header Context can only be useable inside HeaderConsumer/HeaderWrapper!';

    return context;
}
export default AccountProvider;
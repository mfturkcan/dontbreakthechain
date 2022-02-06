import { useRouter } from "next/router";
import { useEffect } from "react";
import IUser from "../../interfaces/IUser";
import { useAccount } from "../../stores/AccountContext";

const Logout = (props: any) => {

    const [user, setUser] = useAccount();
    const router = useRouter();

    useEffect(() => {
        localStorage.removeItem("auth-token");
        setUser({ username: "", token: "" } as IUser);


        setTimeout(() => {
            router.push("/");
        }, 2000);
    }, []);


    return (
        <div>
            Logging out...
        </div>
    );
}
export default Logout;
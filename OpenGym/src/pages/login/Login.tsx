import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../security/authConfig"
import { IPublicClientApplication } from "@azure/msal-browser";
import { IonButton } from "@ionic/react";

const handleLogin = (instance:IPublicClientApplication) => {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const Login = () => {
    const { instance } = useMsal();
    return <IonButton onClick={() => handleLogin(instance)}>Sign in</IonButton>
}
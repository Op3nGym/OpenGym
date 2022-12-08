import { PublicClientApplication } from "@azure/msal-browser";
import { loginRequest, msalConfig } from "./authConfig";

export const msalInstance = new PublicClientApplication(msalConfig);

export const acquireAccessToken = async () : Promise<string> => {
    const activeAccount = msalInstance.getActiveAccount(); // This will only return a non-null value if you have logic somewhere else that calls the setActiveAccount API
    const accounts = msalInstance.getAllAccounts();

    if (!activeAccount && accounts.length === 0) {
        /*
        * User is not signed in. Throw error or wait for user to login.
        * Do not attempt to log a user in outside of the context of MsalProvider
        */   
    }
    const request = {
        scopes: loginRequest.scopes,
        account: activeAccount || accounts[0]
    };

    const authResult = await msalInstance.acquireTokenSilent(request);

    return authResult.accessToken
};
/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import { Configuration, LogLevel } from "@azure/msal-browser";

/**
 * Enter here the user flows and custom policies for your B2C application
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signUpSignIn: 'B2C_1_Op3ngym_Admin_Signup_Test',
        // forgotPassword: 'B2C_1_reset_v3',
        // editProfile: 'B2C_1_edit_profile_v2',
    },
    authorities: {
        signUpSignIn: {
            authority: 'https://op3ngym.b2clogin.com/op3ngym.onmicrosoft.com/B2C_1_Op3ngym_Admin_Signup_Test',
        },
        // forgotPassword: {
        //     authority: 'https://op3ngym.b2clogin.com/op3ngym.onmicrosoft.com/B2C_1_reset_v3',
        // },
        // editProfile: {
        //     authority: 'https://op3ngym.b2clogin.com/op3ngym.onmicrosoft.com/b2c_1_edit_profile_v2',
        // },
    },
    authorityDomain: 'op3ngym.onmicrosoft.com',
};


/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
export const msalConfig: Configuration = {
    auth: {
        clientId: 'c9ef421d-6f99-4566-a6e3-7af10c764df8', // This is the ONLY mandatory field that you need to supply.
        authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose SUSI as your default authority.
        knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
        redirectUri: '/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: 'sessionStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level: LogLevel, message: any, containsPii: any) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
export const protectedResources = {
    apiCatalog: {
        endpoint: 'http://localhost:5000/api',
        scopes: {
            read: ['https://op3ngym.onmicrosoft.com/catalog-api-dev/catalog.read'],
            write: ['https://op3ngym.onmicrosoft.com/catalog-api-dev/catalog.write'],
        },
    },
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [...protectedResources.apiCatalog.scopes.read, ...protectedResources.apiCatalog.scopes.write],
};
import { appUrl, authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export const useAuth = () => {
    const router = useRouter();

    const [signinLoading, setSigninLoading] = useState(false);
    const [googleLoading, setGoogleLoading] = useState(false);
    const [githubLoading, setGithubLoading] = useState(false);
    const [signupLoading, setSignupLoading] = useState(false);
    const [forgetPassLoading, setForgetPassLoading] = useState(false);
    const [resetPassLoading, setResetPassLoading] = useState(false);
    const [signoutLoading, setSignoutLoading] = useState(false);
    const [error, setError] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmNewPass, setConfirmNewPass] = useState('');

    const auth = {
        social: async (provider: string) => {
            setError(false);
            setErrMsg('');

            try {
                if (provider === 'google') {
                    setGoogleLoading(true);
                }

                if (provider === 'github') {
                    setGithubLoading(true);
                }

                const { error } = await authClient.signIn.social({
                    provider,
                    callbackURL: `${appUrl}/auth/callback`,
                    fetchOptions: {
                        credentials: "include",
                    },
                });

                if (error) {
                    setError(true);
                    setErrMsg(error.message || 'Something went wrong, please try again.');
                    toast.error(error.message || 'Something went wrong, please try again.');
                }

                toast.success(`You have logged in with ${provider} successfully, redirecting you.`);
            } catch (error) {
                toast.error('Internal server error, please try again.');
                setErrMsg('Internal server error, please try again.');
                setError(false);
            } finally {
                setGithubLoading(false);
                setGoogleLoading(false);
            }
        },
        signin: async () => {
            setError(false);
            setErrMsg('');

            if (!email || !password) {
                toast.error('Please fill all the required fields.');
                setErrMsg('Please fill all the required fields.');
                setError(false);
            }

            try {
                setSigninLoading(true);

                const { error } = await authClient.signIn.email({
                    email,
                    password,
                    rememberMe: true,
                    fetchOptions: {
                        credentials: "include",
                    },
                });

                if (error) {
                    console.log(error);
                    setError(true);
                    setErrMsg(error.message || 'Something went wrong, please try again.');
                    toast.error(error.message || 'Something went wrong, please try again.');
                }

                toast.success(`You have been logged in successfully, redirecting you.`);
            } catch (error) {
                toast.error('Internal server error, please try again.');
                setErrMsg('Internal server error, please try again.');
                setError(false);
            } finally {
                setSigninLoading(false);
            }
        },
        signout: async () => {
            try {
                setSignoutLoading(true);

                await authClient.signOut();
                router.refresh();
            } catch (error) {
                toast.error('Internal server error, please try again.');
            } finally {
                setSignoutLoading(false);
            }
        },
        signup: async () => {
            setError(false);
            setErrMsg('');

            if (!email || !password || !name) {
                toast.error('Please fill all the required fields.');
                setErrMsg('Please fill all the required fields.');
                setError(false);
            }

            try {
                setSignupLoading(true);

                const { error } = await authClient.signUp.email({
                    name,
                    email,
                    password,
                    fetchOptions: {
                        credentials: "include",
                    },
                });

                if (error) {
                    setError(true);
                    setErrMsg(error.message || 'Something went wrong, please try again.');
                    toast.error(error.message || 'Something went wrong, please try again.');
                }

                toast.success(`You have been signed up successfully, redirecting you.`);
            } catch (error) {
                toast.error('Internal server error, please try again.');
                setErrMsg('Internal server error, please try again.');
                setError(false);
            } finally {
                setSignupLoading(false);
            }
        },
        forgetPass: async () => {
            setError(false);
            setErrMsg('');

            if (!email) {
                toast.error('Please enter your email address.');
                setErrMsg('Please enter your email address.');
                setError(false);
            }

            try {
                setForgetPassLoading(true);

                const { error } = await authClient.requestPasswordReset({
                    email,
                    redirectTo: `${appUrl}/auth/reset-password`,
                    fetchOptions: {
                        credentials: "include",
                    },
                });

                if (error) {
                    setError(true);
                    setErrMsg(error.message || 'Something went wrong, please try again.');
                    toast.error(error.message || 'Something went wrong, please try again.');
                }

                toast.success(`You have been signed up successfully, redirecting you.`);
            } catch (error) {
                toast.error('Internal server error, please try again.');
                setErrMsg('Internal server error, please try again.');
                setError(false);
            } finally {
                setForgetPassLoading(false);
            }
        },
        resetPass: async (token: string) => {
            setError(false);
            setErrMsg('');

            if (!token) {
                setError(true);
                setErrMsg('You have not requested to reset password.');
                toast.error('You have not requested to reset password.');
            }

            if (!newPass || !confirmNewPass) {
                setError(true);
                setErrMsg('Please enter your new password and confirm it.');
                toast.error('Please enter your new password and confirm it.');
            }

            if (confirmNewPass !== newPass) {
                setError(true);
                setErrMsg('Your confirmation password is not matching with new password.');
                toast.error('Your confirmation password is not matching with new password.');
            }

            try {
                setResetPassLoading(true);

                const { error } = await authClient.resetPassword({
                    newPassword: newPass,
                    token,
                    fetchOptions: {
                        credentials: "include",
                    },
                });

                if (error) {
                    setError(true);
                    setErrMsg(error.message || 'Something went wrong, please try again.');
                    toast.error(error.message || 'Something went wrong, please try again.');
                }

                toast.success('Your password has been changed successfully, redirecting you.');
                router.push('/auth/login');
            } catch (error) {
                toast.error('Internal server error, please try again.');
                setErrMsg('Internal server error, please try again.');
                setError(false);
            } finally {
                setResetPassLoading(false);
            }
        }
    };

    return {
        signinLoading,
        signupLoading,
        githubLoading,
        googleLoading,
        forgetPassLoading,
        resetPassLoading,
        signoutLoading,
        error,
        errMsg,
        email,
        setEmail,
        password,
        setPassword,
        name,
        setName,
        newPass,
        setNewPass,
        confirmNewPass,
        setConfirmNewPass,
        auth
    }
};

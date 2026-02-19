import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
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

            const { error } = await authClient.signIn.social({
                provider
            });

            if (error) {
                setError(true);
                setErrMsg(error.message || 'Something went wrong, please try again.');
                toast.error(error.message || 'Something went wrong, please try again.');
            }

            toast.success(`You have logged in with ${provider} successfully, redirecting you.`);
            try {
                setLoading(true);
            } catch (error) {
                toast.error('Internal server error, please try again.');
                setErrMsg('Internal server error, please try again.');
                setError(false);
            } finally {
                setLoading(false);
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

            const { error } = await authClient.signIn.email({
                email,
                password,
                rememberMe: true
            });

            if (error) {
                setError(true);
                setErrMsg(error.message || 'Something went wrong, please try again.');
                toast.error(error.message || 'Something went wrong, please try again.');
            }

            toast.success(`You have been logged in successfully, redirecting you.`);

            try {
                setLoading(true);
            } catch (error) {
                toast.error('Internal server error, please try again.');
                setErrMsg('Internal server error, please try again.');
                setError(false);
            } finally {
                setLoading(false);
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

            const { error } = await authClient.signUp.email({
                name,
                email,
                password,
            });

            if (error) {
                setError(true);
                setErrMsg(error.message || 'Something went wrong, please try again.');
                toast.error(error.message || 'Something went wrong, please try again.');
            }

            toast.success(`You have been signed up successfully, redirecting you.`);

            try {
                setLoading(true);
            } catch (error) {
                toast.error('Internal server error, please try again.');
                setErrMsg('Internal server error, please try again.');
                setError(false);
            } finally {
                setLoading(false);
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

            const { error } = await authClient.requestPasswordReset({
                email,
                redirectTo: `${process.env.CLIENT_API}/auth/reset-password`
            });

            if (error) {
                setError(true);
                setErrMsg(error.message || 'Something went wrong, please try again.');
                toast.error(error.message || 'Something went wrong, please try again.');
            }

            toast.success(`You have been signed up successfully, redirecting you.`);

            try {
                setLoading(true);
            } catch (error) {
                toast.error('Internal server error, please try again.');
                setErrMsg('Internal server error, please try again.');
                setError(false);
            } finally {
                setLoading(false);
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

            const { error } = await authClient.resetPassword({
                newPassword: newPass,
                token,
            });

            if (error) {
                setError(true);
                setErrMsg(error.message || 'Something went wrong, please try again.');
                toast.error(error.message || 'Something went wrong, please try again.');
            }

            toast.success('Your password has been changed successfully, redirecting you.');

            try {
                setLoading(true);
            } catch (error) {
                toast.error('Internal server error, please try again.');
                setErrMsg('Internal server error, please try again.');
                setError(false);
            } finally {
                setLoading(false);
            }
        }
    };

    return {
        loading,
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
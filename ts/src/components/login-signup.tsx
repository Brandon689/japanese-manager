import { useState, ChangeEvent, FormEvent } from 'react';

interface AuthFormProps {
    isSignup: boolean;
    onSubmit: (data: { email: string, password: string }) => void;
}

function AuthForm({ isSignup, onSubmit }: AuthFormProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    function handleSubmit(e: FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        onSubmit({ email, password });
    }

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>): void {
        setEmail(e.target.value);
    }

    function handlePasswordChange(e: ChangeEvent<HTMLInputElement>): void {
        setPassword(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>{isSignup ? 'Sign Up' : 'Log In'}</h2>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    required
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                />
            </label>
            <button type="submit">{isSignup ? 'Sign Up' : 'Log In'}</button>
        </form>
    );
}

export default AuthForm;

import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

const Login: React.FC = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email.trim() || !password.trim() || (isSignUp && !name.trim())) {
      setError('Please fill out all required fields.');
      return;
    }

    setLoading(true);
    try {
      if (isSignUp) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, { displayName: name });
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('User with this email already exists.');
      } else if (err.code === 'auth/invalid-credential') {
        setError('Invalid email or password.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        setError(err.message || 'An error occurred during authentication.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-[70vh] px-4 animate-fade-in">
      <div className="w-full max-w-md p-8 space-y-8 bg-base-100 dark:bg-dark-base-100 rounded-2xl shadow-xl border border-base-300 dark:border-dark-base-300">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-base-content dark:text-dark-content">
            {isSignUp ? 'Create an Account' : 'Welcome Back'}
          </h2>
          <p className="mt-2 text-sm text-base-content/70 dark:text-dark-content/70">
            {isSignUp ? 'Sign up to get started' : 'Please sign in to your account'}
          </p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-600 bg-red-100 rounded-lg dark:bg-red-900/30 dark:text-red-400">
            {error}
          </div>
        )}

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            {isSignUp && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-base-content dark:text-dark-content">Full Name</label>
                <input
                  id="name"
                  type="text"
                  required={isSignUp}
                  className="w-full px-4 py-3 mt-1 bg-base-200 dark:bg-dark-base-200 border border-base-300 dark:border-dark-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base-content dark:text-dark-content"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            )}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-base-content dark:text-dark-content">Email address</label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 mt-1 bg-base-200 dark:bg-dark-base-200 border border-base-300 dark:border-dark-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base-content dark:text-dark-content"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-base-content dark:text-dark-content">Password</label>
              <input
                id="password"
                type="password"
                required
                className="w-full px-4 py-3 mt-1 bg-base-200 dark:bg-dark-base-200 border border-base-300 dark:border-dark-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base-content dark:text-dark-content"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 text-sm font-semibold text-primary-content bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-50"
          >
            {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
          </button>
        </form>

        <div className="text-center text-sm text-base-content/70 dark:text-dark-content/70">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            type="button"
            className="font-medium text-primary hover:text-primary/80 transition-colors"
            onClick={() => {
              setIsSignUp(!isSignUp);
              setError('');
            }}
          >
            {isSignUp ? 'Sign in' : 'Create one'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

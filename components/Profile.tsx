import React, { useState } from 'react';
import { User, updateProfile, updateEmail, updatePassword } from 'firebase/auth';

interface ProfileProps {
  user: User;
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({ user, onLogout }) => {
  const [name, setName] = useState(user.displayName || '');
  const [email, setEmail] = useState(user.email || '');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!name.trim() || !email.trim()) {
      setError('Name and Email cannot be empty.');
      return;
    }

    if (newPassword && newPassword !== confirmPassword) {
      setError('New passwords do not match.');
      return;
    }

    setLoading(true);
    try {
      if (name !== user.displayName) {
        await updateProfile(user, { displayName: name });
      }
      
      if (email !== user.email) {
        await updateEmail(user, email);
      }

      if (newPassword) {
        await updatePassword(user, newPassword);
      }

      setNewPassword('');
      setConfirmPassword('');
      setMessage('Profile updated successfully!');
      setTimeout(() => setMessage(''), 3000);
    } catch (err: any) {
      if (err.code === 'auth/requires-recent-login') {
        setError('For security reasons, changing your email or password requires you to log out and log back in recently. Please log out and try again.');
      } else {
        setError(err.message || 'Failed to update profile.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-base-100/50 dark:bg-dark-base-100/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg shadow-lg border border-base-300 dark:border-dark-base-300/50 max-w-2xl mx-auto animate-fade-in">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-base-content dark:text-dark-content">Your Profile</h2>
        <button
          onClick={onLogout}
          className="px-4 py-2 text-sm font-semibold text-red-600 bg-red-100 dark:bg-red-500/10 dark:text-red-400 rounded-lg hover:bg-red-200 dark:hover:bg-red-500/20 transition-all border border-red-200 dark:border-red-500/20"
        >
          Logout
        </button>
      </div>

      {message && (
        <div className="p-4 mb-6 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg border border-green-200 dark:border-green-800/50">
          {message}
        </div>
      )}

      {error && (
        <div className="p-4 mb-6 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg border border-red-200 dark:border-red-800/50">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-base-content dark:text-dark-content mb-1">Full Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-3 bg-base-200 dark:bg-dark-base-200 border border-base-300 dark:border-dark-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base-content dark:text-dark-content"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-base-content dark:text-dark-content mb-1">Email address</label>
          <input
            type="email"
            required
            className="w-full px-4 py-3 bg-base-200 dark:bg-dark-base-200 border border-base-300 dark:border-dark-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base-content dark:text-dark-content"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="pt-4 mt-6 border-t border-base-300 dark:border-dark-base-300/50">
          <h3 className="text-lg font-semibold text-base-content dark:text-dark-content mb-4">Change Password</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-base-content dark:text-dark-content mb-1">New Password (leave blank to keep current)</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-base-200 dark:bg-dark-base-200 border border-base-300 dark:border-dark-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base-content dark:text-dark-content"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-base-content dark:text-dark-content mb-1">Confirm New Password</label>
              <input
                type="password"
                className="w-full px-4 py-3 bg-base-200 dark:bg-dark-base-200 border border-base-300 dark:border-dark-base-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all text-base-content dark:text-dark-content"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="••••••••"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full px-4 py-3 mt-4 text-sm font-semibold text-primary-content bg-primary rounded-lg hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all disabled:opacity-50"
        >
          {loading ? 'Processing...' : 'Update Profile'}
        </button>
      </form>
    </div>
  );
};

export default Profile;

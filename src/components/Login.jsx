import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);  // Error state
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setRole } = useRole();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError('Email and password are required');
      return;
    }

    setLoading(true);

    const data = { email: username, password };
    // Simulate login request
    // Your login logic here...

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-r from-green-100 via-green-200 to-green-300">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-xl p-8 backdrop-blur-lg">
        <h3 className="text-2xl font-semibold text-center text-green-700">Login Here</h3>

        {/* Error handling */}
        {error && <p className="text-red-600 text-center mt-4">{String(error)}</p>}  {/* Ensuring error is a string */}

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          {/* Email */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-green-700">Email</label>
            <input
              type="email"
              id="username"
              name="username"
              placeholder="Enter your Email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-2 block w-full px-4 py-2 rounded-md bg-green-50 border border-green-300 text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-green-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 block w-full px-4 py-2 rounded-md bg-green-50 border border-green-300 text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 mt-4 bg-green-600 text-white rounded-md font-semibold hover:bg-green-500 disabled:bg-green-400"
            >
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </div>

          {/* Create Account Link */}
          <div className="text-center mt-4">
            <a href="/signup" className="text-sm text-green-600 hover:text-green-500">Create an account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

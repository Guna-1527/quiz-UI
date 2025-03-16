"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { useAuth } from "../providers/AuthProvider"; // Import Auth Context

const Login = () => {
  const router = useRouter();
  const { setUser } = useAuth(); // Use AuthContext to manage session

  // Form data & errors
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  // Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
    setAuthError("");
  };

  // Validate Inputs
  const validate = () => {
    let newErrors: { email?: string; password?: string } = {};
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle Form Submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    setLoading(false);

    if (error) {
      console.error("Login error:", error.message);
      setAuthError("Invalid email or password.");
    } else {
      console.log("Login successful:", data);

      // Fetch user details from Supabase
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("id, username, email")
        .eq("id", data.user?.id)
        .single();

      if (userError) {
        console.error("Error fetching user data:", userError.message);
      } else {
        setUser(userData); // Store user session in context
        localStorage.setItem("user", JSON.stringify(userData)); // Persist in local storage
      }

      router.push("/dashboard"); // Redirect to dashboard
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h1>
        
        {authError && <p className="text-red-500 text-center mb-4">{authError}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Email</label>
            <div className="flex items-center border rounded p-2 mt-1 bg-white">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                placeholder="Enter your email"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Password</label>
            <div className="flex items-center border rounded p-2 mt-1 bg-white">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                placeholder="Enter your password"
              />
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup Redirect */}
        <p className="text-sm text-gray-600 mt-4 text-center">
          Don't have an account?{" "}
          <a href="/auth/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;

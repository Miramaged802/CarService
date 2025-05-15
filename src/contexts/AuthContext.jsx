import React, { createContext, useContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Try to get stored user from localStorage on initial load
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem('currentUser');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  // Update localStorage when user changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  // Login function
  const login = (email, password) => {
    setIsLoading(true);
    // In a real app, this would be an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock successful login for demo purposes
        // In a real app, this would be a response from the server
        if (email && password) {
          const user = {
            id: 'user123',
            name: email.split('@')[0],
            email,
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          };
          setCurrentUser(user);
          setIsLoading(false);
          resolve(user);
        } else {
          setIsLoading(false);
          reject(new Error('Invalid email or password'));
        }
      }, 1000); // Simulate network delay
    });
  };

  // Signup function
  const signup = (userData) => {
    setIsLoading(true);
    // In a real app, this would be an API call
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Mock successful registration
        const user = {
          id: 'user' + Math.floor(Math.random() * 1000),
          name: userData.fullName,
          email: userData.email,
          phone: userData.phone,
          avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        };
        setCurrentUser(user);
        setIsLoading(false);
        resolve(user);
      }, 1000);
    });
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    isLoading,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

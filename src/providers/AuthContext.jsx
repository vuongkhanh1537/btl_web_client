import { authService } from '@/services/AuthService';
import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
      setUser(JSON.parse(userData));
      setIsAuthenticated(true);
    }
    
  }, []);

  const login = async (email, password) => {
    try {
      const response = await authService.login({ email, password });
      console.log(response);

      if (response) {
        // Lưu token và thông tin user
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('isAuthenticated', true);
        
        setUser(response.data.user);
        setIsAuthenticated(true);
      }

      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  };

  const register = async (data) => {
    try {
      const response = await authService.register(data);
      console.log(response);

      if (response) {
        // Lưu token và thông tin user
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('isAuthenticated', true);
        
        setUser(response.data.user);
        setIsAuthenticated(true);
      }
      return { success: true };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isAuthenticated');
    setUser(null);
    setIsAuthenticated(false);
    return {
      success: true
    }
  };

  const value = {
    user,
    login,
    register,
    logout,
    isAuthenticated
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

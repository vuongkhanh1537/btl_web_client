import axios from "axios";

class AuthService {
  BASE_URL = "http://localhost/auth";

  async login(data) {
    const { email, password } = data;
    if (email === "admin@admin.com" && password === "admin123") {
        return {
            token: "admin_token",
            user: {
                id: 1,
                email: "admin@admin",
                name: "Admin"
            }
        }
    } 
    const response = await axios.post(`${this.BASE_URL}/login`, data);
    return response;
  }

  logout() {
    this.authenticated = false;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export const authService = new AuthService();
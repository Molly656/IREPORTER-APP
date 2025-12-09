import { Report, User } from '@/types/report';

// MOCK STORAGE - Uses localStorage for development
// TODO: Replace with Postgres database calls when backend is ready
// Migration notes:
// - getReports() -> SELECT * FROM reports WHERE user_id = current_user_id (for users) or SELECT * FROM reports (for admins)
// - saveReport() -> INSERT/UPDATE reports table with proper authorization
// - deleteReport() -> DELETE FROM reports WHERE id = ? AND user_id = current_user_id
// - getUsers() -> SELECT * FROM users (admin only)
// - saveUser() -> INSERT/UPDATE users table
// - getCurrentUser() -> Use session-based authentication
// - Authentication: Replace mock login with proper backend authentication

const REPORTS_KEY = 'ireporter_reports';
const USERS_KEY = 'ireporter_users';
const CURRENT_USER_KEY = 'ireporter_current_user';

export const storage = {

 

  // Users
  getUsers: (): User[] => {
    const data = localStorage.getItem(USERS_KEY);
    return data ? JSON.parse(data) : [];
  },


  // Current user
  getCurrentUser: (): User | null => {
    const data = localStorage.getItem(CURRENT_USER_KEY);
    return data ? JSON.parse(data) : null;
  },

  setCurrentUser: (user: User | null) => {
    if (user) {
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(CURRENT_USER_KEY);
    }
  },

  clearCurrentUser: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  }
};

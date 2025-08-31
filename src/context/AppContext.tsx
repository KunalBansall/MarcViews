import { createContext, useContext, ReactNode, useState } from 'react';

export type NotificationType = 'success' | 'error' | 'info' | 'warning';

export interface Notification {
  id?: string;
  type: NotificationType;
  message: string;
  duration?: number;
}

export interface AppContextType {
  showNotification: (notification: Omit<Notification, 'id'>) => void;
  hideNotification: (id: string) => void;
  notifications: Notification[];
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const showNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setNotifications((prev: Notification[]) => [...prev, { ...notification, id }]);
    
    // Auto-hide notification after 5 seconds
    setTimeout(() => {
      hideNotification(id);
    }, notification.duration || 5000);
  };

  const hideNotification = (id: string) => {
    setNotifications((prev: Notification[]) => prev.filter((n: Notification) => n.id !== id));
  };

  return (
    <AppContext.Provider value={{ showNotification, hideNotification, notifications }}>
      {children}
    </AppContext.Provider>
  );
};

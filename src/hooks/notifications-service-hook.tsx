import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export interface NotificationOptions {
  autoClose?: number;
}

export interface NotificationsServiceSettings {
  defaultAutoClose?: number;
}

class NotificationsService {
  defaultAutoClose: number;

  constructor(settings: NotificationsServiceSettings = {}) {
    this.defaultAutoClose = settings.defaultAutoClose ?? 5000;
  }

  error(msg: string | Error | unknown, options: NotificationOptions = {}) {
    const error = msg instanceof Error ? msg.message : JSON.stringify(msg, null, 2);
    toast.error(error, {
      autoClose: options.autoClose ?? this.defaultAutoClose,
    });
  }

  warning(msg: string, options: NotificationOptions = {}) {
    toast.warn(msg, {
      autoClose: options.autoClose ?? this.defaultAutoClose,
    });
  }

  info(msg: string, options: NotificationOptions = {}) {
    toast.info(msg, {
      autoClose: options.autoClose ?? this.defaultAutoClose,
    });
  }

  success(msg: string, options: NotificationOptions = {}) {
    toast.success(msg, {
      autoClose: options.autoClose ?? this.defaultAutoClose,
    });
  }
}

export const useNotificationsService = (
  settings: NotificationsServiceSettings = {}
): { notificationsService: NotificationsService } => {
  const notificationsService = new NotificationsService(settings);
  return { notificationsService: notificationsService };
};

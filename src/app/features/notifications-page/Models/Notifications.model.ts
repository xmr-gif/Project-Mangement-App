// Enums for type safety
export enum NotificationType {
  MEETING = 'Meeting',
  TASK = 'Task',
  MENTION = 'Mention',
  COMMENT = 'Comment',
  EVENT = 'Event',
  STATUS = 'Status',
  SNOOZED = 'Snoozed',
  ASSIGNMENT = 'Assignment'
}

export enum NotificationPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

export enum NotificationStatus {
  UNREAD = 'unread',
  READ = 'read',
  ARCHIVED = 'archived'
}

// Tag model
export interface NotificationTag {
  label: string;
  color: TagColor;
}

export enum TagColor {
  BLUE = 'blue',
  GREEN = 'green',
  PURPLE = 'purple',
  ORANGE = 'orange',
  GRAY = 'gray',
  RED = 'red',
  YELLOW = 'yellow'
}

// Action model
export interface NotificationAction {
  text: string;
  url?: string;
  callback?: () => void;
}

// Main Notification interface
export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  description?: string;
  date: Date;
  formattedDate?: string; // e.g., "10:45", "Mon", "Last Fri"
  action?: NotificationAction;
  status: NotificationStatus;
  priority?: NotificationPriority;
  metadata?: NotificationMetadata;
}

// Metadata for different notification types
export interface NotificationMetadata {
  // For meetings
  meetingId?: string;
  calendarLink?: string;
  meetingStartTime?: Date;

  // For tasks
  taskId?: string;
  assignedBy?: string;
  projectId?: string;

  // For mentions/comments
  commentId?: string;
  discussionId?: string;
  mentionedBy?: string;

  // For events
  eventId?: string;
  eventLocation?: string;

  // Common
  relatedUsers?: string[];
  relatedItems?: string[];
}

// Grouped notifications for timeline display
export interface NotificationGroup {
  section: 'today' | 'this-week' | 'earlier' | 'archived';
  label: string;
  notifications: Notification[];
}

// Filter options
export interface NotificationFilters {
  types?: NotificationType[];
  status?: NotificationStatus[];
  priority?: NotificationPriority[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  searchQuery?: string;
}

// Stats for the inbox header
export interface NotificationStats {
  unreadCount: number;
  todayCount: number;
  mentionsCount: number;
  taskCount: number;
  meetingCount: number;
  commentCount: number;
}

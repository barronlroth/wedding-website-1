export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  icon?: string;
}

export interface Hotel {
  name: string;
  description: string;
  link: string;
  priceRange: string;
}

export enum ConciergeState {
  IDLE,
  LOADING,
  SUCCESS,
  ERROR
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
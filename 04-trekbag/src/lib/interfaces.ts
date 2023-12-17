export interface ButtonProps {
  children: React.ReactNode;
  type?: string;
  buttonFunction?: () => void;
}

export interface ItemProps {
  id: number;
  title: string;
  completed: boolean;
  handleDestroyItem?: (id: number) => void;
  toggleItemCompleted?: (id: number) => void;
}

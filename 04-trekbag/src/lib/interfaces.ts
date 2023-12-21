import {ReactNode} from "react";

export interface ButtonProps {
    children: ReactNode;
    type?: string;
    buttonFunction?: () => void;
}

export interface ItemProps {
    id: number;
    title: string;
    completed: boolean;
}

import { ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface IButton extends ButtonProps {
    children: ReactNode,
}

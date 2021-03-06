import React from "react";
import { Button } from "@chakra-ui/react";

export interface Props {
    color: string;
    icon?: React.ReactElement;
    onClick?: () => void;
    size?: string;
    children: React.ReactNode;
}

const TextButton: React.FC = ({ icon, onClick, size = "sm", children }: Props) => {
    return (
        <>
            <Button colorScheme="facebook" leftIcon={icon} onClick={onClick} size={size} aria-label="button-text">
                {children}
            </Button>
        </>
    );
};

export default TextButton;
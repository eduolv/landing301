import { Button } from "@mui/material";
import { FaEye } from "react-icons/fa";

export const ButtonPrimary = ({
    text = "Obter Acesso",
    variant = "contained",
    color = "primary",
    className = "",
    onClick,
    style = {},
    ...props
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            onClick={onClick}
            className={`bg-blue-800 text-white w-full sm:w-auto px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-600 transition-all duration-300 ${className}`}
            style={{ boxShadow: '0 5px 2px rgba(0, 0, 255, 0.2)', ...style }}
            {...props}
        >
            {text}
        </Button>
    );
};

export const ButtonPrimaryWhite = ({
    text = "Obter Acesso",
    variant = "contained",
    color = "primary",
    className = "",
    onClick,
    style = {},
    ...props
}) => {
    return (
        <Button
            variant={variant}
            color={color}
            onClick={onClick}
            className={`bg-blue-100 text-blue-800 w-full sm:w-auto px-4 py-2 rounded-lg shadow-lg hover:shadow-xl hover:bg-yellow-300 hover:text-blue-800 transition-all duration-300 ${className}`}
            style={{ boxShadow: '0 5px 2px rgba(0, 0, 255, 0.2)', ...style }}
            {...props}
        >
            {text}
        </Button>
    );
};

export const ButtonSecondary = ({
    text = "Site demonstrativo",
    variant = "outlined",
    startIcon = <FaEye className="text-blue-800 hover:text-blue-600 text-3xl transition-all duration-300" />,
    className = "",
    onClick,
    style = {},
    ...props
}) => {
    return (
        <Button
            variant={variant}
            startIcon={startIcon}
            onClick={onClick}
            className={`border-1 border-blue-500 text-blue-800 w-full sm:w-auto px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all duration-300 ${className}`}
            style={{ boxShadow: '0 5px 20px rgba(0, 0, 255, 0.1)', ...style }}
            {...props}
        >
            {text}
        </Button>
    );
};

export const ButtonSecondaryWhite = ({
    text = "Site demonstrativo",
    variant = "outlined",
    startIcon = <FaEye className="text-blue-100 hover:text-blue-600 text-3xl transition-all duration-300" />,
    className = "",
    onClick,
    style = {},
    ...props
}) => {
    return (
        <Button
            variant={variant}
            startIcon={startIcon}
            onClick={onClick}
            className={`border-1 border-blue-500 text-blue-100 w-full sm:w-auto px-4 py-2 rounded-full shadow-lg hover:shadow-xl hover:bg-blue-800 transition-all duration-300 ${className}`}
            style={{ boxShadow: '0 5px 20px rgba(0, 0, 255, 0.1)', ...style }}
            {...props}
        >
            {text}
        </Button>
    );
};

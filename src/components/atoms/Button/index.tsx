import React from "react";
import { Buttons } from "./styles";

interface Props {
    label: string;
    onClick: ()=> void;
}

const Button = ({
    label,
    onClick
}: Props) => {

    return(
        <Buttons onClick={onClick}>{label}</Buttons>
    )
}

export default Button;
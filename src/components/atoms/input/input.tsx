import React from "react";
import { Inputs } from "./styles";

interface Props {
    value: string;
    placeHolder: string;
    setValue: (value: string)=> void;
}

const Input = ({
    value,
    placeHolder,
    setValue
}: Props) => {

    return (
        <Inputs
            value={value}
            placeholder={placeHolder}
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default Input
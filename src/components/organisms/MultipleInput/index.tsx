import React from "react";
import Multiple from "./styles";
import { ListInput } from "@/components/molecules";

interface Props {
    list: Array<string>;
    onClickAdd: ()=> void;
    onClickMin: (index: number) => void;
    onChange: (value: string, index: number) => void;
}

const MultipleIput = ({
    list,
    onClickAdd,
    onClickMin,
    onChange
}: Props) => {

    return (
        <Multiple.Container>    
            {list && list.map((data, index) => (
                <ListInput 
                    key={index}
                    labelButton={'+'} 
                    placeholder={'Input data'}
                    value={data} 
                    onChange={(value: string) => onChange(value, index)}
                    hideMin={index === 0}
                    hideAdd={index > 0}
                    onClickMin={() => onClickMin(index)}
                    onClickAdd={onClickAdd}
                />
            ))}
        </Multiple.Container>
    )
}

export default MultipleIput;
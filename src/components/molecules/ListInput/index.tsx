import { memo } from "react";
import List from "./styles";
import { Button, Input } from "@/components/atoms";

interface Props {
    value: string;
    placeholder: string;
    labelButton: string;
    hideMin: boolean;
    hideAdd: boolean;
    onChange: (value: string) => void;
    onClickAdd: () => void;
    onClickMin: () => void;
}

const ListInput = ({
    value,
    placeholder,
    hideAdd,
    hideMin,
    onChange,
    onClickAdd,
    onClickMin
}: Props) => {

    return(
        <List.Container>
            <Input
                value={value}
                placeHolder={placeholder}
                setValue={(value: string) => onChange(value)}
            />
            {!hideMin && (
                <Button
                    label={'-'}
                    onClick={onClickMin}
                />
            )}
            {!hideAdd && (
                <Button
                    label={'+'}
                    onClick={onClickAdd}
                />
            )}
            

        </List.Container>
    )
}

export default memo(ListInput);
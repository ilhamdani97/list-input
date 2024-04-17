import { colors } from "@/utils/colors";
import styled from "styled-components";

export const Inputs = styled.input`
    font-size: 14px;
    border-radius: 8px;
    padding: 8px;
    height: 40px;
    width: 100%;
    border: 1px solid ${colors.gray};
    color: ${colors.white};
    &:focus {
        border: 1px solid ${colors.darkGray};
        transition-duration: 0.3s;
    }
`
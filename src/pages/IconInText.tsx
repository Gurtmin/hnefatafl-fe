import React from "react";
import {Tile} from "@/generated";

interface IconInTextParams{
    figure: string;
}

const IconInText: React.FC<IconInTextParams> = ({ figure}) => {
    return (
        <img
            src={`/assets/tiles/${figure}.svg`}
            alt={figure}
            style={{ height: '1em' }}
        />
    );
};

export default IconInText;

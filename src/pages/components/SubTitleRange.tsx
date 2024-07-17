import React from "react";
import definitions from "../json/definitions.json";

const SubTitleRange: React.FC<{start: string, end?: string, emojiStart?: string, emojiEnd?: string}> = ({start, end, emojiEnd, emojiStart}) => {
    const startDefinition = definitions.find(item => item.term === start)?.definition;
    const endDefinition = definitions.find(item => item.term === end)?.definition;

    return (
        <div className="font-bold text-xl flex flex-row justify-between">
            <span>
                <div className="tooltip tooltip-right" data-tip={startDefinition}>
                    {start} {emojiStart}
                </div>
            </span>
            <span>
                <div className="tooltip tooltip-left" data-tip={endDefinition}>
                    {end} {emojiEnd}
                </div>
            </span>
        </div>
    )
}

export default SubTitleRange;
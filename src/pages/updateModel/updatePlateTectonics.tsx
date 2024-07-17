import React from "react";
import {Application} from "@splinetool/runtime";

function updatePlateTectonicsChange(splineRef: React.MutableRefObject<Application | null>) {
    const updatePlateTectonics = (value: string) => {
        if (value === 'present') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    present: 100,
                    pangaea_proxima: 0,
                    aurica: 0,
                    novo_pangaea: 0,
                    pangaea: 0,
                    gondwana: 0,
                    pannotia: 0,
                    rodinia: 0,
                });
            }
        } else if (value === 'pangaea_proxima') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    present: 0,
                    pangaea_proxima: 100,
                    aurica: 0,
                    novo_pangaea: 0,
                    pangaea: 0,
                    gondwana: 0,
                    pannotia: 0,
                    rodinia: 0,
                });
            }
        } else if (value === 'aurica') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    present: 0,
                    pangaea_proxima: 0,
                    aurica: 100,
                    novo_pangaea: 0,
                    pangaea: 0,
                    gondwana: 0,
                    pannotia: 0,
                    rodinia: 0,
                });
            }
        } else if (value === 'novo_pangaea') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    present: 0,
                    pangaea_proxima: 0,
                    aurica: 0,
                    novo_pangaea: 100,
                    pangaea: 0,
                    gondwana: 0,
                    pannotia: 0,
                    rodinia: 0,
                });
            }
        } else if (value === 'pangaea') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    present: 0,
                    pangaea_proxima: 0,
                    aurica: 0,
                    novo_pangaea: 0,
                    pangaea: 100,
                    gondwana: 0,
                    pannotia: 0,
                    rodinia: 0,
                });
            }
        } else if (value === 'gondwana') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    present: 0,
                    pangaea_proxima: 0,
                    aurica: 0,
                    novo_pangaea: 0,
                    pangaea: 0,
                    gondwana: 100,
                    pannotia: 0,
                    rodinia: 0,
                });
            }
        } else if (value === 'pannotia') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    present: 0,
                    pangaea_proxima: 0,
                    aurica: 0,
                    novo_pangaea: 0,
                    pangaea: 0,
                    gondwana: 0,
                    pannotia: 100,
                    rodinia: 0,
                });
            }
        } else if (value === 'rodinia') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    present: 0,
                    pangaea_proxima: 0,
                    aurica: 0,
                    novo_pangaea: 0,
                    pangaea: 0,
                    gondwana: 0,
                    pannotia: 0,
                    rodinia: 100,
                });
            }
        }
    }

    return {updatePlateTectonics};
}

export default updatePlateTectonicsChange;
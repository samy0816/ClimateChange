import React from "react";
import {Application} from "@splinetool/runtime";

function updateGlobalChange(splineRef: React.MutableRefObject<Application | null>) {
    const updateForestationLayer = (value: number) => {
        if (value === 1) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    deforest2: 0,
                    deforest1: 0,
                    forest1: 100,
                    forest2: 0,
                    forest3: 0,
                    forest4: 0,
                    forest5: 0,
                });
            }
        } else if (value === 2) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    deforest2: 0,
                    deforest1: 0,
                    forest1: 0,
                    forest2: 100,
                    forest3: 0,
                    forest4: 0,
                    forest5: 0,
                });
            }
        } else if (value === 3) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    deforest2: 0,
                    deforest1: 0,
                    forest1: 0,
                    forest2: 0,
                    forest3: 100,
                    forest4: 0,
                    forest5: 0,
                });
            }
        } else if (value === 4) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    deforest2: 0,
                    deforest1: 0,
                    forest1: 0,
                    forest2: 0,
                    forest3: 0,
                    forest4: 100,
                    forest5: 0,
                });
            }
        } else if (value === 5) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    deforest2: 0,
                    deforest1: 0,
                    forest1: 0,
                    forest2: 0,
                    forest3: 0,
                    forest4: 0,
                    forest5: 100,
                });
            }
        } else if (value === 0) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    deforest2: 0,
                    deforest1: 0,
                    forest1: 0,
                    forest2: 0,
                    forest3: 0,
                    forest4: 0,
                    forest5: 0,
                });
            }
        } else if (value === -1) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    deforest2: 0,
                    deforest1: 100,
                    forest1: 0,
                    forest2: 0,
                    forest3: 0,
                    forest4: 0,
                    forest5: 0,
                });
            }
        } else if (value === -2) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    deforest2: 100,
                    deforest1: 0,
                    forest1: 0,
                    forest2: 0,
                    forest3: 0,
                    forest4: 0,
                    forest5: 0,
                });
            }
        }
    }

    const updateOutcomes = (temperature: number,
                            setIsForestFire: (value: boolean) => void,
                            setIsFlood: (value: boolean) => void,
                            setIsHurricane: (value: boolean) => void,
                            setIsSeaLevelRise: (value: boolean) => void
    ) => {
        setIsFlood(false);
        setIsForestFire(false);
        setIsHurricane(false);
        setIsSeaLevelRise(false);

        if (temperature >= 0) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 0,
                    forestfire: 0,
                    hurricane1: 0,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 100,
                    stormycloud: 0,
                    temperature: 0,
                    normalhem: 100,
                    badhem: 0
                });
            }
        } else if (temperature === -1) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 0,
                    forestfire: 0,
                    hurricane1: 0,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 100,
                    stormycloud: 0,
                    temperature: 1,
                    normalhem: 0,
                    badhem: 1
                });
            }
        } else if (temperature === -2) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 0,
                    forestfire: 0,
                    hurricane1: 0,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 100,
                    stormycloud: 0,
                    temperature: 2,
                    normalhem: 0,
                    badhem: 2
                });
            }
        } else if (temperature === -3) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 0,
                    forestfire: 100,
                    hurricane1: 0,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 100,
                    stormycloud: 0,
                    temperature: 3,
                    normalhem: 0,
                    badhem: 3
                });
                setIsForestFire(true)
            }
        } else if (temperature === -4) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 0,
                    forestfire: 100,
                    hurricane1: 0,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 100,
                    stormycloud: 0,
                    temperature: 4,
                    normalhem: 0,
                    badhem: 4
                });
                setIsForestFire(true)
            }
        } else if (temperature === -5) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 0,
                    forestfire: 100,
                    hurricane1: 0,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 100,
                    stormycloud: 0,
                    temperature: 5,
                    normalhem: 0,
                    badhem: 5
                });
                setIsForestFire(true)
            }
        } else if (temperature === -6) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 100,
                    forestfire: 100,
                    hurricane1: 0,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 100,
                    stormycloud: 0,
                    temperature: 6,
                    normalhem: 0,
                    badhem: 10
                });
                setIsFlood(true)
                setIsForestFire(true)
            }
        } else if (temperature === -7) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 100,
                    forestfire: 100,
                    hurricane1: 0,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 100,
                    stormycloud: 0,
                    temperature: 7,
                    normalhem: 0,
                    badhem: 15
                });
                setIsFlood(true)
                setIsForestFire(true)
            }
        } else if (temperature === -8) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 100,
                    forestfire: 100,
                    hurricane1: 0,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 0,
                    stormycloud: 100,
                    temperature: 8,
                    normalhem: 0,
                    badhem: 20
                });
                setIsFlood(true)
                setIsForestFire(true)
            }
        } else if (temperature === -9) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 100,
                    forestfire: 100,
                    hurricane1: 100,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 0,
                    stormycloud: 100,
                    temperature: 9,
                    normalhem: 0,
                    badhem: 25
                });
                setIsFlood(true)
                setIsForestFire(true)
                setIsHurricane(true)
            }
        } else if (temperature === -10) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 100,
                    forestfire: 100,
                    hurricane1: 100,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 0,
                    stormycloud: 100,
                    temperature: 10,
                    normalhem: 0,
                    badhem: 30
                });
                setIsFlood(true)
                setIsForestFire(true)
                setIsHurricane(true)
            }
        } else if (temperature === -11) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 100,
                    forestfire: 100,
                    hurricane1: 100,
                    hurricane2: 0,
                    sealevel: 0,
                    normalcloud: 0,
                    stormycloud: 100,
                    temperature: 11,
                    normalhem: 0,
                    badhem: 35
                });
                setIsFlood(true)
                setIsForestFire(true)
                setIsHurricane(true)
            }
        } else if (temperature === -12) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 100,
                    forestfire: 100,
                    hurricane1: 100,
                    hurricane2: 100,
                    sealevel: 0,
                    normalcloud: 0,
                    stormycloud: 100,
                    temperature: 12,
                    normalhem: 0,
                    badhem: 40
                });
                setIsFlood(true)
                setIsForestFire(true)
                setIsHurricane(true)
            }
        } else if (temperature === -13) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 100,
                    forestfire: 100,
                    hurricane1: 100,
                    hurricane2: 100,
                    sealevel: 0,
                    normalcloud: 0,
                    stormycloud: 100,
                    temperature: 13,
                    normalhem: 0,
                    badhem: 45
                });
                setIsFlood(true)
                setIsForestFire(true)
                setIsHurricane(true)
            }
        } else if (temperature === -14) {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    flood: 100,
                    forestfire: 100,
                    hurricane1: 100,
                    hurricane2: 100,
                    sealevel: 100,
                    normalcloud: 0,
                    stormycloud: 100,
                    temperature: 13,
                    normalhem: 0,
                    badhem: 50
                });
                setIsFlood(true)
                setIsForestFire(true)
                setIsHurricane(true)
                setIsSeaLevelRise(true)
            }
        }
    }

    const updateZoom = (value: number) => {
        if (splineRef.current) {
            splineRef.current.setVariables({
                zoom: value + 1
            });
        }
    }

    return {updateForestationLayer, updateOutcomes, updateZoom};
}

export default updateGlobalChange;
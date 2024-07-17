import React from "react";
import {Application} from "@splinetool/runtime";

function updateSeasonChange(splineRef: React.MutableRefObject<Application | null>) {
    const updateSeason = (value: string) => {
        if (value === 'dec') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 100,
                    jan: 0,
                    feb: 0,
                    mar: 0,
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                });
            }
        } else if (value === 'jan') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 100,
                    feb: 0,
                    mar: 0,
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                });
            }
        } else if (value === 'feb') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 0,
                    feb: 100,
                    mar: 0,
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                });
            }
        } else if (value === 'mar') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 0,
                    feb: 0,
                    mar: 100,
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                });
            }
        } else if (value === 'apr') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 0,
                    feb: 0,
                    mar: 0,
                    apr: 100,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                });
            }
        } else if (value === 'may') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 0,
                    feb: 0,
                    mar: 0,
                    apr: 0,
                    may: 100,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                });
            }
        } else if (value === 'jun') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 0,
                    feb: 0,
                    mar: 0,
                    apr: 0,
                    may: 0,
                    jun: 100,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                });
            }
        } else if (value === 'jul') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 0,
                    feb: 0,
                    mar: 0,
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 100,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                });
            }
        } else if (value === 'aug') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 0,
                    feb: 0,
                    mar: 0,
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 100,
                    sep: 0,
                    oct: 0,
                    nov: 0,
                });
            }
        } else if (value === 'sep') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 0,
                    feb: 0,
                    mar: 0,
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 100,
                    oct: 0,
                    nov: 0,
                });
            }
        } else if (value === 'oct') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 0,
                    feb: 0,
                    mar: 0,
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 100,
                    nov: 0,
                });
            }
        } else if (value === 'nov') {
            if (splineRef.current) {
                splineRef.current.setVariables({
                    dec: 0,
                    jan: 0,
                    feb: 0,
                    mar: 0,
                    apr: 0,
                    may: 0,
                    jun: 0,
                    jul: 0,
                    aug: 0,
                    sep: 0,
                    oct: 0,
                    nov: 100,
                });
            }
        }
    }

    return {updateSeason};
}

export default updateSeasonChange;
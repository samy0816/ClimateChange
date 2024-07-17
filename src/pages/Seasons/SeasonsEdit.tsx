import Layout from "../components/Layout.tsx";
import Title from "../components/Title.tsx";
import Steps from "../components/Steps.tsx";
import SecondaryButton from "../components/SecondaryButton.tsx";
import CanvasWrapper from "../components/CanvasWrapper.tsx";
import PrimaryButton from "../components/PrimaryButton.tsx";
import SubTitle from "../components/SubTitle.tsx";
import React, { useState, useEffect, useRef } from "react";
import RadioButton from "../components/RadioButton.tsx";
import ConditionAlert from "../components/ConditionAlert.tsx";
import {Application} from "@splinetool/runtime";
import updateSeasonChange from "../updateModel/updateSeasonChange.tsx";
import { addLog } from "../../logging.ts";


function SeasonsEdit() {
    const [isWinter, setIsWinter] = useState(true);
    const [isSpring, setIsSpring] = useState(false);
    const [isSummer, setIsSummer] = useState(false);
    const [isFall, setIsFall] = useState(false);

    const splineRef = useRef<Application | null>(null);

    const [form, setForm] = useState({
        month: 'dec'
    });

    const {updateSeason} = updateSeasonChange(splineRef);

    useEffect(() => {
        const canvas = document.getElementById('seasons-canvas');
        if (canvas) {
            const spline = new Application(canvas as HTMLCanvasElement);
            spline.load('https://prod.spline.design/g4JpZ0uGFiyqJYro/scene.splinecode')
                .then(() => {
                    splineRef.current = spline;
                });
        }

        addLog({
            page: window.location.pathname,
            element: "button",
            event: "click",
            name: "seasons edit",
            value: null,
            timestamp: new Date()
        })
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        updateSeason(e.target.value);

        if (e.target.value === 'dec' || e.target.value === 'jan' || e.target.value === 'feb') {
            setIsWinter(true);
            setIsSpring(false);
            setIsSummer(false);
            setIsFall(false);
        }
        if (e.target.value === 'mar' || e.target.value === 'apr' || e.target.value === 'may') {
            setIsWinter(false);
            setIsSpring(true);
            setIsSummer(false);
            setIsFall(false);
        }
        if (e.target.value === 'jun' || e.target.value === 'jul' || e.target.value === 'aug') {
            setIsWinter(false);
            setIsSpring(false);
            setIsSummer(true);
            setIsFall(false);
        }
        if (e.target.value === 'sep' || e.target.value === 'oct' || e.target.value === 'nov') {
            setIsWinter(false);
            setIsSpring(false);
            setIsSummer(false);
            setIsFall(true);
        }
    };

    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "radio",
            event: "change",
            name: "month",
            value: form.month,
            timestamp: new Date()
        });
    }, [form.month]);

    return (
        <Layout>
            <div className="w-2/5 m-4 p-4 overflow-y-auto space-y-3 scrollbar-hide">
                <Title>Seasons Change</Title>
                <Steps currentStep={1}/>
                
                <SubTitle>Select months</SubTitle>
                {/* Winter */}
                <RadioButton label="December" value="dec" name="month" checked={form.month === 'dec'} color="blue" onChange={handleChange} />
                <RadioButton label="January" value="jan" name="month" checked={form.month === 'jan'} color="blue" onChange={handleChange} />
                <RadioButton label="February" value="feb" name="month" checked={form.month === 'feb'} color="blue" onChange={handleChange} />
                {/* Spring */}
                <RadioButton label="March" value="mar" name="month" checked={form.month === 'mar'} color="green" onChange={handleChange} />
                <RadioButton label="April" value="apr" name="month" checked={form.month === 'apr'} color="green" onChange={handleChange} />
                <RadioButton label="May" value="may" name="month" checked={form.month === 'may'} color="green" onChange={handleChange} />
                {/* Summer */}
                <RadioButton label="June" value="jun" name="month" checked={form.month === 'jun'} color="yellow" onChange={handleChange} />
                <RadioButton label="July" value="jul" name="month" checked={form.month === 'jul'} color="yellow" onChange={handleChange} />
                <RadioButton label="August" value="aug" name="month" checked={form.month === 'aug'} color="yellow" onChange={handleChange} />
                {/* Fall */}
                <RadioButton label="September" value="sep" name="month" checked={form.month === 'sep'} color="orange" onChange={handleChange} />
                <RadioButton label="October" value="oct" name="month" checked={form.month === 'oct'} color="orange" onChange={handleChange} />
                <RadioButton label="November" value="nov" name="month" checked={form.month === 'nov'} color="orange" onChange={handleChange} />

                <div className="flex justify-between pt-4">
                    <SecondaryButton link="/season" text="Back"/>
                    <PrimaryButton link="/menu" text="Back to Menu"/>
                </div>
            </div>

            <div className="w-3/5 fixed pl-8 top-0 -right-4 h-screen">
                <CanvasWrapper id="seasons-canvas"/>
            </div>

            <div className="absolute bottom-0 right-0 p-4 z-100">
                <div>
                    <div className="flex flex-col justify-end content-end gap-5">
                        {isFall && <ConditionAlert text="Fall 🍂"/>}
                        {isSummer && <ConditionAlert text="Summer ☀️"/>}
                        {isSpring && <ConditionAlert text="Spring 🌸"/>}
                        {isWinter && <ConditionAlert text="Winter ❄️"/>}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default SeasonsEdit;

import Layout from "../components/Layout.tsx";
import Title from "../components/Title.tsx";
import Steps from "../components/Steps.tsx";
import SecondaryButton from "../components/SecondaryButton.tsx";
import CanvasWrapper from "../components/CanvasWrapper.tsx";
import PrimaryButton from "../components/PrimaryButton.tsx";
import SubTitle from "../components/SubTitle.tsx";
import React, { useState, useEffect, useRef } from "react";
import RadioButton from "../components/RadioButton.tsx";
import { Application } from "@splinetool/runtime";
import updatePlateTectonicsChange from "../updateModel/updatePlateTectonics.tsx";
import { addLog } from "../../logging.ts";


function PlateTectonicsEdit() {
    const splineRef = useRef<Application | null>(null);


    const [form, setForm] = useState({
        world: 'present'
    });



    const {updatePlateTectonics} = updatePlateTectonicsChange(splineRef);

    useEffect(() => {
        const canvas = document.getElementById('plate-tectonics-canvas');
        if (canvas) {
            const spline = new Application(canvas as HTMLCanvasElement);
            spline.load('https://prod.spline.design/VfH7i9BqVZNSHFDd/scene.splinecode')
                .then(() => {
                    splineRef.current = spline;
                });
        }

        addLog({
            page: window.location.pathname,
            element: "button",
            event: "click",
            name: "tectonics edit",
            value: null,
            timestamp: new Date()
        })
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });

        updatePlateTectonics(e.target.value);
    };


    useEffect(() => {
        addLog({
            page: window.location.pathname,
            element: "button",
            event: "click",
            name: "plate tectonics",
            value: form.world,
            timestamp: new Date()
        });
    }, [form.world]);


    return (
        <Layout>
            <div className="w-2/5 m-4 p-4 overflow-y-auto space-y-3 scrollbar-hide">
                <Title>Plate Tectonics</Title>
                <Steps currentStep={1}/>
                
                <SubTitle>Select World</SubTitle>
                <RadioButton label="Rodinia (approx. 1.3 billion to 750 million years ago)" value="rodinia" name="world" checked={form.world === 'rodinia'} color="blue" onChange={handleChange} />
                <RadioButton label="Pannotia (approx. 600 to 540 million years ago)" value="pannotia" name="world" checked={form.world === 'pannotia'} color="blue" onChange={handleChange} />
                <RadioButton label="Gondwana (approx. 600 to 180 million years ago)" value="gondwana" name="world" checked={form.world === 'gondwana'} color="blue" onChange={handleChange} />
                <RadioButton label="Pangaea (approx. 335 to 175 million years ago)" value="pangaea" name="world" checked={form.world === 'pangaea'} color="blue" onChange={handleChange} />
                <RadioButton label="Present" value="present" name="world" checked={form.world === 'present'} color="blue" onChange={handleChange} />
                <RadioButton label="Novo Pangaea (projected in 200-250 million years)" value="novo_pangaea" name="world" checked={form.world === 'novo_pangaea'} color="blue" onChange={handleChange} />
                <RadioButton label="Aurica (projected in 200-250 million years)" value="aurica" name="world" checked={form.world === 'aurica'} color="blue" onChange={handleChange} />
                <RadioButton label="Pangaea Proxima (projected in 300-400 million years)" value="pangaea_proxima" name="world" checked={form.world === 'pangaea_proxima'} color="blue" onChange={handleChange} />


                <div className="flex justify-between pt-4">
                    <SecondaryButton link="/tectonics" text="Back"/>
                    <PrimaryButton link="/menu" text="Back to Menu"/>
                </div>
            </div>

            <div className="w-3/5 fixed pl-8 top-0 -right-4 h-screen">
                <CanvasWrapper id="plate-tectonics-canvas"/>
            </div>
        </Layout>
    );
}

export default PlateTectonicsEdit;

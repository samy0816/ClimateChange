interface LogType {
    page: string;
    element: string;
    event: string;
    name: string;
    value: string | null;
    timestamp: Date;
}

export function isLogging() {
    const status = JSON.parse(localStorage.getItem("climate_is_logging")!);
    return !(status === null || status === false);
}

export function startLogging() {
    localStorage.setItem("climate_is_logging", "true");
 
    const logs = [{
        page: window.location.pathname,
        element: "button",
        event: "click",
        name: "start logging",
        value: null,
        timestamp: new Date()
    }];

    localStorage.setItem("climate_logs", JSON.stringify(logs));
}

export function stopLogging() {
    const logs = JSON.parse(localStorage.getItem("climate_logs")!);

    logs.push({
        page: logs[0].page,
        element: "button",
        event: "click",
        name: "stop logging",
        value: null,
        timestamp: new Date()
    });

    localStorage.setItem("climate_logs", JSON.stringify([]));
    localStorage.setItem("climate_is_logging", "false");

    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(logs)], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = "climate_logs.json";
    document.body.appendChild(element);
    element.click();

    return { logs };
}

export function addLog(log: LogType) {
    const status = JSON.parse(localStorage.getItem("climate_is_logging")!);
    if (status === null || status === "false") {
        return;
    }
    
    const logs = JSON.parse(localStorage.getItem("climate_logs")!);
    logs.push(log);
    localStorage.setItem("climate_logs", JSON.stringify(logs));
    console.log('addLog', log)
}

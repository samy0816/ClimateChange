export const filterText = (text: string | undefined) => {
    if (typeof text === "string") {
        const doc = new DOMParser().parseFromString(text, 'text/html');
        const decodedText = doc.body.textContent || "";
        return decodedText.trim();
    }
    return '';
};
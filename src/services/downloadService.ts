const API_URL = import.meta.env.VITE_API_URL;

export const registerCVDownload = async (): Promise<void> => {
    await fetch(`${API_URL}/api/downloads/cv`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });
}
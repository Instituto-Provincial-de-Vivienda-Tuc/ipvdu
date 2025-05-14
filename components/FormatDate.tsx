"use client"

interface FormatDateProps {
    dateString: string;
    format?: string;
}

export function FormatDate({ dateString }: FormatDateProps) {
    if (!dateString) return null;

    try {
        const date = new Date(dateString);

        // Verificar si la fecha es válida
        if (isNaN(date.getTime())) {
            return dateString;
        }

        // Formatear la fecha según el formato especificado
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        // Por defecto, formato dd-MM-yyyy
        return `${day}-${month}-${year}`;
    } catch (error) {
        console.error("Error al formatear la fecha:", error);
        return dateString;
    }
}
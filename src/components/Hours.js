import React, { useState, useEffect } from 'react';

const Hours = () => {
    const [currentUTCTime, setCurrentUTCTime] = useState('');

    useEffect(() => {
        const updateCurrentUTCTime = () => {
            const now = new Date();
            const utcDay = now.getUTCDate();
            const utcMonth = now.getUTCMonth() + 1; // Los meses comienzan desde 0 en JavaScript
            const utcYear = now.getUTCFullYear();
            const utcHours = now.getHours();
            const utcMinutes = now.getMinutes();
            const utcSeconds = now.getSeconds();
            
            // Asegurarse de que los valores tengan dos dígitos
            const formatNumber = (num) => num.toString().padStart(2, '0');

            setCurrentUTCTime(`${formatNumber(utcDay)}-${formatNumber(utcMonth)}-${utcYear} ${formatNumber(utcHours)}:${formatNumber(utcMinutes)}:${formatNumber(utcSeconds)}`);
        }

        // Actualizar la hora inmediatamente
        updateCurrentUTCTime();

        // Configurar el intervalo para actualizar la hora cada segundo
        const intervalId = setInterval(updateCurrentUTCTime, 1000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(intervalId);
    }, []);

    return <p>Hora y fecha actual: {currentUTCTime}</p>;
}

export default Hours;

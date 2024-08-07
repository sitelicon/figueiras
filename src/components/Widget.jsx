
import React, { useState, useEffect } from 'react';


const Widget = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simula una carga de contenido
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Cambia el tiempo según lo necesario

        return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
    }, []);

    return (
        <div className={`widget ${isLoading ? 'loading' : ''}`}>
            {isLoading ? (
                <div className="loader">Cargando...</div>
            ) : (
                <div>
                    {/* Contenido del widget que se carga dinámicamente */}


                    1














                </div>
            )}
        </div>
    );
};

export default Widget;



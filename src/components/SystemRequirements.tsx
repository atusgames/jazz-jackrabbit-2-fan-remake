
function SystemRequirements() {
    return (
        <div className="w-full mt-6 sm:mt-10 mb-14">
            <h2 className="text-white text-lg sm:text-2xl mb-3">Requisitos del Sistema</h2>
            <p className="text-white break-words text-xs sm:text-sm">
                El juego fue hecho para ser jugado en sistemas operativos basados en Linux.
            </p>
            <p className="text-white break-words text-xs sm:text-sm mt-2">
                <strong>Tested:</strong> <br />

                <ul className="list-disc ml-4">
                    <li>OS: Ubuntu 22.04 LTS (jammy)</li>
                    <li>Procesador: Dual Core</li>
                    <li>Memoria: 2 GB de RAM</li>
                    <li>Gráficos: Integrados de Intel</li>
                    <li>SDL2: Versión 2.30.0</li>
                    <li>Almacenamiento: 290 MB de espacio disponible</li>
                </ul>
            </p>
        </div>
    )
}

export default SystemRequirements;

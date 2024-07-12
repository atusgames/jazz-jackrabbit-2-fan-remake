
function ProjectInfo() {

    const team = [
        { name: "maxo", gh: "https://github.com/maxogod" },
        { name: "agus", gh: "https://github.com/agustinbarbalase" },
        { name: "sev", gh: "https://github.com/SantiSev" },
        { name: "niko", gh: "https://github.com/nrsanchezfiuba" },
    ]

    return (
        <>
            <h2 className="mt-5 text-white text-sm">Informacion del proyecto</h2>
            <div className="bg-slate-800 bg-opacity-35 mt-2 py-2 w-full flex-col rounded-sm text-blue-400 text-sm">
                <button className="w-full bg-purple-900 bg-opacity-25 hover:brightness-125 rounded-sm">
                    <a target="_blank" href="https://github.com/SantiSev/jazz-jackrabbit-2-remake">repositorio del proyecto</a>
                </button>
                <button className="mt-1 w-full bg-purple-900 bg-opacity-25 hover:brightness-125 rounded-sm">
                    <a target="_blank" href="https://github.com/SantiSev/jazz-jackrabbit-2-remake/blob/dev/docs/documentation.md">documentacion tecnica</a>
                </button>
            </div>
            <h2 className="mt-3 text-white text-sm">Team</h2>
            <div className="bg-slate-800 bg-opacity-35 mt-2 pt-2 pb-1 w-full flex-col rounded-sm text-blue-400 text-sm">
                {team.map((member, index) => (
                    <button key={index} className="w-full mb-1 bg-purple-900 bg-opacity-25 hover:brightness-125 rounded-sm">
                        <a target="_blank" href={member.gh}>{member.name}</a>
                    </button>
                ))}
            </div>
        </>
    );
}

export default ProjectInfo;

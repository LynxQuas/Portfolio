/* eslint-disable react/prop-types */
function Project({ project }) {
    console.log(project);
    return (
        <div className="flex flex-col p-10 md:px-20 gap-5">
            <h1 className="text-xl font-bold">{project.title}</h1>

            <p>{project.description}</p>
            <ul className="flex gap-10">
                {project.language.map((language) => (
                    <li className="text-gray-400 text-xl" key={language}>
                        {language}
                    </li>
                ))}
            </ul>

            <div className="flex gap-10">
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 w-28 p-2 text-center text-stone-100 rounded-md"
                >
                    View Code
                </a>

                {project.demolink && (
                    <a
                        href={project.demolink}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-green-500 w-28 p-2 text-center text-stone-100"
                    >
                        Demo
                    </a>
                )}
            </div>
        </div>
    );
}

export default Project;

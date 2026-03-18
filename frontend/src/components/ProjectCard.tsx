type Props = {
  project: any;
  onClick: () => void;
};

export default function ProjectCard({ project, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded shadow hover:shadow-lg cursor-pointer"
    >
      <h2 className="font-bold">{project.title}</h2>
      <p className="text-sm text-gray-600">{project.description}</p>

      <span className="text-xs bg-blue-100 px-2 py-1 rounded">
        {project.status}
      </span>
    </div>
  );
}
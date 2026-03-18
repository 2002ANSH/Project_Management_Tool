type Props = {
  task: any;
};

export default function TaskCard({ task }: any) {
  const statusColor = {
    todo: "bg-gray-200",
    "in-progress": "bg-yellow-200",
    done: "bg-green-200",
  };

  return (
    <div className="card flex justify-between items-center">
      <div>
        <h2 className="font-semibold">{task.title}</h2>
        <p className="text-sm text-gray-500">{task.description}</p>
      </div>

      <span
        className={`px-3 py-1 rounded-full text-xs ${
          statusColor[task.status as keyof typeof statusColor]
        }`}
      >
        {task.status}
      </span>
    </div>
  );
}
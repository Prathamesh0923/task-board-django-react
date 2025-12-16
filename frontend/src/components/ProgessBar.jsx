function ProgressBar({ progress }) {
  return (
    <div className="mb-4">
      <p className="text-sm mb-1">Progress: {progress}%</p>
      <div className="w-full bg-gray-200 h-2 rounded">
        <div className="bg-green-500 h-2 rounded" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;

const PageSkeleton = () => {
  return (
    <div className="p-6 animate-pulse space-y-4">
      <div className="h-8 w-1/3 bg-gray-300 rounded" />
      <div className="h-4 w-full bg-gray-200 rounded" />
      <div className="h-4 w-5/6 bg-gray-200 rounded" />
      <div className="h-4 w-4/6 bg-gray-200 rounded" />
      <div className="h-64 w-full bg-gray-200 rounded mt-6" />
    </div>
  );
};

export default PageSkeleton;

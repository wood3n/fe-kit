const Spin = () => {
  return (
    <div
      className="inline-block size-6 animate-spin rounded-full border-[3px] border-current border-t-transparent text-blue-600 dark:text-blue-500"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default Spin;

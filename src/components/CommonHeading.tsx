const CommonHeading = ({ heading, description }) => {
  return (
    <div className="w-full py-12 md:py-16 text-start md:text-center px-8">
      <h1 className="text-3xl md:text-4xl font-semibold mb-3">{heading}</h1>
      <p className="text-sm tracking-wide font-light mx-auto max-w-3xl text-zinc-600">
        {description}
      </p>
    </div>
  );
};

export default CommonHeading;

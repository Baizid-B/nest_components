const home = () => {
  return (
    <div className="section">
      <h1 className="display">Home Page</h1>
      <h2 className="h2">Welcome</h2>
      <p className="lead">
        This is the home page of Nest Components — a black &amp; white design system.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-outline">Outline</button>
        <button className="btn btn-ghost">Ghost</button>
        <button className="btn btn-primary btn-sm">Small</button>
        <button className="btn btn-primary btn-lg">Large</button>
      </div>
    </div>
  );
};

export default home;

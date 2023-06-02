import "./PhotoGrid.css";

const PhotoGrid = () => {
  return (
    <section>
      <h1 className="">Photo Gallery Grid</h1>
      <div className="photo-grid grid gap-4">
        <div
          className="card w-20"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60)",
          }}
        >
          1
        </div>
        <div
          className="card card-tall"
          style={{ backgroundImage: "url('some-image-URL')" }}
        >
          2
        </div>
        <div
          className="card card-wide"
          style={{ backgroundImage: "url('some-image-URL')" }}
        >
          3
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;

import "./PhotoGrid.css";

const PhotoGrid = () => {
  return (
    <section>
      <h1 className="text-center text-5xl font-extrabold py-10 tracking-widest">
        Photo Gallery Grid
      </h1>
      <div className="photo-grid grid gap-4 m-4">
        <div
          className="card card-tall card-wide"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60)",
          }}
        >
          1
        </div>
        <div
          className=" card-tall card"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60)",
          }}
        >
          2
        </div>
        <div
          className="card  "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60)",
          }}
        >
          3
        </div>
        <div
          className="card card-tall  "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60)",
          }}
        >
          4
        </div>
        <div
          className="card "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60)",
          }}
        >
          5
        </div>
        <div
          className="card "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60)",
          }}
        >
          6
        </div>
        <div
          className="card  "
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1498462440456-0dba182e775b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3BsYXNofGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60)",
          }}
        >
          7
        </div>
        <div
          className="card  card-wide"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60)",
          }}
        >
          8
        </div>
        <div
          className="card  card-wide"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1515463138280-67d1dcbf317f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNwbGFzaHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60)",
          }}
        >
          9
        </div>
      </div>
    </section>
  );
};

export default PhotoGrid;

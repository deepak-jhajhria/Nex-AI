const Preloader = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen bg-[#040505]">
        <div className="loader">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </>
  );
};
export default Preloader;

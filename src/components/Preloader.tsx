const Preloader = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen bg-[#040505]">
        <div className="loader w-12 h-12 relative -translate-x-6 after:absolute after:w-full after:h-full after:rounded-full after:mix-blend-multiply after:bg-[#02CDCF] before:absolute before:w-full before:h-full before:rounded-full before:mix-blend-multiply before:bg-[#3D3FDD]"></div>
      </div>
    </>
  );
};
export default Preloader;

const Preloader = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full min-h-screen bg-[url(./assets/images/headerbg.webp)] bg-center bg-no-repeat bg-cover">
        <div className="loader w-12 h-12 relative -translate-x-6 after:absolute after:w-full after:h-full after:rounded-full after:mix-blend-multiply after:bg-[#FBA11D] before:absolute before:w-full before:h-full before:rounded-full before:mix-blend-multiply before:bg-[#FCCA2B]"></div>
      </div>
    </>
  );
};
export default Preloader;

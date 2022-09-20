const Hero = ({ message, heading }) => {
  return (
    <div
      className="relative grid place-content-center h-screen 
    bg-fixed bg-center bg-cover hero-img isolate before:absolute before:inset-0 before:bg-black/50 before:z-[-1]"
    >
      <div className="text-white p-5">
        <h2 className="text-5xl font-bold">{heading}</h2>
        <p className="py-5 text-xl">{message}</p>
        <button className="px-8 border">Book</button>
      </div>
    </div>
  );
};

export default Hero;

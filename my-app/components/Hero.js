const Hero = () => {
  return (
    <div
      className="relative grid place-content-center h-screen 
    bg-fixed bg-center bg-cover hero-img isolate before:absolute before:inset-0 before:bg-black/50 before:z-[-1]"
    >
      <div className="text-white">
        <h2>Heading</h2>
        <p>Message</p>
        <button>Book</button>
      </div>
    </div>
  );
};

export default Hero;

export default function BloomBackground() {
  return (
    <div
      className="absolute h-full w-full pointer-events-none select-none"
      style={{
        background: "radial-gradient(circle at 50% -20%, #ab77e25d 0%, rgba(0, 0, 0, 0) 65%)",
      }}
    ></div>
  );
}
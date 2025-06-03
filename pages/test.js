export default function Test() {
  return (
    <div>
      <h1>Test de imagen</h1>

      <p>Imagen local:</p>
      <img src="/images/carousel1.png" alt="Local" style={{ width: "300px" }} />

      <p>Imagen externa:</p>
      <img src="https://source.unsplash.com/random/800x600" alt="Externa" style={{ width: "300px" }} />
    </div>
  );
}

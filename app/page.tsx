export default function Home() {
  return (
    <>
      <div className="main-content">
        <p>
          Kunst Archiv - Sachendingekonzepte ########## WORK IN PROGRESS⚠️⚠️⚠️⚠️
        </p>
        <div className="white-block"></div>

        <p style={{ textAlign: "right", marginRight: "10vw" }}>
          mohammed kevin
        </p>

        <div className="main-images">
          <img src={`/images/kind.png`} alt={`Kind`} className="image-kind" />
          <img src={`/images/flower.png`} alt={`Kind`} className="image-kind" />
        </div>
      </div>
    </>
  );
}

const ButterflySpinner = () => {
  return (
    <div style={styles.container}>
      <svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        style={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 50 
             C30 30, 20 60, 40 70 
             C20 80, 40 90, 50 80 
             C60 90, 80 80, 60 70 
             C80 60, 70 30, 50 50"
          fill="violet"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
      <p style={{ color: "violet", marginTop: "1rem" }}>Cargando...</p>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "white",
  },
  svg: {
    transformOrigin: "center",
  },
};

export default ButterflySpinner;

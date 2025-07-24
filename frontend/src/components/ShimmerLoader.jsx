import { ClipLoader } from "react-spinners";

const ShimmerLoader = ({ size = 50, color = "#ffff" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "200px",
        width: "100%",
      }}
    >
      <ClipLoader size={size} color={color} />
    </div>
  );
};

export default ShimmerLoader;

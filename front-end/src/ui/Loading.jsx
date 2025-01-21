import {ThreeDots} from "react-loader-spinner";

function Loading() {
  return (
    <div >
      <ThreeDots
        height="20"
        width="40"
        radius="9"
        color="rgb(74, 109, 255)"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
        wrapperClass
      />
    </div>
  );
}

export default Loading;

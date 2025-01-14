import {ThreeDots} from "react-loader-spinner";

function Loading() {
  return (
    <div>
      <ThreeDots
        height="20"
        width="40"
        radius="9"
        color="#Ffff"
        ariaLabel="three-dots-loading"
        wrapperStyle={{
          display: "flex",
          justifyContent: "center",
          "margin-top": "20px",
        }}
        wrapperClass
      />
    </div>
  );
}

export default Loading;

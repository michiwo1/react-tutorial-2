import { memo } from "react";

export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildAreaが再レンダリングされた！！");
  const style = {
    width: "100%",
    height: "200px",
    backgroundColor: "khaki"
  };

  const data = [...Array(100).keys()];
  data.forEach(() => {
    console.log("...");
  });

  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});

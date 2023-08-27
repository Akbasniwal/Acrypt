import React from "react";
import "react-reflex/styles.css";
import { ReflexContainer, ReflexSplitter, ReflexElement } from "react-reflex";

export default function Layout({ Left, Middle, TopRight, BottomRight }) {
  return (
    <ReflexContainer orientation="vertical">
      <ReflexElement minSize={200} maxSize={400}>
        <Left />
      </ReflexElement>
      <ReflexSplitter style={{ width: "5px" }} />
      <ReflexElement minSize={250}>
        <Middle />
      </ReflexElement>
      <ReflexSplitter style={{ width: "5px" }} />
      <ReflexElement minSize={250} maxSize={800}>
        <ReflexContainer orientation="horizontal">
          <ReflexElement minSize={250} className="tr">
            <TopRight />
          </ReflexElement>
          <ReflexSplitter style={{ height: "5px" }} />
          <ReflexElement minSize={250} className="br">
            <BottomRight />
          </ReflexElement>
        </ReflexContainer>
      </ReflexElement>
    </ReflexContainer>
  );
}

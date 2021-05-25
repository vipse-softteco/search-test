import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const loading = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.2);
`;

export const Loader = styled.div`
  font-size: 10px;
  margin: 50px auto;
  text-indent: -9999em;
  width: 11em;
  height: 11em;
  border-radius: 50%;
  background: #9b2222;
  background: -moz-linear-gradient(left, #9b2222 10%, rgba(155, 34, 34, 0) 42%);
  background: -webkit-linear-gradient(
    left,
    #9b2222 10%,
    rgba(155, 34, 34, 0) 42%
  );
  background: -o-linear-gradient(left, #9b2222 10%, rgba(155, 34, 34, 0) 42%);
  background: -ms-linear-gradient(left, #9b2222 10%, rgba(155, 34, 34, 0) 42%);
  background: linear-gradient(to right, #9b2222 10%, rgba(155, 34, 34, 0) 42%);
  position: relative;
  animation: ${loading} 1.4s infinite linear;
  transform: translateZ(0);

  &:before {
    width: 50%;
    height: 50%;
    background: #9b2222;
    border-radius: 100% 0 0 0;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
  }

  &:after {
    background: #f2f6fc;
    width: 75%;
    height: 75%;
    border-radius: 50%;
    content: "";
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }
`;

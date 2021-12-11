import styled from "styled-components";
import { Table, Tag, Space, Button } from "antd";
interface Props {
  $color?: any;
  $size?: any;
  $weight?: any;
  $height?: any;
  $Back?: any;
  $width?: any;
}

export const Text = styled.span<Props>`
  color: ${({ $color }) => $color || "#333"};
  font-size: ${({ $size }) => $size || "16px"};
  font-weight: ${({ $weight }) => $weight || "500"};
`;
export const Wrapper = styled.div`
  margin: 90px 200px;
`;

export const AddUseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 20px;
`;
export const icon = styled.div``;
export const AButton = styled.button<Props>`
  height: ${({ $height }) => $height || "35px"};
  width: ${({ $width }) => $width || "70px"};
  background-color: ${({ $Back }) => $Back || "#CADDEF"};
  color: ${({ $color }) => $color || "#black"};
  border-radius: 1px;
  outline: none;
  border: none;
  margin: 0 10px;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: #90b4d7;
  }
`;
export const ATable = styled(Table)`
  .ant-table-cell {
    font-size: 15px;
    a {
      color: #232323d4;
      font-size: 14px;
    }
  }
`;

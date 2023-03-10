import React from "react";
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import CreateProduct from "@/components/admin/CreateProduct";
import EditProduct from "@/components/admin/EditProduct";
import DeleteProduct from "@/components/admin/DeleteProduct";
import CreateCategory from "@/components/admin/CreateCategory";
interface DataType {
  key: string;
  id: string;
  name: string;
  soluong: number;
  mota: string;
  trangthai: string[];
}

const columns: ColumnsType<DataType> = [
  {
    title: "Mã Sản Phẩm",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Tên Sản Phẩm",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Số Lượng",
    dataIndex: "soluong",
    key: "soluong",
  },
  {
    title: "Mô Tả",
    dataIndex: "mota",
    key: "mota",
  },
  {
    title: "Trạng Thái",
    key: "trangthai",
    dataIndex: "trangthai",
    render: (_, { trangthai }) => (
      <>
        {trangthai.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <a>
          <EditProduct></EditProduct>
        </a>
        <a>
          <DeleteProduct></DeleteProduct>
        </a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: "1",
    id: "1",
    name: "Quần dài",
    soluong: 32,
    mota: "Đẹp",
    trangthai: ["nice", "developer"],
  },
  {
    key: "2",
    id: "2",
    name: "Áo phông",
    soluong: 2,
    mota: "Tuyệt vời",
    trangthai: ["nice", "developer"],
  },
  {
    key: "3",
    id: "3",
    name: "Áo Phao",
    soluong: 3,
    mota: "Dày",
    trangthai: ["nice", "developer"],
  },
  {
    key: "4",
    id: "4",
    name: "Chân váy",
    soluong: 3,
    mota: "Dài",
    trangthai: ["nice", "developer"],
  },
  {
    key: "5",
    id: "5",
    name: "Quần Ống Rộng",
    soluong: 3,
    mota: "Đẹp",
    trangthai: ["nice", "developer"],
  },
  {
    key: "6",
    id: "6",
    name: "Chân váy",
    soluong: 3,
    mota: "Ngắn",
    trangthai: ["nice"],
  },
  {
    key: "7",
    id: "7",
    name: "Chân váy",
    soluong: 3,
    mota: "Ngắn",
    trangthai: ["nice", "developer"],
  },
  {
    key: "8",
    id: "8",
    name: "Chân váy",
    soluong: 3,
    mota: "Ngắn",
    trangthai: ["nice"],
  },
  {
    key: "9",
    id: "9",
    name: "Chân váy",
    soluong: 3,
    mota: "Ngắn",
    trangthai: ["developer"],
  },
  {
    key: "10",
    id: "10",
    name: "Chân váy",
    soluong: 3,
    mota: "Ngắn",
    trangthai: ["developer"],
  },
];

const AppTable: React.FC = () => (
  <>
    {/* <CreateProduct></CreateProduct> */}
    <CreateCategory></CreateCategory>
    <Table columns={columns} dataSource={data} />;
  </>
);

export default AppTable;

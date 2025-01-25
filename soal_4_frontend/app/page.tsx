"use client";

import { Button, Input, Pagination, Table } from "antd";
import { useState } from "react";
import useGetAllUser from "./user/hook";

export default function Home() {
  const [search, setSearch] = useState<string>();
  const [pagination, setPagination] = useState({
    page: 1,
    results: 25,
  });
  const { data } = useGetAllUser(pagination);
  const filteredData = search
    ? data?.results.filter((item) =>
        JSON.stringify(item).toLowerCase().includes(search)
      )
    : data?.results;

  return (
    <div className="h-screen w-screen p-16 flex flex-col gap-y-4">
      <div>List</div>
      <div className="flex flex-row justify-between">
        <Input.Search
          className="w-1/2"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <Button>+ New Data</Button>
      </div>

      <Table
        pagination={false}
        columns={[
          {
            title: "Nama",
            dataIndex: "name",
            key: "name",
            render: (text) => <a key={text}>{text}</a>,
          },
          {
            title: "Umur",
            dataIndex: "age",
            key: "age",
            render: (text) => <a key={text}>{text}</a>,
          },
          {
            title: "Alamat",
            dataIndex: "location",
            key: "location",
            render: (text) => <a key={text}>{text}</a>,
          },
          {
            title: "Email",
            dataIndex: "email",
            key: "email",
            render: (text) => <a key={text}>{text}</a>,
          },
          {
            title: "No Telepon 1",
            dataIndex: "phone",
            key: "phone",
            render: (text) => <a key={text}>{text}</a>,
          },
          {
            title: "No Telepon 2",
            dataIndex: "cell",
            key: "cell",
            render: (text) => <a key={text}>{text}</a>,
          },
        ]}
        dataSource={filteredData ?? []}
      />
      <Pagination
        current={pagination.page}
        total={100}
        pageSize={pagination.results}
        onChange={(page, pageSize) => {
          setPagination({
            page,
            results: pageSize,
          });
        }}
      />
    </div>
  );
}

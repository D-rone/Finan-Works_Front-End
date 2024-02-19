import React from "react";
import TopBar from "../global/TopBar";
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import { MdOutlineInventory2, MdRequestPage } from "react-icons/md";
import { getCustomers, getInventory, getOrders, getRevenue } from "./api.js";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [requests, setRequests] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [employees, setEmployees] = useState(0);
  const [revenue, setRevenue] = useState(0);

  let loadData = async () => {
    try {
      let requestsResp = await axios.get(
        "http://localhost:5000/api/v1/demande/admin?page=1&limit=1",
        {
          withCredentials: true,
        }
      );
      setRequests(requestsResp?.data?.totalCount);

      let employeesResp = await axios.get(
        "http://localhost:5000/api/v1/users?page=1&limit=1",
        {
          withCredentials: true,
        }
      );
      setEmployees(employeesResp?.data?.totalCount);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <section id="mainSection">
      <TopBar />

      <Space size={60} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard
            icon={
              <MdRequestPage
                style={{
                  color: "green",
                  backgroundColor: "rgba(0,255,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Requets"}
            value={requests} //count(requets)
          />

          <DashboardCard
            icon={
              <MdOutlineInventory2
                style={{
                  color: "blue",
                  backgroundColor: "rgba(0,0,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Announces"}
            value={15}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "purple",
                  backgroundColor: "rgba(0,255,255,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Employee"}
            value={employees} //count(employe)
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "red",
                  backgroundColor: "rgba(255,0,0,0.25)",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Revenue"}
            value={"450,650 $"}
          />
        </Space>
        <Space>
          <RecentOrders />
          <Space size={60} direction="horizontal">
            <Typography.Title level={4}></Typography.Title>
            <Space direction="vertical">
              <DashboardCard_
                icon={
                  <MdRequestPage
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={"Requets"}
                value={requests} //count(requets)
              />

              <DashboardCard
                icon={
                  <MdOutlineInventory2
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={"Inventory"}
                value={inventory}
              />
              <DashboardCard
                icon={
                  <UserOutlined
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={"Employee"}
                value={0} //count(employe)
              />
              <DashboardCard
                icon={
                  <DollarCircleOutlined
                    style={{
                      color: "white",
                      backgroundColor: "black",
                      borderRadius: 20,
                      fontSize: 24,
                      padding: 8,
                    }}
                  />
                }
                title={"Revenue"}
                value={revenue}
              />
            </Space>
            <Space></Space>
          </Space>
        </Space>
      </Space>
    </section>
  );
}
function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function DashboardCard_({ title, value, icon }) {
  return (
    <Card
      style={{
        color: "rgba(0, 255, 255, 0.785)",
        backgroundColor: "#FFE5E5",
      }}
    >
      <Space direction="horizontal">
        {icon}
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
function RecentOrders() {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products.splice(0, 3));
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Typography.Text>Recent Requests</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Type",
            dataIndex: "Type",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
      <Typography.Text>Budget</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Type",
            dataIndex: "Type",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
}

function DashboardChart() {
  const [reveneuData, setReveneuData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Budget",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };

      setReveneuData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Budget",
      },
    },
  };

  return (
    <Card style={{ width: 500, height: 250 }}>
      <Bar options={options} data={reveneuData} />
    </Card>
  );
}

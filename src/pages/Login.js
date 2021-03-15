import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { Redirect } from "react-router";
import { useDispatch } from "react-redux";
import { loginUsers } from "../redux/LoginAction";

function Login() {
  const dispatch = useDispatch();
  
  const [data, setData] = useState({
    username: "",
    password: "",
    status: false,
  });

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 10,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 10,
    },
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    setData({ ...values });
    dispatch(loginUsers(values));
    
    setTimeout(() => {
      loginStatus();
    }, 1000);
  };

  const loginStatus = () => {
    let ticket = localStorage.getItem("login");
    console.log(ticket);
    if (ticket) {
      setData({
        ...data,
        status: true,
      });
      console.log(data.status);
    }
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };
  if (data.status) {
    return <Redirect to="/dashboard" />;
  }
  let st = true;
  const token = localStorage.getItem("token");
  console.log(token);
  if (token != null) {
    console.log(st, "status");
    st = false;
  }

  if (st === false) {
    console.log(st, "status");
    return <Redirect to="/dashboard" />;
  }
  
  return (
    <div>
      <h1>login</h1>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },
          ]}
        >
          <Input onChange={handleChange} value={data.name} name="name" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password
            onChange={handleChange}
            value={data.password}
            name="password"
          />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;

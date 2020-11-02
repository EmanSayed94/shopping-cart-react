import React from "react"

import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined ,LockOutlined,GoogleOutlined  } from '@ant-design/icons';

const AuthForm = ({formType,onFinish,children}) => {
  return (
  
  <Form 
      name="normal_login"
      className="login-form "
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      {children&&children}
      <Form.Item
        name="email"
        rules={[
          {
            required: true,
            message: 'Please input your email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email Address" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

    
      </Form.Item>
<div className="login-buttons">
<Form.Item >
        <Button type="primary" htmlType="submit" >
        {formType}
        </Button>
      
      </Form.Item>
      <Form.Item>
      <Button type="primary" danger htmlType="submit" className="login-form-button">
        <GoogleOutlined  />  Sign in with Google
        </Button>
      </Form.Item>
</div>
    
      {formType==="Login"&& <> Or <a href="">register now!</a> </>}
    </Form>

  );
};

export default AuthForm;
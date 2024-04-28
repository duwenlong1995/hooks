/**
 * title: Basic usage
 * desc: useSort can receive ref as argument
 *
 * title.zh-CN: 基础用法
 * desc.zh-CN: useSort 可以接收三个参数， array 需要被排序的二维数组、arraySort 根据一维数组顺序排序且一位数组里的每个元素都属于array里的value、 key 被排序数组里的key
 */
import { useState, useEffect } from 'react';
import { Table, Button, Form, Input } from 'antd';
import { useSort } from 'ahooks';

export default () => {
  const data = [
    { name: 'Yummy', age: 3, gender: '女', hobby: '踢足球' },
    { name: 'Silly', age: 2, gender: '女', hobby: '打篮球' },
    { name: 'Ben', age: 2, gender: '女', hobby: '打篮球' },
    { name: 'Tom', age: 2, gender: '女', hobby: '打篮球' },
    { name: 'Lily', age: 2, gender: '女', hobby: '打篮球' },
  ];
  // const arraySort: any = ['Ben', 'Yummy', 'Lily', 'Tom', 'Silly'];
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '性别',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: '爱好',
      dataIndex: 'hobby',
      key: 'hobby',
    },
  ];
  const [res, setRes] = useState(null);
  const onFinish = (values: any) => {
    //  Ben, Yummy, Lily, Tom, Silly
    const arraySort = values.Array.split(',');
    const obj = { label: values.label };
    const [res2] = useSort(data, arraySort, obj);
    setRes(res2);
  };
  useEffect(() => {
    setRes(res);
  }, [res]);
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item name="Array" label="Array">
          <Input />
        </Form.Item>
        <Form.Item name="label" label="label">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
      <Table columns={columns} dataSource={res ? res : data} />
    </div>
  );
};

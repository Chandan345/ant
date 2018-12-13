import React, { Component } from 'react';
import { Layout, Menu, Tag, Divider, Icon, Button } from 'antd';
import { Table } from 'antd';
// import AddLicense from './AddLicense';





const { Header, Content } = Layout;

class DashboardLayout extends Component {
constructor(props:any){
    super(props);
    this.state = {
        visible : false,
    }
}
    showModal = () => {
        this.setState({
          visible: true,
        });
      }

      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            hidden: false,
        });
      }
      
  render() {
      const columns = [
        { title: 'Company', dataIndex: 'name', key: 'name' },
        { title: 'Period', dataIndex: 'age', key: 'age' },
        { title: 'Product', dataIndex: 'tags', key: 'tags', render: (tags:any) => (
            <span>
            {tags.map((tag:any) => <Tag color="blue" key={tag}>{tag}</Tag>)}
          </span>
         ) },
        {
          title: 'Action', dataIndex: '', key: 'x', render: () => (
            <span>
                <a onClick={this.showModal}><Icon type="reload" /></a>
                <Divider type="vertical" />
                <a onClick={this.showModal}><Icon type="edit" /></a>
                <Divider type="vertical" />
                <a onClick={this.showModal}><Icon type="delete" /></a>
            </span>
          )
        },
      ];
      const data = [
        {
          key: "name", name: 'John Brown', age: '32 days', tags:['gmail']
        },
        {
          key: 'age', name: 'Jim Green', age: '42 days', tags : ['windows']
        },
      ];
    return (
      <Layout className="layout">
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px',marginRight: -48, float: "right" }}
      >
        <Menu.Item key="1">Dashboard</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: "auto" }}>
      <Button style={{float:"right",marginBottom:10,color:'#fff',background:'#1890ff'}}>Add<Icon type="plus" /></Button>
      <Table
        columns={columns}        
        dataSource={data}
        pagination= {false}        
        />
      </div>
    </Content>
  </Layout>
    );
  }

}

export default DashboardLayout;

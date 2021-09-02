import { Table, Tag, Space } from 'antd';
import React from 'react'
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    insurance: "1",
    tags: ['woman', 'young'],
  },
  {
    key: '2',
    insurance: "2",
    tags: ['man', 'old'],
  },
  {
    key: '3',
    insurance: "3",
    tags: ['man', 'young'],
  },
];


export default function DashboardTable() {
    return (
        <div>
            <Table dataSource={data}>
                <Column title="Insurance" dataIndex="insurance" key="insurance" />
                <Column
                title="Tags"
                dataIndex="tags"
                key="tags"
                render={tags => (
                    <>
                    {tags.map(tag => (
                        <Tag color="blue" key={tag}>
                        {tag}
                        </Tag>
                    ))}
                    </>
                )}
                />
            
            <Column
                title="Action"
                key="action"
                render={(text, record) => (
                    <Space size="middle">
                    <a>View Product Detail</a>
                    </Space>
                )}
                />
            </Table>

        </div>
    )
}

  
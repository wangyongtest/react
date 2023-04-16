import React from 'react'
import type { FC } from 'react'

const ListItem: FC = () => {
  // 问卷列表数据
  const questionList = [
    {
      id: 'q1',
      title: '问卷1',
      isPublished: false,
    },
    {
      id: 'q2',
      title: '问卷2',
      isPublished: true,
    },
    {
      id: 'q3',
      title: '问卷3',
      isPublished: false,
    },
  ]

  const edit = (id: string) => {
    console.log('edit', id)
  }

  return (
    <div>
      <h1>问卷列表页</h1>
      <div>
        {questionList.map(q => {
          const { id, title, isPublished } = q
          return (
            <div key={id}>
              <strong>{title}</strong>
              &nbsp;
              {/* 条件判断 */}
              {isPublished ? (
                <span style={{ color: 'green' }}>已发布</span>
              ) : (
                <span style={{ color: 'red' }}>未发布</span>
              )}
              &nbsp;
              <button onClick={() => edit(id)}>编辑</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ListItem

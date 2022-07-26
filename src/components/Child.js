import { useState } from "react";
import axios from 'axios';

const todos = [
  {
    id:1,
    value: '빨래 돌리기'
  },
  {
    id:2,
    value: '설거지 쌓아놓지 말기'
  },
  {
    id:3,
    value: '냉장고 청소'
  },
  {
    id:4,
    value: '화장실 청소'
  },
  {
    id:5,
    value: '눕기'
  },  
]

// const url = 'https://api.notion.com/v1/databases/abcd3f7fe08e408a81f3696f573d42a6/query';
// axios.get(url, {
//   headers: {
//     Authorization: `Bearer secret_SXr9rD6cvPZw4fKZH3OVHBQFomKp8XEeGi1cF9BnVKJ`,
//     'Notion-Version': '2021-05-11'
//   }
// }).then((res) => {
//   console.log(res)
// });
// const { Client } = require('@notionhq/client');

// const notion = new Client({ auth: process.env.NOTION_API_KEY });
//
// (async () => {
//   const databaseId = 'd9824bdc-8445-4327-be8b-5b47500af6ce';
//   const response = await notion.databases.query({
//     database_id: databaseId,
//   });
//   console.log(response);
// })();

function Child(){
  const [items, setItems] = useState(todos);

  const handleDoneClick = (todo) => {
    setItems(items => items.filter((item) => item !== todo))
  }

  const handleRestoreClick = () => {
    setItems(items => [...items, todos.find((item) => !items.includes(item))])
  }

  return (
    <>
      <ul>
        {items.map((todo)=>(
          <li key={todo.id}>
            <span>{todo.value}</span>
            <button onClick={()=>handleDoneClick(todo)}>삭제</button>
          </li>  
        ))}
      </ul>
      <button onClick={handleRestoreClick}>재구성</button>
    </>
  )

}
export default Child;
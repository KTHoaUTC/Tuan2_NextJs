import { useState } from "react";
//State thường được sử dụng trong những component với mục đích hỗ trợ lưu thông tin
interface States{
    name: String,
    age: number
  }
  const App: React.FC=()=>{
    //khai báo là hàm useState sử dụng kiểu dữ liệu là States
    const[user,setUser]=useState<States>
    ({name:'Hoa',age:23});

    return(
      <div className='App'>
        <header className='App-header'>
          <h1> Hello {user.name}</h1>
          <h2>{user.age}</h2>
        </header>
      </div>
    )
  }
  
  export default App;

  
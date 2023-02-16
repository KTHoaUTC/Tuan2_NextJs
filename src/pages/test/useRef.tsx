//const nameRef = useRef(initialValue);
//lấy một giá trị ban đầu và trả về một đối tượng có thể thay đổi 
//(đối tượng có thể thay đổi có nghĩa là đối tượng có thể thay đổi trạng thái sau khi được tạo

import React from 'react'

const App: React.FC = () => {
    const [inputValue, setInputValue] = React.useState<string>('')
    const mainRef = React.useRef<HTMLDivElement | null>(null)

    return (
        <div ref={mainRef} className="main">
            <input
                placeholder="Nhap du lieu"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
             />
        </div>
    );
}
export default App;
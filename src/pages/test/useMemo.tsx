//useMemo: sẽ trả về một giá trị được ghi nhớ 
//const memoizedValue = useMemo( () => costlyOperation(param1 , param2, ...) , [param1, param2, ...]);
import React, { useState, useMemo } from 'react';

function Example() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  // Tính toán giá trị phức tạp
  const expensiveValue = useMemo(() => {
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <h2>Expensive value: {expensiveValue}</h2>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />
    </div>
  );
}
export default Example;

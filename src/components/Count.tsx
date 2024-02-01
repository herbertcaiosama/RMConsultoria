import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>RM Consultoria</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Atividade Aula 01 - React Turma 1096
      </p>
    </>
  );
}

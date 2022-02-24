import { useEffect } from "react";
import { Container } from "./style";

export function TransactionTable() {
  useEffect(() => {
    fetch("http://localhost:3000/api/transactions")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Campo</td>
            <td>Campo</td>
            <td>Campo</td>
            <td>Campo</td>
          </tr>
          <tr>
            <td>Campo</td>
            <td className="deposit">Campo</td>
            <td>Campo</td>
            <td>Campo</td>
          </tr>
          <tr>
            <td>Campo</td>
            <td className="withdraw"> - Campo</td>
            <td>Campo</td>
            <td>Campo</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}

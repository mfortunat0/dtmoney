import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

export function TransactionTable() {
  useEffect(() => {
    api.get("/transactions").then((data) => console.log(data));
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

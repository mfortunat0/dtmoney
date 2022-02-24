import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable/intex";
import { Container } from "./style";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}

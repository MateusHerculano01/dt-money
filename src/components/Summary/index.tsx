import { SummaryContainer } from "./styles";
import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { useTheme } from "styled-components";

export function Summary() {
  const theme = useTheme();

  return (
    <SummaryContainer>
      <div>
        <header>
          <span>Entradas</span>
          <ArrowCircleUp size={32} color={theme["green-300"]} />
        </header>

        <strong>R$ 17.400,00</strong>
      </div>

      <div>
        <header>
          <span>Saídas</span>
          <ArrowCircleDown size={32} color={theme["red-300"]} />
        </header>

        <strong>R$ 1.259,00</strong>
      </div>

      <div>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color={theme.white} />
        </header>

        <strong>R$ 16.141,00</strong>
      </div>
    </SummaryContainer>
  )
}
import { investments } from "./data.js";
import { InvestmentCard } from "./components/InvestmentCard.js";

// const card1 = InvestmentCard(investments[0]);
// const card2 = InvestmentCard(investments[1]);

const allCards = investments.map( (investment) => InvestmentCard(investment) );
// allCards <=> [card1, card2];

const div = document.querySelector('#investments-cards');
div.innerHTML = allCards.join('');

 const investment3 = {
    id: 2,
    name: "Tesouro IPCA 2041",
    value: 100.00,
    origin: "Tesouro Nacional",
    category: "IPCA",
    interest: "IPCA + 5,83%",
    date: "01/01/2025"
};

const htmlInvestment3 = InvestmentCard(investment3);
div.insertAdjacentHTML('afterbegin', htmlInvestment3);

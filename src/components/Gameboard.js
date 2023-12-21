import { Card } from "./Card";

export const Gameboard = (props) => {
  const generateCards = props.cards.map((item) => (
    <Card id={item.id} key={item.id} />
  ));

  return (
    <main className="gameboard" onClick={props.markClicked}>
      <p className="gameboard__text">
        Cliquez sur une carte pour obtenir des points, <br></br>

        mais ne choisissez pas la même carte que celle que vous avez choisie auparavant !
      </p>
      <section className="gameboard__cards">{generateCards}</section>
    </main>
  );
};

import React from 'react';

const cards = [
  { id: 1, color: "赤", shape: "丸", paint: "べた", number: 1 },
  { id: 2, color: "赤", shape: "丸", paint: "べた", number: 2 },
  { id: 3, color: "赤", shape: "丸", paint: "べた", number: 3 },
  { id: 4, color: "赤", shape: "丸", paint: "しま", number: 1 },
  { id: 5, color: "赤", shape: "丸", paint: "しま", number: 2 },
  { id: 6, color: "赤", shape: "丸", paint: "しま", number: 3 },
  { id: 7, color: "赤", shape: "丸", paint: "なし", number: 1 },
  { id: 8, color: "赤", shape: "丸", paint: "なし", number: 2 },
  { id: 9, color: "赤", shape: "丸", paint: "なし", number: 3 },
  { id: 10, color: "赤", shape: "勾", paint: "べた", number: 1 },
  { id: 11, color: "赤", shape: "勾", paint: "べた", number: 2 },
  { id: 12, color: "赤", shape: "勾", paint: "べた", number: 3 },
  { id: 13, color: "赤", shape: "勾", paint: "しま", number: 1 },
  { id: 14, color: "赤", shape: "勾", paint: "しま", number: 2 },
  { id: 15, color: "赤", shape: "勾", paint: "しま", number: 3 },
  { id: 16, color: "赤", shape: "勾", paint: "なし", number: 1 },
  { id: 17, color: "赤", shape: "勾", paint: "なし", number: 2 },
  { id: 18, color: "赤", shape: "勾", paint: "なし", number: 3 },
  { id: 19, color: "赤", shape: "菱", paint: "べた", number: 1 },
  { id: 20, color: "赤", shape: "菱", paint: "べた", number: 2 },
  { id: 21, color: "赤", shape: "菱", paint: "べた", number: 3 },
  { id: 22, color: "赤", shape: "菱", paint: "しま", number: 1 },
  { id: 23, color: "赤", shape: "菱", paint: "しま", number: 2 },
  { id: 24, color: "赤", shape: "菱", paint: "しま", number: 3 },
  { id: 25, color: "赤", shape: "菱", paint: "なし", number: 1 },
  { id: 26, color: "赤", shape: "菱", paint: "なし", number: 2 },
  { id: 27, color: "赤", shape: "菱", paint: "なし", number: 3 },
  { id: 28, color: "青", shape: "丸", paint: "べた", number: 1 },
  { id: 29, color: "青", shape: "丸", paint: "べた", number: 2 },
  { id: 30, color: "青", shape: "丸", paint: "べた", number: 3 },
  { id: 31, color: "青", shape: "丸", paint: "しま", number: 1 },
  { id: 32, color: "青", shape: "丸", paint: "しま", number: 2 },
  { id: 33, color: "青", shape: "丸", paint: "しま", number: 3 },
  { id: 34, color: "青", shape: "丸", paint: "なし", number: 1 },
  { id: 35, color: "青", shape: "丸", paint: "なし", number: 2 },
  { id: 36, color: "青", shape: "丸", paint: "なし", number: 3 },
  { id: 37, color: "青", shape: "勾", paint: "べた", number: 1 },
  { id: 38, color: "青", shape: "勾", paint: "べた", number: 2 },
  { id: 39, color: "青", shape: "勾", paint: "べた", number: 3 },
  { id: 40, color: "青", shape: "勾", paint: "しま", number: 1 },
  { id: 41, color: "青", shape: "勾", paint: "しま", number: 2 },
  { id: 42, color: "青", shape: "勾", paint: "しま", number: 3 },
  { id: 43, color: "青", shape: "勾", paint: "なし", number: 1 },
  { id: 44, color: "青", shape: "勾", paint: "なし", number: 2 },
  { id: 45, color: "青", shape: "勾", paint: "なし", number: 3 },
  { id: 46, color: "青", shape: "菱", paint: "べた", number: 1 },
  { id: 47, color: "青", shape: "菱", paint: "べた", number: 2 },
  { id: 48, color: "青", shape: "菱", paint: "べた", number: 3 },
  { id: 49, color: "青", shape: "菱", paint: "しま", number: 1 },
  { id: 50, color: "青", shape: "菱", paint: "しま", number: 2 },
  { id: 51, color: "青", shape: "菱", paint: "しま", number: 3 },
  { id: 52, color: "青", shape: "菱", paint: "なし", number: 1 },
  { id: 53, color: "青", shape: "菱", paint: "なし", number: 2 },
  { id: 54, color: "青", shape: "菱", paint: "なし", number: 3 },
  { id: 55, color: "緑", shape: "丸", paint: "べた", number: 1 },
  { id: 56, color: "緑", shape: "丸", paint: "べた", number: 2 },
  { id: 57, color: "緑", shape: "丸", paint: "べた", number: 3 },
  { id: 58, color: "緑", shape: "丸", paint: "しま", number: 1 },
  { id: 59, color: "緑", shape: "丸", paint: "しま", number: 2 },
  { id: 60, color: "緑", shape: "丸", paint: "しま", number: 3 },
  { id: 61, color: "緑", shape: "丸", paint: "なし", number: 1 },
  { id: 62, color: "緑", shape: "丸", paint: "なし", number: 2 },
  { id: 63, color: "緑", shape: "丸", paint: "なし", number: 3 },
  { id: 64, color: "緑", shape: "勾", paint: "べた", number: 1 },
  { id: 65, color: "緑", shape: "勾", paint: "べた", number: 2 },
  { id: 66, color: "緑", shape: "勾", paint: "べた", number: 3 },
  { id: 67, color: "緑", shape: "勾", paint: "しま", number: 1 },
  { id: 68, color: "緑", shape: "勾", paint: "しま", number: 2 },
  { id: 69, color: "緑", shape: "勾", paint: "しま", number: 3 },
  { id: 70, color: "緑", shape: "勾", paint: "なし", number: 1 },
  { id: 71, color: "緑", shape: "勾", paint: "なし", number: 2 },
  { id: 72, color: "緑", shape: "勾", paint: "なし", number: 3 },
  { id: 73, color: "緑", shape: "菱", paint: "べた", number: 1 },
  { id: 74, color: "緑", shape: "菱", paint: "べた", number: 2 },
  { id: 75, color: "緑", shape: "菱", paint: "べた", number: 3 },
  { id: 76, color: "緑", shape: "菱", paint: "しま", number: 1 },
  { id: 77, color: "緑", shape: "菱", paint: "しま", number: 2 },
  { id: 78, color: "緑", shape: "菱", paint: "しま", number: 3 },
  { id: 79, color: "緑", shape: "菱", paint: "なし", number: 1 },
  { id: 80, color: "緑", shape: "菱", paint: "なし", number: 2 },
  { id: 81, color: "緑", shape: "菱", paint: "なし", number: 3 },
];

const combinations = [
  [1, 2, 3],
  [1, 2, 4],
  [1, 2, 5],
  [1, 2, 6],
  [1, 2, 7],
  [1, 2, 8],
  [1, 2, 9],
  [1, 2, 10],
  [1, 2, 11],
  [1, 2, 12],
  [1, 3, 4],
  [1, 3, 5],
  [1, 3, 6],
  [1, 3, 7],
  [1, 3, 8],
  [1, 3, 9],
  [1, 3, 10],
  [1, 3, 11],
  [1, 3, 12],
  [1, 4, 5],
  [1, 4, 6],
  [1, 4, 7],
  [1, 4, 8],
  [1, 4, 9],
  [1, 4, 10],
  [1, 4, 11],
  [1, 4, 12],
  [1, 5, 6],
  [1, 5, 7],
  [1, 5, 8],
  [1, 5, 9],
  [1, 5, 10],
  [1, 5, 11],
  [1, 5, 12],
  [1, 6, 7],
  [1, 6, 8],
  [1, 6, 9],
  [1, 6, 10],
  [1, 6, 11],
  [1, 6, 12],
  [1, 7, 8],
  [1, 7, 9],
  [1, 7, 10],
  [1, 7, 11],
  [1, 7, 12],
  [1, 8, 9],
  [1, 8, 10],
  [1, 8, 11],
  [1, 8, 12],
  [1, 9, 10],
  [1, 9, 11],
  [1, 9, 12],
  [1, 10, 11],
  [1, 10, 12],
  [1, 11, 12],
  [2, 3, 4],
  [2, 3, 5],
  [2, 3, 6],
  [2, 3, 7],
  [2, 3, 8],
  [2, 3, 9],
  [2, 3, 10],
  [2, 3, 11],
  [2, 3, 12],
  [2, 4, 5],
  [2, 4, 6],
  [2, 4, 7],
  [2, 4, 8],
  [2, 4, 9],
  [2, 4, 10],
  [2, 4, 11],
  [2, 4, 12],
  [2, 5, 6],
  [2, 5, 7],
  [2, 5, 8],
  [2, 5, 9],
  [2, 5, 10],
  [2, 5, 11],
  [2, 5, 12],
  [2, 6, 7],
  [2, 6, 8],
  [2, 6, 9],
  [2, 6, 10],
  [2, 6, 11],
  [2, 6, 12],
  [2, 7, 8],
  [2, 7, 9],
  [2, 7, 10],
  [2, 7, 11],
  [2, 7, 12],
  [2, 8, 9],
  [2, 8, 10],
  [2, 8, 11],
  [2, 8, 12],
  [2, 9, 10],
  [2, 9, 11],
  [2, 9, 12],
  [2, 10, 11],
  [2, 10, 12],
  [2, 11, 12],
  [3, 4, 5],
  [3, 4, 6],
  [3, 4, 7],
  [3, 4, 8],
  [3, 4, 9],
  [3, 4, 10],
  [3, 4, 11],
  [3, 4, 12],
  [3, 5, 6],
  [3, 5, 7],
  [3, 5, 8],
  [3, 5, 9],
  [3, 5, 10],
  [3, 5, 11],
  [3, 5, 12],
  [3, 6, 7],
  [3, 6, 8],
  [3, 6, 9],
  [3, 6, 10],
  [3, 6, 11],
  [3, 6, 12],
  [3, 7, 8],
  [3, 7, 9],
  [3, 7, 10],
  [3, 7, 11],
  [3, 7, 12],
  [3, 8, 9],
  [3, 8, 10],
  [3, 8, 11],
  [3, 8, 12],
  [3, 9, 10],
  [3, 9, 11],
  [3, 9, 12],
  [3, 10, 11],
  [3, 10, 12],
  [3, 11, 12],
  [4, 5, 6],
  [4, 5, 7],
  [4, 5, 8],
  [4, 5, 9],
  [4, 5, 10],
  [4, 5, 11],
  [4, 5, 12],
  [4, 6, 7],
  [4, 6, 8],
  [4, 6, 9],
  [4, 6, 10],
  [4, 6, 11],
  [4, 6, 12],
  [4, 7, 8],
  [4, 7, 9],
  [4, 7, 10],
  [4, 7, 11],
  [4, 7, 12],
  [4, 8, 9],
  [4, 8, 10],
  [4, 8, 11],
  [4, 8, 12],
  [4, 9, 10],
  [4, 9, 11],
  [4, 9, 12],
  [4, 10, 11],
  [4, 10, 12],
  [4, 11, 12],
  [5, 6, 7],
  [5, 6, 8],
  [5, 6, 9],
  [5, 6, 10],
  [5, 6, 11],
  [5, 6, 12],
  [5, 7, 8],
  [5, 7, 9],
  [5, 7, 10],
  [5, 7, 11],
  [5, 7, 12],
  [5, 8, 9],
  [5, 8, 10],
  [5, 8, 11],
  [5, 8, 12],
  [5, 9, 10],
  [5, 9, 11],
  [5, 9, 12],
  [5, 10, 11],
  [5, 10, 12],
  [5, 11, 12],
  [6, 7, 8],
  [6, 7, 9],
  [6, 7, 10],
  [6, 7, 11],
  [6, 7, 12],
  [6, 8, 9],
  [6, 8, 10],
  [6, 8, 11],
  [6, 8, 12],
  [6, 9, 10],
  [6, 9, 11],
  [6, 9, 12],
  [6, 10, 11],
  [6, 10, 12],
  [6, 11, 12],
  [7, 8, 9],
  [7, 8, 10],
  [7, 8, 11],
  [7, 8, 12],
  [7, 9, 10],
  [7, 9, 11],
  [7, 9, 12],
  [7, 10, 11],
  [7, 10, 12],
  [7, 11, 12],
  [8, 9, 10],
  [8, 9, 11],
  [8, 9, 12],
  [8, 10, 11],
  [8, 10, 12],
  [8, 11, 12],
  [9, 10, 11],
  [9, 10, 12],
  [9, 11, 12],
  [10, 11, 12]
]

export class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHint: false,
      displayCards: cards.slice(0, 12)
    };

    this.showChange = this.showChange.bind(this);
  }

  showChange(event) {
    this.setState({
      showHint: event.target.checked,
    });
  }

  getHints(){
    const displayCards = this.state.displayCards;

    // const combinations = [];

    // for (let i = 0; i < displayCards.length; i++) {
    //   const times1Card = displayCards[i];
    //   const times2Cards = displayCards
    //     .slice(0, i)
    //     .concat(displayCards.slice(i + 1, displayCards.length));
    //   for (let j = 0; j < times2Cards.length; j++) {
    //     const times2Card = times2Cards[j];
    //     const times3Cards = times2Cards
    //       .slice(0, j)
    //       .concat(times2Cards.slice(j + 1, times2Cards.length));

    //     for (let k = 0; k < times3Cards.length; k++) {
    //       const times3Card = times3Cards[k];
    //       const keys = [times1Card.id, times2Card.id, times3Card.id]
    //         .sort((a, b) => a - b)
    //         .join(", ");
    //       if (!combinations.includes(keys)) {
    //         combinations.push(keys);
    //       }
    //     }
    //   }
    // }

    // return combinations;

    const combinationsToSet = [];

    for (let i = 0; i < combinations.length; i++) {
      const combination = combinations[i];
      if (combination.length < 3) {
        return [];
      }

      const colors = [];
      const shapes = [];
      const paints = [];
      const numbers = [];
      for (let j = 0; j < combination.length; j++) {
        const cardIndex = combination[j] - 1;
        const card = displayCards[cardIndex];
        if (!card) {
          continue;
        }
        
        if (!colors.includes(card.color)) {
          colors.push(card.color);
        }

        if (!shapes.includes(card.shape)) {
          shapes.push(card.shape);
        }

        if (!paints.includes(card.paint)) {
          paints.push(card.paint);
        }

        if (!numbers.includes(card.number)) {
          numbers.push(card.number);
        }
      }

      if ((colors.length === 1 || colors.length === 3) &&
          (shapes.length === 1 || shapes.length === 3) &&
          (paints.length === 1 || paints.length === 3) &&
          (numbers.length === 1 || numbers.length === 3)) {
        combinationsToSet.push(combination.join(", "));
      }
    }

    return combinationsToSet
  }

  render() {
    return (
      <div>
        <hr />
        <div>
          {this.state.displayCards.map((card, index) => {
            return <button key={card.id}>
            index: {index}<br/>
            ------<br/>
            cardID: {card.id}<br/>
            color: {card.color}<br/>
            shape: {card.shape}<br/>
            paint: {card.paint}<br/>
            number: {card.number}
            </button>;
          })}
        </div>
        <hr />
        <div>
          <input type="checkbox" checked={this.state.showHint} onChange={this.showChange}></input>
          <label>show hint</label>
        </div>
        <hr />
        <div>
          {this.state.showHint && this.getHints().map((key) => {
            return <div key={key}>{key}</div>;
          })}
        </div>
      </div>
    );
  }
}

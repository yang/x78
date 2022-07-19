/** @format */

import {
  DataProvider,
  repeatedElement,
  useSelector,
} from "@plasmicapp/loader-nextjs";
import update from "immutability-helper";
import { FC, ReactNode, useContext } from "react";
import { useCallback, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import { Card } from "./Card";

export const DEFAULT_DATA = [
  {
    id: 1,
    text: "Write a cool JS library",
  },
  {
    id: 2,
    text: "Make it generic enough",
  },
  {
    id: 3,
    text: "Write README",
  },
  {
    id: 4,
    text: "Create some examples",
  },
  {
    id: 5,
    text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)",
  },
  {
    id: 6,
    text: "???",
  },
  {
    id: 7,
    text: "PROFIT",
  },
];

const style = {
  width: 400,
};

export interface Item {
  id: number;
  text: string;
}

export interface ContainerState {
  cards: Item[];
}

export const AtomicContainer: FC<{
  className?: string;
  defaultData?: Item[];
}> = ({ className, defaultData = [] }) => {
  {
    const [cards, setCards] = useState(defaultData);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    }, []);

    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <Card key={card.id} index={index} id={card.id} moveCard={moveCard}>
            {card.text}
          </Card>
        );
      },
      []
    );

    return (
      <div className={className}>
        {cards.map((card, i) => renderCard(card, i))}
      </div>
    );
  }
};

export const CustomizableContainer: FC<{
  className?: string;
  defaultData?: Item[];
  children?: ReactNode;
}> = ({ className, defaultData = [], children }) => {
  {
    const [cards, setCards] = useState(defaultData);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    }, []);

    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <DataProvider key={card.id} name="card" data={card}>
            <Card index={index} id={card.id} moveCard={moveCard}>
              {repeatedElement(index, children)}
            </Card>
          </DataProvider>
        );
      },
      []
    );

    return (
      <div className={className}>
        {cards.map((card, i) => renderCard(card, i))}
      </div>
    );
  }
};

export const OrigContainer: FC = ({ className }: { className?: string }) => {
  {
    const [cards, setCards] = useState(DEFAULT_DATA);

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      setCards((prevCards: Item[]) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex] as Item],
          ],
        })
      );
    }, []);

    const renderCard = useCallback(
      (card: { id: number; text: string }, index: number) => {
        return (
          <Card key={card.id} index={index} id={card.id} moveCard={moveCard}>
            {card.text}
          </Card>
        );
      },
      []
    );

    return (
      <>
        <div className={className}>
          {cards.map((card, i) => renderCard(card, i))}
        </div>
      </>
    );
  }
};

export function Field({
  className,
  field,
}: {
  className?: string;
  field?: string;
}) {
  const data = useSelector("card");
  return <div className={className}>{data[field ?? "id"]}</div>;
}

export function HelloWorld() {
  return <div>Hello World</div>;
}

export function CustomControls() {
  return (
    <div>
      <input type="text" onBlur={() => console.log("foo")} />
      <DndProvider backend={HTML5Backend}>
        <AtomicContainer defaultData={DEFAULT_DATA} />
      </DndProvider>
    </div>
  );
}

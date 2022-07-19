/** @format */

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "../components/SimpleCard";
import {
  AtomicContainer,
  CustomizableContainer,
  DEFAULT_DATA,
  Field,
} from "../components/Container";
import { Rbd } from "../components/Rbd";

export default function Page() {
  return (
    <DndProvider backend={HTML5Backend}>
      <h2>React Beautiful DND</h2>
      <Rbd />
      <h2>React DND</h2>
      <AtomicContainer defaultData={DEFAULT_DATA} />
      <CustomizableContainer defaultData={DEFAULT_DATA}>
        <Field field={"text"} />
        <Field field={"text"} />
      </CustomizableContainer>
    </DndProvider>
  );
}

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

export default function Page() {
  return (
    <div>
      <AtomicContainer defaultData={DEFAULT_DATA} />
      <CustomizableContainer defaultData={DEFAULT_DATA}>
        <Field field={"text"} />
        <Field field={"text"} />
      </CustomizableContainer>
    </div>
  );
}

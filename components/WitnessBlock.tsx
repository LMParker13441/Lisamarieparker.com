import { useState } from "react";
import { Block } from "./Block";
import { Witness } from "./Witness";

export const WitnessBlock = () => <Block itemGenerator={(val, i, remove) => <Witness number={i + 1} remove={remove} />} />
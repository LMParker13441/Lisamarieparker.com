import React from "react";
import { Appearance } from "./Appearance";
import { Block } from "./Block";

export const AppearanceBlock = () => <Block itemGenerator={(val, i, remove) => <Appearance number={i} remove={remove} />} />


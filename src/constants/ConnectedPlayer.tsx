import {ActivePlayer, PlayerEnum} from "@/generated";
import React from "react";

export const connectedPlayerImageMap: Record<PlayerEnum, string> = {
    None: "/assets/tiles/spectator.svg",
    Both: "/assets/tiles/both.svg",
    Monster: "/assets/tiles/odin.svg",
    Viking: "/assets/tiles/beast.svg",
};

export const connectedPlayerTooltipMap: Record<PlayerEnum, string> = {
    None: "V této hře nejsi přihlášen. Proto jsi v roli spektátora.",
    Both: "V této hře jsi připojen jako Obránce i útočník. To slouží k takzvanému Hot-Seat módu hry, kdy oba hráči se střídají na jednom zařízení",
    Monster: "V této hře jsi připojen jako Obránce.",
    Viking: "V této hře jsi připojen jako Útočník.",
};

export const activePlayerImageMap: Record<ActivePlayer, string> = {
    Monster: "/assets/tiles/odin.svg",
    Viking: "/assets/tiles/beast.svg",
};

export const activePlayerTooltipMap: Record<ActivePlayer, React.ReactNode> = {
    Monster: (
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
          <span>Na tahu je obránce</span>
          <img
              src="/assets/tiles/viking.svg"
              alt="Monster"
              style={{ height: '2em' }}
          />
          <span> nebo </span>
          <img
              src="/assets/tiles/odin.svg"
              alt="Monster"
              style={{ height: '2em' }}
          />
        </span>
    ),
    Viking: (
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
          <span>Na tahu je útočník</span>
          <img
              src="/assets/tiles/beast.svg"
              alt="Monster"
              style={{ height: '2em' }}
          />
        </span>
    ),
};

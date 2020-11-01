export const ATTRIBUTES = {
  PHYSICAL: {
    label: "Physical",
    order: 1,
    fields: {
      STRENGTH: {
        label: "Strength",
        order: 1,
      },
      DEXTERITY: {
        label: "Dexterity",
        order: 2,
      },
      STAMINA: {
        label: "Stamina",
        order: 3,
      },
    },
  },
  MENTAL: {
    label: "Mental",
    order: 2,
    fields: {
      INTELLIGENCE: {
        label: "Intelligence",
        order: 1,
      },
      PERCEPTION: {
        label: "Perception",
        order: 2,
      },
      WITS: {
        label: "Wits",
        order: 3,
      },
    },
  },
  SOCIAL: {
    label: "Social",
    order: 3,
    fields: {
      CHARISMA: {
        label: "Charisma",
        order: 1,
      },
      MANIPULATION: {
        label: "Manipulation",
        order: 2,
      },
      APPEARANCE: {
        label: "Appearance",
        order: 3,
      },
    },
  },
} as const;

export const ABILITIES = {
  ABILTIIES: {
    label: "Abilities",
    order: 1,
    fields: {
      ARCHERY: {
        label: "Archery",
        order: 1,
      },
    },
  },
} as const;

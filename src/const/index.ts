export type ATTRIBUTE_KEYS = keyof typeof ATTRIBUTES["MENTAL"]["fields"] |
  keyof typeof ATTRIBUTES["PHYSICAL"]["fields"] |
  keyof typeof ATTRIBUTES["SOCIAL"]["fields"];
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

export type ABILITY_KEYS = keyof typeof ABILITIES["ABILTIIES"]["fields"];
export const ABILITIES = {
  ABILTIIES: {
    label: "Abilities",
    order: 1,
    fields: {
      ARCHERY: {
        label: "Archery",
        order: 1,
      },
      ATHLETICS: {
        label: "Athletics",
        order: 1,
      },
      AWARENESS: {
        label: "Awareness",
        order: 1,
      },
      BRAWL: {
        label: "Brawl",
        order: 1,
      },
      BUREAUCRACY: {
        label: "Bureaucracy",
        order: 1,
      },
      CRAFT: {
        label: "Craft",
        order: 1,
      },
      DODGE: {
        label: "Dodge",
        order: 1,
      },
      INTEGRITY: {
        label: "Integrity",
        order: 1,
      },
      INVESTIGATION: {
        label: "Investigation",
        order: 1,
      },
      LARCENY: {
        label: "Larceny",
        order: 1,
      },
      LINGUISTICS: {
        label: "Linguistics",
        order: 1,
      },
      LORE: {
        label: "Lore",
        order: 1,
      },
      MARTIAL_ARTS: {
        label: "Martial Arts",
        order: 1,
      },
      MEDICINE: {
        label: "Medicine",
        order: 1,
      },
      MELEE: {
        label: "Melee",
        order: 1,
      },
      OCCULT: {
        label: "Occult",
        order: 1,
      },
      PERFORMANCE: {
        label: "Performance",
        order: 1,
      },
      PRESENCE: {
        label: "Presence",
        order: 1,
      },
      RESISTANCE: {
        label: "Resistance",
        order: 1,
      },
      RIDE: {
        label: "Ride",
        order: 1,
      },
      SAIL: {
        label: "Sail",
        order: 1,
      },
      SOCIALIZE: {
        label: "Socialize",
        order: 1,
      },
      STEALTH: {
        label: "Stealth",
        order: 1,
      },
      SURVIVAL: {
        label: "Survival",
        order: 1,
      },
      THROWN: {
        label: "Thrown",
        order: 1,
      },
      WAR: {
        label: "War",
        order: 1,
      },
    },
  },
} as const;

export default {
  key: "pt",
  name: "Periodic Table",
  short: "PT",
  wp: "Periodic_table",
  desc: "A table of all elements.",
  grid: [
    ["H", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, "He"],
    ["Li", "Be", null, null, null, null, null, null, null, null, null, null, "B", "C", "N", "O", "F", "Ne"],
    ["Na", "Mg", null, null, null, null, null, null, null, null, null, null, "Al", "Si", "P", "S", "Cl", "Ar"],
    ["K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr"],
    ["Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe"],
    ["Cs", "Ba", "La", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn"],
    ["Fr", "Ra", "Ac", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ts", "Og"],
    [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    [null, null, "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", null, null],
    [null, null, "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", null, null],
  ],
  gridui: {
    compact: true,
    celled: true,
    class: "single",
    size: "small",
  },
  gridtype: {
    alkali: {
      key: "alkali",
      name: "Alkali Metal",
      wp: "Alkali_metal",
      desc: "Shiny, soft, highly reactive metals.",
      color: "#ff9999",
    },
    alkaliearth: {
      key: "alkaliearth",
      name: "Alkaline Earth Metal",
      wp: "Alkaline_earth_metal",
      desc: "Shiny, silvery-white, somewhat reactive metals.",
      color: "#ffdead",
    },
    lanthanide: {
      key: "lanthanide",
      name: "Lanthanide",
      wp: "Lanthanide",
      desc: "AKA rare earth elements.",
      color: "#ffbfff",
    },
    actinide: {
      key: "actinide",
      name: "Actinide",
      wp: "Actinide",
      desc: "These are all radioactive.",
      color: "#ff99cc",
    },
    transition: {
      key: "transition",
      name: "Transition Metal",
      wp: "Transition_metal",
      desc: "Large range of complex ions in various oxidation states, coloured complexes, and catalytic properties either as the element or as ion.",
      color: "#ffc0c0",
    },
    posttransition: {
      key: "posttransition",
      name: "Post-transition Metal",
      wp: "Post-transition_metal",
      desc: "Soft (or brittle), have poor mechanical strength, and melting points lower than those of the transition metals",
      color: "#cccccc",
    },
    metalloid: {
      key: "metalloid",
      name: "Metalloid",
      wp: "Metalloid",
      desc: "Between metals and nonmetals.",
      color: "#cccc99",
    },
    polyatomic: {
      key: "polyatomic",
      name: "Polyatomic Nonmetal",
      wp: "Nonmetal#Polyatomic_nonmetals",
      desc: "Solid, mostly semi-lustrous semiconductors.",
      color: "#a1ffc3",
    },
    diatomic: {
      key: "diatomic",
      name: "Diatomic Nonmetal",
      wp: "Nonmetal#Diatomic_nonmetal",
      desc: "Highly insulating, highly electronegative, non-reflective gases.",
      color: "#e7ff8f",
    },
    noble: {
      key: "noble",
      name: "Noble Gas",
      wp: "Noble_gas",
      desc: "Odorless, colorless, monatomic gases with very low chemical reactivity.",
      color: "#c0ffff",
    },
    unknown: {
      key: "unknown",
      name: "Unknown",
      wp: "x",
      desc: "Unknown chemical properties.",
      color: "#e9e9e9",
    }
  },
  items: {
    H: {
      key: "H",
      gridtype: "diatomic",
      name: "Hydrogen",
      short: "H",
      wp: "Hydrogen",
      mass: "1.008 Ar",
      Z: 1,
      desc: "The lightest element, and the most abundant in the universe.  Makes up most stars.",
    },
    He: {
      key: "He",
      gridtype: "noble",
      name: "Helium",
      short: "He",
      wp: "Helium",
      mass: "4.0026022 Ar",
      Z: 2,
      desc: "Makes your voice sound funny.",
    },
    Li: {
      key: "Li",
      gridtype: "alkali",
      name: "Lithium",
      short: "Li",
      wp: "Lithium",
      mass: "6.94 Ar",
      Z: 3,
      desc: "",
    },
    Be: {
      key: "Be",
      gridtype: "alkaliearth",
      name: "Beryllium",
      short: "Be",
      wp: "Beryllium",
      mass: "9.01218315 Ar",
      Z: 4,
      desc: "A highly reactive metal you can cut with a knife.",
    },
    B: {
      key: "B",
      gridtype: "metalloid",
      name: "Boron",
      short: "B",
      wp: "Boron",
      mass: "10.81 Ar",
      Z: 5,
      desc: "Don't breathe it in.",
    },
    C: {
      key: "C",
      gridtype: "polyatomic",
      name: "Carbon",
      short: "C",
      wp: "Carbon",
      mass: "12.011 Ar",
      Z: 6,
      desc: "",
    },
    N: {
      key: "N",
      gridtype: "diatomic",
      name: "Nitrogen",
      short: "N",
      wp: "Nitrogen",
      mass: "14.007 Ar",
      Z: 7,
      desc: "",
    },
    O: {
      key: "O",
      gridtype: "diatomic",
      name: "Oxygen",
      short: "O",
      wp: "Oxygen",
      mass: "15.999 Ar",
      Z: 8,
      desc: "",
    },
    F: {
      key: "F",
      gridtype: "diatomic",
      name: "Fluorine",
      short: "F",
      wp: "Fluorine",
      mass: "18.9984031636 Ar",
      Z: 9,
      desc: "",
    },
    Ne: {
      key: "Ne",
      gridtype: "noble",
      name: "Neon",
      short: "Ne",
      wp: "Neon",
      mass: "20.17976 Ar",
      Z: 10,
      desc: "",
    },
    Na: {
      key: "Na",
      gridtype: "alkali",
      name: "Sodium",
      short: "Na",
      wp: "Sodium",
      mass: "22.989769282 Ar",
      Z: 11,
      desc: "",
    },
    Mg: {
      key: "Mg",
      gridtype: "alkaliearth",
      name: "Magnesium",
      short: "Mg",
      wp: "Magnesium",
      mass: "24.305 Ar",
      Z: 12,
      desc: "",
    },
    Al: {
      key: "Al",
      gridtype: "posttransition",
      name: "Aluminium",
      short: "Al",
      wp: "Aluminium",
      mass: "26.98153857 Ar",
      Z: 13,
      desc: "",
    },
    Si: {
      key: "Si",
      gridtype: "metalloid",
      name: "Silicon",
      short: "Si",
      wp: "Silicon",
      mass: "28.085 Ar",
      Z: 14,
      desc: "",
    },
    P: {
      key: "P",
      gridtype: "polyatomic",
      name: "Phosphorus",
      short: "P",
      wp: "Phosphorus",
      mass: "30.9737619985 Ar",
      Z: 15,
      desc: "",
    },
    S: {
      key: "S",
      gridtype: "polyatomic",
      name: "Sulfur",
      short: "S",
      wp: "Sulfur",
      mass: "32.06 Ar",
      Z: 16,
      desc: "",
    },
    Cl: {
      key: "Cl",
      gridtype: "diatomic",
      name: "Chlorine",
      short: "Cl",
      wp: "Chlorine",
      mass: "35.45 Ar",
      Z: 17,
      desc: "",
    },
    Ar: {
      key: "Ar",
      gridtype: "noble",
      name: "Argon",
      short: "Ar",
      wp: "Argon",
      mass: "39.9481 Ar",
      Z: 18,
      desc: "",
    },
    K: {
      key: "K",
      gridtype: "alkali",
      name: "Potassium",
      short: "K",
      wp: "Potassium",
      mass: "39.09831 Ar",
      Z: 19,
      desc: "",
    },
    Ca: {
      key: "Ca",
      gridtype: "alkaliearth",
      name: "Calcium",
      short: "Ca",
      wp: "Calcium",
      mass: "40.0784 Ar",
      Z: 20,
      desc: "",
    },
    Sc: {
      key: "Sc",
      gridtype: "transition",
      name: "Scandium",
      short: "Sc",
      wp: "Scandium",
      mass: "44.9559085 Ar",
      Z: 21,
      desc: "",
    },
    Ti: {
      key: "Ti",
      gridtype: "transition",
      name: "Titanium",
      short: "Ti",
      wp: "Titanium",
      mass: "47.8671 Ar",
      Z: 22,
      desc: "",
    },
    V: {
      key: "V",
      gridtype: "transition",
      name: "Vanadium",
      short: "V",
      wp: "Vanadium",
      mass: "50.94151 Ar",
      Z: 23,
      desc: "",
    },
    Cr: {
      key: "Cr",
      gridtype: "transition",
      name: "Chromium",
      short: "Cr",
      wp: "Chromium",
      mass: "51.99616 Ar",
      Z: 24,
      desc: "",
    },
    Mn: {
      key: "Mn",
      gridtype: "transition",
      name: "Manganese",
      short: "Mn",
      wp: "Manganese",
      mass: "54.9380443 Ar",
      Z: 25,
      desc: "",
    },
    Fe: {
      key: "Fe",
      gridtype: "transition",
      name: "Iron",
      short: "Fe",
      wp: "Iron",
      mass: "55.8452 Ar",
      Z: 26,
      desc: "",
    },
    Co: {
      key: "Co",
      gridtype: "transition",
      name: "Cobalt",
      short: "Co",
      wp: "Cobalt",
      mass: "58.9331944 Ar",
      Z: 27,
      desc: "",
    },
    Ni: {
      key: "Ni",
      gridtype: "transition",
      name: "Nickel",
      short: "Ni",
      wp: "Nickel",
      mass: "58.69344 Ar",
      Z: 28,
      desc: "",
    },
    Cu: {
      key: "Cu",
      gridtype: "transition",
      name: "Copper",
      short: "Cu",
      wp: "Copper",
      mass: "63.5463 Ar",
      Z: 29,
      desc: "",
    },
    Zn: {
      key: "Zn",
      gridtype: "transition",
      name: "Zinc",
      short: "Zn",
      wp: "Zinc",
      mass: "65.382 Ar",
      Z: 30,
      desc: "",
    },
    Ga: {
      key: "Ga",
      gridtype: "posttransition",
      name: "Gallium",
      short: "Ga",
      wp: "Gallium",
      mass: "69.7231 Ar",
      Z: 31,
      desc: "",
    },
    Ge: {
      key: "Ge",
      gridtype: "metalloid",
      name: "Germanium",
      short: "Ge",
      wp: "Germanium",
      mass: "72.6308 Ar",
      Z: 32,
      desc: "",
    },
    As: {
      key: "As",
      gridtype: "metalloid",
      name: "Arsenic",
      short: "As",
      wp: "Arsenic",
      mass: "74.9215956 Ar",
      Z: 33,
      desc: "",
    },
    Se: {
      key: "Se",
      gridtype: "polyatomic",
      name: "Selenium",
      short: "Se",
      wp: "Selenium",
      mass: "78.9718 Ar",
      Z: 34,
      desc: "",
    },
    Br: {
      key: "Br",
      gridtype: "diatomic",
      name: "Bromine",
      short: "Br",
      wp: "Bromine",
      mass: "79.904 Ar",
      Z: 35,
      desc: "",
    },
    Kr: {
      key: "Kr",
      gridtype: "noble",
      name: "Krypton",
      short: "Kr",
      wp: "Krypton",
      mass: "83.7982 Ar",
      Z: 36,
      desc: "",
    },
    Rb: {
      key: "Rb",
      gridtype: "alkali",
      name: "Rubidium",
      short: "Rb",
      wp: "Rubidium",
      mass: "85.46783 Ar",
      Z: 37,
      desc: "",
    },
    Sr: {
      key: "Sr",
      gridtype: "alkaliearth",
      name: "Strontium",
      short: "Sr",
      wp: "Strontium",
      mass: "87.621 Ar",
      Z: 38,
      desc: "",
    },
    Y: {
      key: "Y",
      gridtype: "transition",
      name: "Yttrium",
      short: "Y",
      wp: "Yttrium",
      mass: "88.905842 Ar",
      Z: 39,
      desc: "",
    },
    Zr: {
      key: "Zr",
      gridtype: "transition",
      name: "Zirconium",
      short: "Zr",
      wp: "Zirconium",
      mass: "91.2242 Ar",
      Z: 40,
      desc: "",
    },
    Nb: {
      key: "Nb",
      gridtype: "transition",
      name: "Niobium",
      short: "Nb",
      wp: "Niobium",
      mass: "92.906372 Ar",
      Z: 41,
      desc: "",
    },
    Mo: {
      key: "Mo",
      gridtype: "transition",
      name: "Molybdenum",
      short: "Mo",
      wp: "Molybdenum",
      mass: "95.951 Ar",
      Z: 42,
      desc: "",
    },
    Tc: {
      key: "Tc",
      gridtype: "transition",
      name: "Technetium",
      short: "Tc",
      wp: "Technetium",
      mass: "98 Ar",
      Z: 43,
      desc: "",
    },
    Ru: {
      key: "Ru",
      gridtype: "transition",
      name: "Ruthenium",
      short: "Ru",
      wp: "Ruthenium",
      mass: "101.072 Ar",
      Z: 44,
      desc: "",
    },
    Rh: {
      key: "Rh",
      gridtype: "transition",
      name: "Rhodium",
      short: "Rh",
      wp: "Rhodium",
      mass: "102.905502 Ar",
      Z: 45,
      desc: "",
    },
    Pd: {
      key: "Pd",
      gridtype: "transition",
      name: "Palladium",
      short: "Pd",
      wp: "Palladium",
      mass: "106.421 Ar",
      Z: 46,
      desc: "",
    },
    Ag: {
      key: "Ag",
      gridtype: "transition",
      name: "Silver",
      short: "Ag",
      wp: "Silver",
      mass: "107.86822 Ar",
      Z: 47,
      desc: "",
    },
    Cd: {
      key: "Cd",
      gridtype: "transition",
      name: "Cadmium",
      short: "Cd",
      wp: "Cadmium",
      mass: "112.4144 Ar",
      Z: 48,
      desc: "",
    },
    In: {
      key: "In",
      gridtype: "posttransition",
      name: "Indium",
      short: "In",
      wp: "Indium",
      mass: "114.8181 Ar",
      Z: 49,
      desc: "",
    },
    Sn: {
      key: "Sn",
      gridtype: "posttransition",
      name: "Tin",
      short: "Sn",
      wp: "Tin",
      mass: "118.7107 Ar",
      Z: 50,
      desc: "",
    },
    Sb: {
      key: "Sb",
      gridtype: "metalloid",
      name: "Antimony",
      short: "Sb",
      wp: "Antimony",
      mass: "121.7601 Ar",
      Z: 51,
      desc: "",
    },
    Te: {
      key: "Te",
      gridtype: "metalloid",
      name: "Tellurium",
      short: "Te",
      wp: "Tellurium",
      mass: "127.603 Ar",
      Z: 52,
      desc: "",
    },
    I: {
      key: "I",
      gridtype: "diatomic",
      name: "Iodine",
      short: "I",
      wp: "Iodine",
      mass: "126.904473 Ar",
      Z: 53,
      desc: "",
    },
    Xe: {
      key: "Xe",
      gridtype: "noble",
      name: "Xenon",
      short: "Xe",
      wp: "Xenon",
      mass: "131.2936 Ar",
      Z: 54,
      desc: "",
    },
    Cs: {
      key: "Cs",
      gridtype: "alkali",
      name: "Cesium",
      short: "Cs",
      wp: "Cesium",
      mass: "132.905451966 Ar",
      Z: 55,
      desc: "",
    },
    Ba: {
      key: "Ba",
      gridtype: "alkaliearth",
      name: "Barium",
      short: "Ba",
      wp: "Barium",
      mass: "137.3277 Ar",
      Z: 56,
      desc: "",
    },
    La: {
      key: "La",
      gridtype: "lanthanide",
      name: "Lanthanum",
      short: "La",
      wp: "Lanthanum",
      mass: "138.905477 Ar",
      Z: 57,
      desc: "",
    },
    Ce: {
      key: "Ce",
      gridtype: "lanthanide",
      name: "Cerium",
      short: "Ce",
      wp: "Cerium",
      mass: "140.1161 Ar",
      Z: 58,
      desc: "",
    },
    Pr: {
      key: "Pr",
      gridtype: "lanthanide",
      name: "Praseodymium",
      short: "Pr",
      wp: "Praseodymium",
      mass: "140.907662 Ar",
      Z: 59,
      desc: "",
    },
    Nd: {
      key: "Nd",
      gridtype: "lanthanide",
      name: "Neodymium",
      short: "Nd",
      wp: "Neodymium",
      mass: "144.2423 Ar",
      Z: 60,
      desc: "",
    },
    Pm: {
      key: "Pm",
      gridtype: "lanthanide",
      name: "Promethium",
      short: "Pm",
      wp: "Promethium",
      mass: "145 Ar",
      Z: 61,
      desc: "",
    },
    Sm: {
      key: "Sm",
      gridtype: "lanthanide",
      name: "Samarium",
      short: "Sm",
      wp: "Samarium",
      mass: "150.362 Ar",
      Z: 62,
      desc: "",
    },
    Eu: {
      key: "Eu",
      gridtype: "lanthanide",
      name: "Europium",
      short: "Eu",
      wp: "Europium",
      mass: "151.9641 Ar",
      Z: 63,
      desc: "",
    },
    Gd: {
      key: "Gd",
      gridtype: "lanthanide",
      name: "Gadolinium",
      short: "Gd",
      wp: "Gadolinium",
      mass: "157.253 Ar",
      Z: 64,
      desc: "",
    },
    Tb: {
      key: "Tb",
      gridtype: "lanthanide",
      name: "Terbium",
      short: "Tb",
      wp: "Terbium",
      mass: "158.925352 Ar",
      Z: 65,
      desc: "",
    },
    Dy: {
      key: "Dy",
      gridtype: "lanthanide",
      name: "Dysprosium",
      short: "Dy",
      wp: "Dysprosium",
      mass: "162.5001 Ar",
      Z: 66,
      desc: "",
    },
    Ho: {
      key: "Ho",
      gridtype: "lanthanide",
      name: "Holmium",
      short: "Ho",
      wp: "Holmium",
      mass: "164.930332 Ar",
      Z: 67,
      desc: "",
    },
    Er: {
      key: "Er",
      gridtype: "lanthanide",
      name: "Erbium",
      short: "Er",
      wp: "Erbium",
      mass: "167.2593 Ar",
      Z: 68,
      desc: "",
    },
    Tm: {
      key: "Tm",
      gridtype: "lanthanide",
      name: "Thulium",
      short: "Tm",
      wp: "Thulium",
      mass: "168.934222 Ar",
      Z: 69,
      desc: "",
    },
    Yb: {
      key: "Yb",
      gridtype: "lanthanide",
      name: "Ytterbium",
      short: "Yb",
      wp: "Ytterbium",
      mass: "173.0451 Ar",
      Z: 70,
      desc: "",
    },
    Lu: {
      key: "Lu",
      gridtype: "lanthanide",
      name: "Lutetium",
      short: "Lu",
      wp: "Lutetium",
      mass: "174.96681 Ar",
      Z: 71,
      desc: "",
    },
    Hf: {
      key: "Hf",
      gridtype: "transition",
      name: "Hafnium",
      short: "Hf",
      wp: "Hafnium",
      mass: "178.492 Ar",
      Z: 72,
      desc: "",
    },
    Ta: {
      key: "Ta",
      gridtype: "transition",
      name: "Tantalum",
      short: "Ta",
      wp: "Tantalum",
      mass: "180.947882 Ar",
      Z: 73,
      desc: "",
    },
    W: {
      key: "W",
      gridtype: "transition",
      name: "Tungsten",
      short: "W",
      wp: "Tungsten",
      mass: "183.841 Ar",
      Z: 74,
      desc: "",
    },
    Re: {
      key: "Re",
      gridtype: "transition",
      name: "Rhenium",
      short: "Re",
      wp: "Rhenium",
      mass: "186.2071 Ar",
      Z: 75,
      desc: "",
    },
    Os: {
      key: "Os",
      gridtype: "transition",
      name: "Osmium",
      short: "Os",
      wp: "Osmium",
      mass: "190.233 Ar",
      Z: 76,
      desc: "",
    },
    Ir: {
      key: "Ir",
      gridtype: "transition",
      name: "Iridium",
      short: "Ir",
      wp: "Iridium",
      mass: "192.2173 Ar",
      Z: 77,
      desc: "",
    },
    Pt: {
      key: "Pt",
      gridtype: "transition",
      name: "Platinum",
      short: "Pt",
      wp: "Platinum",
      mass: "195.0849 Ar",
      Z: 78,
      desc: "",
    },
    Au: {
      key: "Au",
      gridtype: "transition",
      name: "Gold",
      short: "Au",
      wp: "Gold",
      mass: "196.9665695 Ar",
      Z: 79,
      desc: "",
    },
    Hg: {
      key: "Hg",
      gridtype: "transition",
      name: "Mercury",
      short: "Hg",
      wp: "Mercury (Element)",
      mass: "200.5923 Ar",
      Z: 80,
      desc: "",
    },
    Tl: {
      key: "Tl",
      gridtype: "posttransition",
      name: "Thallium",
      short: "Tl",
      wp: "Thallium",
      mass: "204.38 Ar",
      Z: 81,
      desc: "",
    },
    Pb: {
      key: "Pb",
      gridtype: "posttransition",
      name: "Lead",
      short: "Pb",
      wp: "Lead_(element)",
      mass: "207.21 Ar",
      Z: 82,
      desc: "",
    },
    Bi: {
      key: "Bi",
      gridtype: "posttransition",
      name: "Bismuth",
      short: "Bi",
      wp: "Bismuth",
      mass: "208.980401 Ar",
      Z: 83,
      "desc": "",
      "children": null
    },
    Po: {
      key: "Po",
      gridtype: "posttransition",
      name: "Polonium",
      short: "Po",
      wp: "Polonium",
      mass: "209 Ar",
      Z: 84,
      desc: "",
    },
    At: {
      key: "At",
      gridtype: "metalloid",
      name: "Astatine",
      short: "At",
      wp: "Astatine",
      mass: "210 Ar",
      Z: 85,
      desc: "",
    },
    Rn: {
      key: "Rn",
      gridtype: "noble",
      name: "Radon",
      short: "Rn",
      wp: "Radon",
      mass: "222 Ar",
      Z: 86,
      desc: "",
    },
    Fr: {
      key: "Fr",
      gridtype: "alkali",
      name: "Francium",
      short: "Fr",
      wp: "Francium",
      mass: "223 Ar",
      Z: 87,
      desc: "",
    },
    Ra: {
      key: "Ra",
      gridtype: "alkaliearth",
      name: "Radium",
      short: "Ra",
      wp: "Radium",
      mass: "226 Ar",
      Z: 88,
      desc: "",
    },
    Ac: {
      key: "Ac",
      gridtype: "actinide",
      name: "Actinium",
      short: "Ac",
      wp: "Actinium",
      mass: "227 Ar",
      Z: 89,
      desc: "",
    },
    Th: {
      key: "Th",
      gridtype: "actinide",
      name: "Thorium",
      short: "Th",
      wp: "Thorium",
      mass: "232.03774 Ar",
      Z: 90,
      desc: "",
    },
    Pa: {
      key: "Pa",
      gridtype: "actinide",
      name: "Protactinium",
      short: "Pa",
      wp: "Protactinium",
      mass: "231.035882 Ar",
      Z: 91,
      desc: "",
    },
    U: {
      key: "U",
      gridtype: "actinide",
      name: "Uranium",
      short: "U",
      wp: "Uranium",
      mass: "238.028913 Ar",
      Z: 92,
      desc: "",
    },
    Np: {
      key: "Np",
      gridtype: "actinide",
      name: "Neptunium",
      short: "Np",
      wp: "Neptunium",
      mass: "237 Ar",
      Z: 93,
      desc: "",
    },
    Pu: {
      key: "Pu",
      gridtype: "actinide",
      name: "Plutonium",
      short: "Pu",
      wp: "Plutonium",
      mass: "244 Ar",
      Z: 94,
      desc: "",
    },
    Am: {
      key: "Am",
      gridtype: "actinide",
      name: "Americium",
      short: "Am",
      wp: "Americium",
      mass: "243 Ar",
      Z: 95,
      desc: "",
    },
    Cm: {
      key: "Cm",
      gridtype: "actinide",
      name: "Curium",
      short: "Cm",
      wp: "Curium",
      mass: "247 Ar",
      Z: 96,
      desc: "",
    },
    Bk: {
      key: "Bk",
      gridtype: "actinide",
      name: "Berkelium",
      short: "Bk",
      wp: "Berkelium",
      mass: "247 Ar",
      Z: 97,
      desc: "",
    },
    Cf: {
      key: "Cf",
      gridtype: "actinide",
      name: "Californium",
      short: "Cf",
      wp: "Californium",
      mass: "251 Ar",
      Z: 98,
      desc: "",
    },
    Es: {
      key: "Es",
      gridtype: "actinide",
      name: "Einsteinium",
      short: "Es",
      wp: "Einsteinium",
      mass: "252 Ar",
      Z: 99,
      desc: "",
    },
    Fm: {
      key: "Fm",
      gridtype: "actinide",
      name: "Fermium",
      short: "Fm",
      wp: "Fermium",
      mass: "257 Ar",
      Z: 100,
      desc: "",
    },
    Md: {
      key: "Md",
      gridtype: "actinide",
      name: "Mendelevium",
      short: "Md",
      wp: "Mendelevium",
      mass: "258 Ar",
      Z: 101,
      desc: "",
    },
    No: {
      key: "No",
      gridtype: "actinide",
      name: "Nobelium",
      short: "No",
      wp: "Nobelium",
      mass: "259 Ar",
      Z: 102,
      desc: "",
    },
    Lr: {
      key: "Lr",
      gridtype: "actinide",
      name: "Lawrencium",
      short: "Lr",
      wp: "Lawrencium",
      mass: "266 Ar",
      Z: 103,
      desc: "",
    },
    Rf: {
      key: "Rf",
      gridtype: "transition",
      name: "Rutherfordium",
      short: "Rf",
      wp: "Rutherfordium",
      mass: "267 Ar",
      Z: 104,
      desc: "",
    },
    Db: {
      key: "Db",
      gridtype: "transition",
      name: "Dubnium",
      short: "Db",
      wp: "Dubnium",
      mass: "268 Ar",
      Z: 105,
      desc: "",
    },
    Sg: {
      key: "Sg",
      gridtype: "transition",
      name: "Seaborgium",
      short: "Sg",
      wp: "Seaborgium",
      mass: "269 Ar",
      Z: 106,
      desc: "",
    },
    Bh: {
      key: "Bh",
      gridtype: "transition",
      name: "Bohrium",
      short: "Bh",
      wp: "Bohrium",
      mass: "270 Ar",
      Z: 107,
      desc: "",
    },
    Hs: {
      key: "Hs",
      gridtype: "transition",
      name: "Hassium",
      short: "Hs",
      wp: "Hassium",
      mass: "269 Ar",
      Z: 108,
      desc: "",
    },
    Mt: {
      key: "Mt",
      gridtype: "unknown",
      name: "Meitnerium",
      short: "Mt",
      wp: "Meitnerium",
      mass: "278 Ar",
      Z: 109,
      desc: "",
    },
    Ds: {
      key: "Ds",
      gridtype: "unknown",
      name: "Darmstadtium",
      short: "Ds",
      wp: "Darmstadtium",
      mass: "281 Ar",
      Z: 110,
      desc: "",
    },
    Rg: {
      key: "Rg",
      gridtype: "unknown",
      name: "Roentgenium",
      short: "Rg",
      wp: "Roentgenium",
      mass: "282 Ar",
      Z: 111,
      desc: "",
    },
    Cn: {
      key: "Cn",
      gridtype: "transition",
      name: "Copernicium",
      short: "Cn",
      wp: "Copernicium",
      mass: "285 Ar",
      Z: 112,
      desc: "",
    },
    Nh: {
      key: "Nh",
      gridtype: "unknown",
      name: "Nihonium",
      short: "Nh",
      wp: "Nihonium",
      mass: "286 Ar",
      Z: 113,
      desc: "",
    },
    Fl: {
      key: "Fl",
      gridtype: "posttransition",
      name: "Flerovium",
      short: "Fl",
      wp: "Flerovium",
      mass: "289 Ar",
      Z: 114,
      desc: "",
    },
    Mc: {
      key: "Mc",
      gridtype: "unknown",
      name: "Moscovium",
      short: "Mc",
      wp: "Ununpentium",
      mass: "289 Ar",
      Z: 115,
      desc: "",
    },
    Lv: {
      key: "Lv",
      gridtype: "unknown",
      name: "Livermorium",
      short: "Lv",
      wp: "Livermorium",
      mass: "293 Ar",
      Z: 116,
      desc: "",
    },
    Ts: {
      key: "Ts",
      gridtype: "unknown",
      name: "Tennessine",
      short: "Ts",
      wp: "Tennessine",
      mass: "294 Ar",
      Z: 117,
      desc: "",
    },
    Og: {
      key: "Og",
      gridtype: "unknown",
      name: "Oganesson",
      short: "Og",
      wp: "Oganesson",
      mass: "294 Ar",
      Z: 118,
      desc: "",
    },
  }
}

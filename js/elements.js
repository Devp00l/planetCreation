/*
 * Erstellt verschiedene durchschnitts Elemente.
 * */
function superElements(){
  var elements = [
    {
      element: "Wasserstoff",
      symbol: "H",
      number: 1,
      mass: 1.008,
      frequency: 3.18 * Math.pow(10, 10)
    },
    {
      element: "Helium",
      symbol: "He",
      number: 2,
      mass: 4.003,
      frequency: 2.21 * Math.pow(10, 9)
    },
    {
      element: "Lithium",
      symbol: "Li",
      number: 3,
      mass: 6.941,
      frequency: 4.95 * Math.pow(10, 1)
    },
    {
      element: "Beryllium",
      symbol: "Be",
      number: 4,
      mass: 9.012,
      frequency: 0.81
    },
    {
      element: "Bor",
      symbol: "B",
      number: 5,
      mass: 10.811,
      frequency: 3.50 * Math.pow(10, 2)
    },
    {
      element: "Kohlenstoff",
      symbol: "C",
      number: 6,
      mass: 12.011,
      frequency: 1.18 * Math.pow(10, 7)
    },
    {
      element: "Stickstoff",
      symbol: "N",
      number: 7,
      mass: 14.007,
      frequency: 3.74 * Math.pow(10, 6)
    },
    {
      element: "Sauerstoff",
      symbol: "O",
      number: 8,
      mass: 15.999,
      frequency: 2.15 * Math.pow(10, 7)
    },
    {
      element: "Fluor",
      symbol: "F",
      number: 9,
      mass: 18.998,
      frequency: 2.45 * Math.pow(10, 3)
    },
    {
      element: "Neon",
      symbol: "Ne",
      number: 10,
      mass: 20.180,
      frequency: 3.44 * Math.pow(10, 6)
    },
    {
      element: "Natrium",
      symbol: "Na",
      number: 11,
      mass: 22.990,
      frequency: 6.0 * Math.pow(10, 4)
    },
    {
      element: "Magnesium",
      symbol: "Mg",
      number: 12,
      mass: 24.305,
      frequency: 1.061 * Math.pow(10, 6)
    },
    {
      element: "Aluminium",
      symbol: "Al",
      number: 13,
      mass: 26.982,
      frequency: 8.5 * Math.pow(10, 4)
    },
    {
      element: "Silicium",
      symbol: "Si",
      number: 14,
      mass: 28.086,
      frequency: 1.0 * Math.pow(10, 6)
    },
    {
      element: "Phosphor",
      symbol: "P",
      number: 15,
      mass: 30.974,
      frequency: 9.6 * Math.pow(10, 3)
    },
    {
      element: "Schwefel",
      symbol: "S",
      number: 16,
      mass: 32.065,
      frequency: 5.0 * Math.pow(10, 5)
    },
    {
      element: "Chlor",
      symbol: "Cl",
      number: 17,
      mass: 35.453,
      frequency: 5.7 * Math.pow(10, 3)
    },
    {
      element: "Argon",
      symbol: "Ar",
      number: 18,
      mass: 39.948,
      frequency: 1.172 * Math.pow(10, 5)
    },
    {
      element: "Kalium",
      symbol: "K",
      number: 19,
      mass: 39.098,
      frequency: 4.2 * Math.pow(10, 3)
    },
    {
      element: "Calcium",
      symbol: "Ca",
      number: 20,
      mass: 40.078,
      frequency: 7.21 * Math.pow(10, 4)
    },
    {
      element: "Scandium",
      symbol: "Sc",
      number: 21,
      mass: 44.956,
      frequency: 3.5 * Math.pow(10, 1)
    },
    {
      element: "Titan",
      symbol: "Ti",
      number: 22,
      mass: 47.867,
      frequency: 2.775 * Math.pow(10, 3)
    },
    {
      element: "Vanadium",
      symbol: "V",
      number: 23,
      mass: 50.942,
      frequency: 2.62 * Math.pow(10, 2)
    },
    {
      element: "Chrom",
      symbol: "Cr",
      number: 24,
      mass: 51.996,
      frequency: 1.27 * Math.pow(10, 4)
    },
    {
      element: "Mangan",
      symbol: "Mn",
      number: 25,
      mass: 54.938,
      frequency: 9.3 * Math.pow(10, 3)
    },
    {
      element: "Eisen",
      symbol: "Fe",
      number: 26,
      mass: 55.845,
      frequency: 8.3 * Math.pow(10, 5)
    },
    {
      element: "Cobalt",
      symbol: "Co",
      number: 27,
      mass: 58.933,
      frequency: 2.21 * Math.pow(10, 3)
    },
    {
      element: "Nickel",
      symbol: "Ni",
      number: 28,
      mass: 58.693,
      frequency: 4.8 * Math.pow(10, 4)
    },
    {
      element: "Kupfer",
      symbol: "Cu",
      number: 29,
      mass: 63.546,
      frequency: 5.4 * Math.pow(10, 2)
    },
    {
      element: "Zink",
      symbol: "Zn",
      number: 30,
      mass: 65.409,
      frequency: 1.244 * Math.pow(10, 3)
    },
    {
      element: "Gallium",
      symbol: "Ga",
      number: 31,
      mass: 69.723,
      frequency: 4.8 * Math.pow(10, 1)
    },
    {
      element: "Germanium",
      symbol: "Ge",
      number: 32,
      mass: 72.640,
      frequency: 1.15 * Math.pow(10, 2)
    },
    {
      element: "Arsen",
      symbol: "As",
      number: 33,
      mass: 74.922,
      frequency: 6.6
    },
    {
      element: "Selen",
      symbol: "Se",
      number: 34,
      mass: 78.960,
      frequency: 6.72 * Math.pow(10, 1)
    },
    {
      element: "Brom",
      symbol: "Br",
      number: 35,
      mass: 79.904,
      frequency: 1.35 * Math.pow(10, 1)
    },
    {
      element: "Krypton",
      symbol: "Kr",
      number: 36,
      mass: 83.798,
      frequency: 4.68 * Math.pow(10, 1)
    },
    {
      element: "Rubidium",
      symbol: "Rb",
      number: 37,
      mass: 85.468,
      frequency: 5.88
    },
    {
      element: "Strontium",
      symbol: "Sr",
      number: 38,
      mass: 87.620,
      frequency: 2.69 * Math.pow(10, 1)
    },
    {
      element: "Yttrium",
      symbol: "Y",
      number: 39,
      mass: 88.906,
      frequency: 4.8
    },
    {
      element: "Zirconium",
      symbol: "Zr",
      number: 40,
      mass: 91.224,
      frequency: 2.8 * Math.pow(10, 1)
    },
    {
      element: "Niob",
      symbol: "Nb",
      number: 41,
      mass: 92.906,
      frequency: 1.4
    },
    {
      element: "Molybdän",
      symbol: "Mo",
      number: 42,
      mass: 95.940,
      frequency: 4.0
    },
    {
      element: "Ruthenium",
      symbol: "Ru",
      number: 44,
      mass: 101.070,
      frequency: 1.9
    },
    {
      element: "Rhodium",
      symbol: "Rh",
      number: 45,
      mass: 102.906,
      frequency: 0.4
    },
    {
      element: "Palladium",
      symbol: "Pd",
      number: 46,
      mass: 106.420,
      frequency: 1.3
    },
    {
      element: "Silber",
      symbol: "Ag",
      number: 47,
      mass: 107.868,
      frequency: 0.45
    },
    {
      element: "Cadmium",
      symbol: "Cd",
      number: 48,
      mass: 112.411,
      frequency: 1.48
    },
    {
      element: "Indium",
      symbol: "In",
      number: 49,
      mass: 114.818,
      frequency: 0.189
    },
    {
      element: "Zinn",
      symbol: "Sn",
      number: 50,
      mass: 118.710,
      frequency: 3.6
    },
    {
      element: "Antimon",
      symbol: "Sb",
      number: 51,
      mass: 121.760,
      frequency: 0.316
    },
    {
      element: "Tellur",
      symbol: "Te",
      number: 52,
      mass: 127.60,
      frequency: 6.42
    },
    {
      element: "Iod",
      symbol: "I",
      number: 53,
      mass: 126.904,
      frequency: 1.09
    },
    {
      element: "Xenon",
      symbol: "Xe",
      number: 54,
      mass: 131.293,
      frequency: 5.38
    },
    {
      element: "Caesium",
      symbol: "Cs",
      number: 55,
      mass: 132.905,
      frequency: 0.387
    },
    {
      element: "Barium",
      symbol: "Ba",
      number: 56,
      mass: 137.327,
      frequency: 4.8
    },
    {
      element: "Lanthan",
      symbol: "La",
      number: 57,
      mass: 138.906,
      frequency: 0.445
    },
    {
      element: "Cer",
      symbol: "Ce",
      number: 58,
      mass: 140.116,
      frequency: 1.18
    },
    {
      element: "Praseodym",
      symbol: "Pr",
      number: 59,
      mass: 140.908,
      frequency: 0.149
    },
    {
      element: "Neodym",
      symbol: "Nd",
      number: 60,
      mass: 144.240,
      frequency: 0.78
    },
    {
      element: "Samarium",
      symbol: "Sm",
      number: 62,
      mass: 150.360,
      frequency: 0.226
    },
    {
      element: "Europium",
      symbol: "Eu",
      number: 63,
      mass: 151.964,
      frequency: 0.085
    },
    {
      element: "Gadolinium",
      symbol: "Gd",
      number: 64,
      mass: 157.250,
      frequency: 0.297
    },
    {
      element: "Terbium",
      symbol: "Tb",
      number: 65,
      mass: 158.925,
      frequency: 0.055
    },
    {
      element: "Dysprosium",
      symbol: "Dy",
      number: 66,
      mass: 162.500,
      frequency: 0.36
    },
    {
      element: "Holmium",
      symbol: "Ho",
      number: 67,
      mass: 164.930,
      frequency: 0.079
    },
    {
      element: "Erbium",
      symbol: "Er",
      number: 68,
      mass: 167.259,
      frequency: 0.225
    },
    {
      element: "Thulium",
      symbol: "Tm",
      number: 69,
      mass: 168.934,
      frequency: 0.034
    },
    {
      element: "Ytterbium",
      symbol: "Yb",
      number: 70,
      mass: 173.040,
      frequency: 0.216
    },
    {
      element: "Lutetium",
      symbol: "Lu",
      number: 71,
      mass: 174.967,
      frequency: 0.036
    },
    {
      element: "Hafnium",
      symbol: "Hf",
      number: 72,
      mass: 178.490,
      frequency: 0.21
    },
    {
      element: "Tantal",
      symbol: "Ta",
      number: 73,
      mass: 180.948,
      frequency: 0.021
    },
    {
      element: "Wolfram",
      symbol: "W",
      number: 74,
      mass: 186.840,
      frequency: 0.16
    },
    {
      element: "Rhenium",
      symbol: "Re",
      number: 75,
      mass: 186.207,
      frequency: 0.053
    },
    {
      element: "Osmium",
      symbol: "Os",
      number: 76,
      mass: 190.230,
      frequency: 0.75
    },
    {
      element: "Iridium",
      symbol: "Ir",
      number: 77,
      mass: 192.217,
      frequency: 0.717
    },
    {
      element: "Platin",
      symbol: "Pt",
      number: 78,
      mass: 195.078,
      frequency: 1.4
    },
    {
      element: "Gold",
      symbol: "Au",
      number: 79,
      mass: 196.967,
      frequency: 0.202
    },
    {
      element: "Quecksilber",
      symbol: "Hg",
      number: 80,
      mass: 200.590,
      frequency: 0.4
    },
    {
      element: "Thallium",
      symbol: "Tl",
      number: 81,
      mass: 204.383,
      frequency: 0.192
    },
    {
      element: "Blei",
      symbol: "Pb",
      number: 82,
      mass: 207.20,
      frequency: 4.0
    },
    {
      element: "Bismut",
      symbol: "Bi",
      number: 83,
      mass: 208.980,
      frequency: 0.143
    },
    {
      element: "Thorium",
      symbol: "Th",
      number: 90,
      mass: 232.038,
      frequency: 0.058
    },
    {
      element: "Uran",
      symbol: "U",
      number: 92,
      mass: 238.029,
      frequency: 0.0262
    }
  ];

  // Prozentuales vorkommen jedes Elementes.
  var sum=0;
  elements.forEach(function(a){
    sum += a.frequency;
  });

  elements.forEach(function(a){
    a.percent = a.frequency / sum;
  });

  /*
   * Elemente zu Gruppen fassen
   * und diese dem Zufall entsprechend freisetzten,
   * so steigt mit der Zeit auch die Dichte der Teilchen an.
   * Aus den Gruppen wird ein Durchschnitts element
   * mit durchschnitts Größe, Gewicht und Verteilung.
   *
   * */
  var allArrays = {
    actinide: ["Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr"],
    alkaliMetal: ["Li", "Na", "K", "Rb", "Cs", "Fr"],
    alkalineEarthMetal: ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
    diatomicNonmetal: ["H", "N", "O", "F", "Cl", "Br", "I"],
    lanthanide: ["La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu"],
    metalloid: ["B", "Si", "Ge", "As", "Sb", "Te", "At"],
    nobleGas: ["He", "Ne", "Ar", "Kr", "Xe", "Rn"],
    polyatomicNonmetal: ["C", "P", "S", "Se"],
    postTransitionMetal: ["Al", "Ga", "In", "Sn", "Tl", "Pb", "Bi", "Po", "Fl"],
    transitionMetal: ["Al", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "Rf", "Db", "Sg", "Bh", "Hs", "Cn", "Fl"]
  };

  //Erweitere ein Array mit Daten von Elementen wenn es Element-Abkürzungen hält.
  Array.prototype.extendArray = function () {
    this.forEach(function(symbol, index, array){
      array[index] = elements.find(function(element){return element.symbol === symbol;});
    });
    return this.filter(function(symbol){return symbol !== undefined;});
  };

  //Erstellt ein durchschnits Element, aus allen Elementen im Array.
  Array.prototype.makeDefault = function (name) {
    var def = {
      number: 0,
      mass: 0,
      frequency: 0,
      percent: 0
    };
    this.forEach(function(a){
      def.number += a.number;
      def.mass += a.mass;
      def.frequency += a.frequency;
      def.percent += a.percent;
    });
    def.name = name;
    def.number /= this.length;
    def.mass /= this.length;
    def.frequency /= this.length;
    def.percent /= this.length;
    return def;
  };

  //Ereweitere alle Arrays
  var allDefs = {}, i;
  for(i in allArrays){
    var edef = allArrays[i].extendArray().makeDefault(i);
    allDefs[edef.name] = edef;
  }

  //Erstelle einen durchschnits Verteilungswert.
  sum = 0;
  for(i in allDefs){
    var fq = allDefs[i].frequency;
    if (!isNaN(fq)){
      sum += fq;
    }
  }

  for(i in allDefs){
    allDefs[i].percent = allDefs[i].frequency / sum;
  }

  return allDefs;
}

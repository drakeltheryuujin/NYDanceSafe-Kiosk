export const apiUrl = 'http://localhost:3001/api';

export const resortDrugsByName = (a, b) => {
      const drugA = a.prettyName.toUpperCase();
      const drugB = b.prettyName.toUpperCase();

      let resort = 0;
      if (drugA > drugB) {
        resort = 1;
      } else if (drugA < drugB) {
        resort = -1;
      }
      return resort;
  }


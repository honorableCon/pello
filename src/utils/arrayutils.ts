const sortData = (field: string, data: Array<any>, dir?: string) => {
  let sortedRecord = [...data];
  if (dir && dir === "desc") {
    sortedRecord = sortedRecord.sort((a: any, b: any) => {
      if (typeof b[field] === "number") {
        return b[field] - a[field];
      } else {
        return (b[field] || "").toLowerCase() > (a[field] || "").toLowerCase()
          ? 1
          : -1;
      }
    });
  } else {
    sortedRecord = sortedRecord.sort((a: any, b: any) => {
      if (typeof b[field] === "number") {
        return a[field] - b[field];
      } else {
        return (a[field] || "").toLowerCase() > (b[field] || "").toLowerCase()
          ? 1
          : -1;
      }
    });
  }

  return sortedRecord;
};

const groupByFields = (array: any, f: any) => {
  /*
    params description :
        f : function which returnf the array of fields 
        e.g. :  (item) => {
            return [itemField1, itemField2];
        }

        array : array of data to group e.g. : [{...}, {...}]       
    */

  var groups: any = {};
  array.forEach((o: any) => {
    var group = JSON.stringify(f(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.keys(groups).map(group => {
    return groups[group];
  });
};
export interface DivideByKeyResultTypes {
  letter: string;
  data: Array<any>;
}
const divideByKey = (field: string, array: any) => {
  let map = array.reduce((p: any, c: any) => {
    let char = c[field].charAt(0).toUpperCase();
    p[char] = [].concat(p[char] || [], c);
    return p;
  }, {});

  let result = Object.keys(map).map(k => ({
    letter: k,
    data: map[k],
  }));
  result = sortData("letter", result);
  return result;
};
export { sortData, groupByFields, divideByKey };

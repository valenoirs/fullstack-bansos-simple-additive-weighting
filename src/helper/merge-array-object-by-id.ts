export default function mergeArrayObjectsById(arr1: any, arr2: any) {
  return arr1.map((item: any, i: any) => {
    if (item.id === arr2[i].id) {
      //merging two objects
      return Object.assign({}, item, arr2[i]);
    }
  });
}

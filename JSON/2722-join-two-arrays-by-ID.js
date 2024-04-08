/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
 
   const map1 = new Map(arr1.map(obj => [obj.id, obj]));
   const map2 = new Map(arr2.map(obj => [obj.id, obj]));


   const uniqueIds = [...new Set([...map1.keys(), ...map2.keys()])];

  
   const joinedArray = uniqueIds.map(id => {
       const obj1 = map1.get(id);
       const obj2 = map2.get(id);

       
       if (obj1 && obj2) {
           return { id, ...obj1, ...obj2 };
       }
      
       return obj1 || obj2;
   });

 
   joinedArray.sort((a, b) => a.id - b.id);

   return joinedArray;
};
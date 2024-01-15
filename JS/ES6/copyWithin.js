
const Names = [
   "Abishek",
   "Groot",
   "GrootDevelopment",
   "jai",
   "invisible",
   "ajay",
   "jeeva",
 ];
 
 
 const a = Names.copyWithin(0,1,4)
 console.log(a);
 
 
 /*
 (method) Array<string>.copyWithin(target: number, start: number, end?: number | undefined): string[]
 Returns the this object after copying a section of the array identified by start and end to the same array starting at position target
 
 @param target
 If target is negative, it is treated as length+target where length is the length of the array.
 
 @param start
 If start is negative, it is treated as length+start. If end is negative, it is treated as length+end.
 
 @param end — If not specified, length of the this object is used as its default value.
 */
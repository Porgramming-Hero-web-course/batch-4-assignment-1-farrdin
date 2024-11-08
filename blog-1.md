- TypeScript makes JavaScript safe and easier to work with by adding types. Two of the most helpful types in TypeScript are Union and Intersection types. These types let us handle complex and conditional data while keeping our code safe and flexible.

- Union Types '|' Allow a variable to select one of several types. For example, string | number means a variable can be a string or a number.

- Why Union Types Are Useful :
  Union types allow a variable to take on different types, making functions more flexible.

Example:
function displayId(id: string | number) {
if (typeof id === "string") {
console.log("ID is a string");
} else {
console.log("ID is a number");
}
}
Here, id can be a string or number, so displayId can handle both cases safely.

- Benefits:
  Flexible input- Functions can handle multiple types.
  Clear code- Union types make code more understandable.
  Real Example- Union types are useful for handling different API responses, like success or error messages.

- Intersection Types '&' Combine multiple types, so a variable must meet all of them. For example, 'A' & 'B' would mean a variable has both A and B properties.

- Why Intersection Types Are Useful
  Intersection types combine multiple types, so a variable must have all the properties from each type.

Example:
interface A {
name: string;
}
interface B {
Id: number;
}
type AB = A & B;

const Result: AB = {
name: "X",
Id: 1,
};
In this example, AB must have both name and Id.

- Benefits:
  Detailed data- Ensures all properties are present.
  Reusable code- You can combine types instead of creating new ones.
  Real Example- This is useful when a user in a system has multiple roles, like being both a user and an admin.

- Union and Intersection Types in TypeScript help us write flexible, safe code. Union types allow variables to have different types, making functions adaptable. Intersection types combine multiple types, ensuring all properties are available. These tools make TypeScript a great choice for building reliable applications!

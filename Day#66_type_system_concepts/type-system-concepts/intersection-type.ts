/*********************
 * INTERSECTION TYPE *
 *********************/

type FirstType = {
    name: string;
    age: number;
  };
  
  type SecondType = {
    address: string;
    phone: string;
  };
  
  type CombinedType = FirstType & SecondType; // intersection using &
  
  const person: CombinedType = {
    name: "John Doe",
    age: 30,
    address: "123 Main St",
    phone: "123-456-7890",
  };

  console.log(person.phone); //calling person's property i.e:phone
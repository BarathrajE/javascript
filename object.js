  //**************OBJECT***********//

        //****object literal*****//

        const obj={
            name:"barath",
            age:23,
            city:"tvm",
            "$ like a movie":true
        }

        delete obj.city;// I was delete in city value
        console.log(obj.name)
        console.log(obj.age)
        console.log(obj["$ like a movie"])
        console.log(obj.city) // in present undefined


        //************Property existence test, “in” operator******//
        // object property there or not check use this//

        let user={name:"barath",age:23};
        console.log("name" in user);
        console.log("something" in user);
        

      //**********"for.in"********//

      let user1={
        name:"barath",
        age:20,
        statue:false
      }

      for(let code in user1){
        console.log(code);
        
      }





         //****object constructor*****//

        //  const newobj =new object()
//Why Is Array/Object Destructuring So Useful And How To Use It
import React from 'react';
import TodoList from './TodoList';





function App() {  
  const alphabet = ['A','B','C','D','E','F']
  const numbers = ['1','2','3','4','5','6'] 
  function sumAndMultiply(a, b){ 
      return [a+b, a*b, a/b]
  } 
  const [sum, multiply, division = "no division"] = sumAndMultiply(2, 3); 
  console.log(sum + ' ' + multiply + ' ' + division)   
    const personTwo = { 
        name: 'Michael Andrew',
        age: 19,
        address: {
          brgy: 'Buru-un',
          city: 'Iligan City' 
        } 
    }  
    const {name:firstName, age, favoriteFood='Rice' } = personTwo 
    console.log(firstName)
    console.log(age)
    console.log(favoriteFood)  
    const personOne = { 
      name: 'Lovely Joy',
      age: 22,
      favoriteFood: 'egg',
      address: {
        brgy: 'Tubod',
        city: 'Iligan City' 
      } 
    } 
    function printUser({name, age, favoriteFood = 'Watermelon'}){  
     console.log('My name is ' + name + '. My age is ' + age +' and my favorite food is ' + favoriteFood );
       // console.log('My name is:' + {name} + '. Age is' + {age} + '. Favorite food is ' + {favoriteFood}) 
    } 
    printUser(personOne) 
  return <TodoList />;
}

export default App;

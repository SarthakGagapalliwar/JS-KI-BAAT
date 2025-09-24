// let number =(1,2,3,4,5);
// console.log(number); // this will print 5 in (,) with circle bracket it will take the last right side value;

// let numer=[1,2,3,4,5] // in [] simple array will print
// console.log(numer);


console.log([1,2]-[3,4]); //it will NaN
console.log([1,2]+[3,4]); //it will print 1, 23 ,4 .. js will conver this into string

console.log(0.1+0.2==0.3); //0.30000000000000004 // by 
// ✅ Answer:
// The result is false because of floating-point precision limits in IEEE-754 representation.


let obj={a:1}
let copy=obj;
copy.a=5;
console.log(obj.a);  //Non-primitive = reference copy (shared).



let arr = [1, 2, 3, 2, 4, 1, 5];
let unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4, 5]

let arr1 = [1, 2, 3, 2, 4, 1, 5];
let unique1 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(unique1); // [1, 2, 3, 4, 5]


//react
// Summary:

// Class Component = older, uses this, lifecycle methods, setState.
// Function Component = newer, simpler, uses Hooks, easier to read & maintain.

// | Feature               | Class Component                                                               | Function Component                                    |
// | --------------------- | ----------------------------------------------------------------------------- | ----------------------------------------------------- |
// | **Syntax**            | `class MyComp extends React.Component { render() { return <div>...</div> } }` | `function MyComp() { return <div>...</div> }`         |
// | **State**             | `this.state` (object), updated with `this.setState()`                         | `useState` Hook, returns value and setter function    |
// | **Lifecycle Methods** | `componentDidMount`, `componentDidUpdate`, `componentWillUnmount`, etc.       | `useEffect` Hook handles mounting, updating, cleanup  |
// | **`this` Keyword**    | Required to access props/state (`this.props`, `this.state`)                   | Not needed; props passed as function arguments        |
// | **Hooks Support**     | No (cannot use `useState`, `useEffect`, etc.)                                 | Yes (useState, useEffect, useRef, custom hooks, etc.) |
// | **Performance**       | Slightly heavier, creates class instances                                     | Lightweight, optimized by React                       |
// | **Readability**       | More verbose                                                                  | Simpler, concise, easier to read and maintain         |
// | **Modern Usage**      | Less recommended for new projects                                             | Preferred approach in modern React                    |




/*

| Feature              | Controlled                              | Uncontrolled                         |
| -------------------- | --------------------------------------- | ------------------------------------ |
| **State management** | React state                             | DOM handles input                    |
| **Value binding**    | `value={state}`                         | `defaultValue` or none               |
| **Updates**          | On every `onChange`                     | Only on form submission / ref access |
| **Form validation**  | Easier in React                         | Harder, need manual access           |
| **Complexity**       | Slightly more code                      | Less code initially                  |
| **Use case**         | Preferred for dynamic forms, validation | Simple forms, quick prototypes       |


Controlled = React fully controls the input (best for dynamic forms).

Uncontrolled = Input manages itself, React reads value via refs (simpler, less controlled).

*/





/*
1. React Class Component Lifecycle
React lifecycle is divided into three main phases:
Mounting – when component is created and inserted into the DOM.
Updating – when component is re-rendered due to state or prop changes.
Unmounting – when component is removed from the DOM.


🔹 How it maps to Function Components

Mounting → useEffect(() => { ... }, [])
Updating → useEffect(() => { ... }, [dependencies])
Unmounting → useEffect(() => { return () => { ... } }, []) ==that’s one of the main reasons we use the cleanup function in useEffect!


  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    // Cleanup on unmount
    return () => {
      clearInterval(interval); // prevent memory leak
      console.log("Component unmounted, timer cleared");
    };
  }, []);

  return <h1>Count: {count}</h1>;
}


🔹 Summary
Unmounting cleanup in useEffect is essential for memory management and avoiding errors.
Always clean up timers, listeners, subscriptions, and async callbacks in the return function.

*/



/*


optimizing React performance — perfect, this is super important for large apps.


| Technique         | Purpose                                            |
| ----------------- | -------------------------------------------------- |
| Lazy Loading      | Load components only when needed                   |
| React.memo        | Prevent unnecessary re-renders of child components |
| useMemo           | Memoize expensive calculations                     |
| useCallback       | Memoize functions to avoid re-creation             |
| Virtualization    | Efficiently render long lists                      |
| Code Splitting    | Reduce initial bundle size                         |
| Avoid extra state | Don’t store derived data in state                  |



               ┌───────────────────────────────┐
               │   React Performance Boosters   │
               └───────────────────────────────┘
                            │
  ┌─────────────────────────┼─────────────────────────┐
  │                         │                         │
  ▼                         ▼                         ▼
Lazy Loading          Memoization              Virtualization
(Load only when       (Avoid re-renders)       (Efficient lists)
needed)                      │                         │
   │                         │                         │
React.lazy + Suspense   ┌───────────────┐        react-window /
Code Splitting          │ React.memo    │        react-virtualized
Dynamic Imports         │ useMemo       │
                        │ useCallback   │
                        └───────────────┘

          ┌─────────────────────────────┐
          │   Other Best Practices       │
          └─────────────────────────────┘
          │ - Avoid unnecessary state
          │ - Avoid anonymous functions in JSX
          │ - Split bundles (webpack / vite)
          │ - Use Profiler to find bottlenecks
          │ - Debounce/throttle expensive events



useMemo
What it does: Memoizes a value (result of a calculation).
When to use: When you have an expensive calculation you don’t want to re-run on every render.

useCallback
What it does: Memoizes a function (its reference).
When to use: When passing functions to memoized child components to prevent unnecessary re-renders.

*/
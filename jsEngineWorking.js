// javScripts Runtime Emviornments (Browser have and Node.js have it)
// it has Js engin, API, callback quque, event loop, memeory que

//JsEngin;
/* 
    Code
    |
    Parsing
    |
    Complation(like Interpretter or Compiler)
    |
    Execution
*/


//code is taken convert into syntax parsing 
//syntax parsing is taken convert into Ast(Abstrach Syntax Tree )\
//then itt goes to JIT Compilation ->interprter+compiler
//js works on both Interpretter and Compiler
//its total demoent on js engine

//Now AST will goes inetprter convert to bit code then it moves to exeution stapes(with help to callStack, Memory Heap) and this compiler is also working to optimzed the code not in one pahsees dose in muttiple pahses


//Interpretter laug -> in this the code runs line by line  and dont know what will happen next
//It execute fast no need to optimiezed the code



//Compiler lung ->int this the orginal code is modofide the optimal code then execute it very fast and has performans improvement 
//in this we have more efficency
// they can optimedby like inline, copy elison, inline caching


//leran Mark and sweep algo for garbaje Collector
/*The Mark and Sweep algorithm is a classic garbage collection technique used in programming languages like JavaScript (V8 engine), Java, etc.

🔍 What is it?
It automatically reclaims memory that is no longer used by a program.

✅ Mark:
Traverse the object graph starting from root objects and mark all reachable objects as “in use”.

🧹 Sweep:
Go through the entire heap and free all unmarked (unreachable) objects.

 When is Mark & Sweep useful?
Helps avoid memory leaks.

Automatically frees unused memory.

Common in languages with automatic memory management (JS, Java, Python, etc.).


*/



//we can do both funtion level prgraming and oop progaminig

/*

When to Use What?
Use FP when:

You want predictable, testable code

You're doing lots of data transformation

Immutability is important (React, Redux)

Use OOP when:

You're modeling real-world entities (e.g. users, orders)

You need inheritance, encapsulation

Building large, maintainable systems
*/
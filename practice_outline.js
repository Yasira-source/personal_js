/*   ----- 02/10/2023
COURSE OUTLINE --- YUSUF
1. Variables
2. Data Types
3. Functions
4. Objects
5. Classes
6. APIs 
7. Promises, Async, await
8. Data Structures & Algorithms in JS 
9. Real-Life Projects
*/

/* 
COURSE OUTLINE --- KALIM
1. Data Structures & Algorithms
2. Arrays
3. Objects
4. Classes
5. APIs 
6. Deployment
*/

/* 
COURSE OUTLINE --- YASIRA
<!-- https://javascript.info/ -->
PHASE I:  - 2 Weeks

1. Variables & Data Types
2. Arrays
3. Object Literals
4. Methods for Strings, arrays, objects, stc
5. Loops - for, while, for...of, forEach, map
6. Conditionals (If, ternary & Switch)
7. Functions (normal & arrow)
8. OOP (Prototypes & Classes)
9. DOM Selection & Manipulation
10. Events
11. Validations --- Forms , etc 
12. Async, promises, callback
13. BOM
14. Web APIs
*** GIT ---- LEARN ABOUT GIT

//  Practice projects --- 3


15. AJAX
16. JSON
17. JQuery
18. JS Graphics
19. Error handling
20. Generator, advanced iterations
21. Modules
22. Code Quality 

//  Advanced Practice Project --- 3


PHASE II:  - 4 weeks
1. JS Front -End Frameworks
//  Practice Projects --- 2

2. JS Backend Frameworks

// Practice Projects --- 2

PHASE III: - 1 week

1. APIS -- GraphQL & RESTFUL
//  practice projects --- 2

2. Deployment - CI/CD 
//  deploy the projects above

PHASE IV: - 1 Week
1. Advanced Rehearsal of Data Structures & Algorithms 

//  take a couple coding challenge questions

PHASE V:
1. Behavioural Interview Questions


//  TOTAL TIME REQUIRED ---- 8 WEEKS (56 Days)
------ END ------

*/


/*
Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.

The result of the function should be the truncated (if needed) string.

For instance:
truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te…"

truncate("Hi everyone!", 20) = "Hi everyone!"

SOLUTION:

function truncate(str, maxlength){
  alert( str.length > maxlength ? str.slice(0,maxlength-1) + '...' : str)
}

truncate("What I'd like to tell on this topic is:",20);



Given a string S , return the "reversed"  string where all characters that are not a letter stay in the same place , and all letters reverse their positions

Example 1:
input : ab-cd
output: dc-ba

input: a-bC-dEf=ghIj!!
output: j-Ih-gfE=dCba!! 


 


*/
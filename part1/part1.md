1. Line 11 would output 3, assuming the use the values given to us in Question 4. This output would be possible because the valiable i is defined as var as therefore can be used globally (outside the loop).
2. Line 12 would output 150, assuming the use the values given to us in Question 4. This output would be possible because the valiable discountedPrice is defined as var as therefore can be used globally (outside the loop).
3. Line 12 would output 150, assuming the use the values given to us in Question 4. This output would be possible because the valiable finalPrice is defined as var as therefore can be used globally (outside the loop).
4. The function would output an array with values of [50, 100, 150]. The reason for the output being successful as there are no errors, all of the variables are global. And finally, the dicsount applied is 50% (accoridng to 0.5 being input) and the function outputs discounted prices.
5. An error would happen in line 11. The reason for that is because i is defined as variable using let, and that means that it could only be used in that loop. 
6. An error would happen in line 12. The reason for that is because dicountedPrice is defined as variable using let, and that means that it could only be used in that loop. 
7. Line 13 would output 150, assuming the use the values given to us in Question 8. This would be possible because finalValue is defined outside the loop, even though it is defined with let, it could be used thoughout the whole function.
8. The function would output the error, because for the use of the function we need i, and since it is defined with let, it would not exist outside the loop and it would be impossible to use it.
9. An error would happen in line 11. The reason for that is because i is defined as variable using let, and that means that it could only be used in that loop. Just as it was in Question 5. 
10. An error would happen in line 12. The reason for that is because dicountedPrice is defined as a constant variable, and that means that it could only be used in that loop and it would not exist outside of that loop. 
11. Line 13 would output 0. The reason is because finalPrice is defined as constant variable (const) and assigned to 0 initally, sicne that happened during the declaration, its value cannot be changed.
12. The function would output an error. The reason for that error would be similar to the answer to Question 8, in addition with the fact that the function would be attempting to change the value of finalPrice but it is impossible, since it is a constant and is initially set as 0 and cannot be changed.
13. 
A. `student.name;`

B. `student['Grad Year'];`

C. `student.greeting();`

D. `student['Favorite Teacher'].name;`

E. `student.courseLoad[0];`

14. 
A. `‘3’ + 2` The output would be 32, since 3 is a string and 2 would be transformed into a string and attached.

B. `‘3’ - 2` The output would be 1, since 2 is an int and 3 would be transformed into an int and then they would be subtracted. "-" cannot be used for strings so it would not work like part A.

C. `3 + null` The output would be 3 as null would be treated as 0 as it would be transformed into the type of 3, which is an integer. 

D. `‘3’ + null` The output would be 3null, as this is the same case as part A, and now null is transformed into a string and attached to 3.

E. `true + 3` The output would be 4, as in this case true is seen as 1 to be the same type as 3, which is an integer.

F. `false + null` The output would be 0, as here we are doing an operation of addition, and since both are not integers, we just treat them as they are integers, in which case false is 0 and null is 0, therefore their addition would result is a 0.

G. `“3” + undefined` The output be 3undefined, as 3 is a string, and just like in part A, we now have to match undefined to be string as well and attach them since it is addition.

H. `“3” - undefined` The output would be NaN, as this is something that is not allowed, since you cannot subtract to a strong and the other variable is undefined.

15.
A. `‘2’ > 1` The output would be true, as we are transforming both of the values into numbers/integers as needed for comarison.

B. `‘2’ < ‘12’` The output would be false, as we are comparing only the first of the characters, and 2 is larger than 1.

C. `2 == ‘2’` The output would be true, as we are now transforming the 2 into an integers, and 2 is equal to 2. 

D. `2 === ‘2’` The output would be false, because === (three equal) means strict equality, meaning that even the types have to be the same, which is not the case here.

E. `true == 2` The output would be false, since just like in previous questions, we now transfer true into a number/integer, which is 1, and 1 is not equal to 2.

F. `true === Boolean(2)` The output would be true, as Bookean would return true for all values except for a -0, empty string, undefined, false, NaN and null, the rest would always result in true. 

16. The difference between == equal and === strong equal is that in the == case, only the value has to be equal and the comparision would return true. However, in the case of ===, both the value and the type have to be equal in order to return true, otherwise, in case if either of those does not align, it would return false.
17. The code snippet would print out 'How are you?'. The first statement, 2 == true is not correct, therefore, we would have to move onto the next statement, which is else if (2), which means it is Boolean(2) and it would be converted to true, as that is a case when boolean is true, and therefore, the statement from else if would be printed, which is 'How are you?'.
18. The answer is in part1-question18.js
19. 
20. The answer is in part1-question20.js
21. The output would be:
1

4

3

2

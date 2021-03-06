---
layout: default
title: Lab Check-Off Questions
permalink: labquestions/index.html
---

{% include nav.html %}

{% include quicklinks.html %}

<script>
    {% include_relative assets/cs10.js %}
</script>

# Lab Check-Off Questions

<div class="page-section" markdown="1">
<br>

## Background

**All lab check-off deadlines are at 11:59PM.**
(However, you need to get checked off by a TA or lab assistant, so you last chance to get checked off is during lab or office hours.)

To get checked off, you should prepare answers to **all** of these questions for each lab, though you will only be quizzed on a subset of the questions.

---

## Lab 1: Welcome to <span class="snap">snap</span>   {#lab1}
No questions for this lab!

---

## Lab 2: Build Your Own Blocks {#lab2}

## Due: 02/04/15

* Why should we make our own blocks?
* How do you make a block?
* How many different types of blocks are in <span class="snap">snap</span>? What do they do?
* Show us the <code>Draw a Star</code> exercise.
* Show us the <code>Draw Polygon</code> block.
* Show us the <code>Draw Flower</code> block.
* Make the bug dance!
* Name 3 different ways you can make a block repeat.
* What does the pick random block do? Give a scenario where this functionality could be useful.

---

## Lab 3: Conditionals  {#lab3}

## Due: 02/06/15

* Why are booleans important?
    * What are some of the booleans we have access to in <span class="snap">snap</span> and what do they do?
* What is the difference between <code>if</code> and <code>if-else</code>  blocks?
* What is the difference between reporter and predicate blocks?
* What is a script variable useful for? How do we initiate a script variable?
* Show us the code for the <code>letter grade _</code> block.
* Correctly answer the questions on the  “Self-test: Complex Booleans” page and show us.
* Show us the code for the <code> is _ between _ and _ ?</code> block.
* For the Leap Year example, explain which code was easiest to read and which code was easiest to debug.

---

## Lab 4: Functions  {#lab4}

## Due: 02/11/15

* What was Mark’s problem with his <code> max </code> block?
* Name a few of the input types. Why is it important that we specify input types?
* Please show me your “sum of 2 smallest numbers” block or the “are any equal” block, and explain how you composed functions to write these blocks.
* What is a script variable useful for? How do we initiate a script variable?
* Please show some of your solutions to the buggy “sum the numbers between block.” Do they work now? What did you change?
* Please show your simplified tic-tac-toe board. Why did you organize it the way you did?
* Can i see your <code> valid-Date </code> block? How is what you did here similar to simplifying the tic-tac-toe board?
* Why is the check block useful? And how does it work? Demonstrate please.
* How are global variables different from script variables?

---

## Lab 5: Lists  {#lab5}

## Due: 02/13/15

* What are lists? How are they represented in Snap? What are some operations you can perform on lists?
* How are lists different from variables? How are they similar? How do you create a temporary list for use in a block definition?
* Which blocks allow you to use a function on an entire list “all at once”? What are the different effects that they have? What are their domains and ranges?
* Demonstrate your <code>Acronym</code> (Initialism) block.
* Demonstrate your <code>Exaggerate</code> block.
* What is the difference between the <code>for</code> and <code>for each</code> blocks?
* Lets look at <code>swap</code>. Why do we need a temp variable?
* Why might global variable manipulation be useful in some situations? what drawbacks are there?

---

## Lab 6: Algorithms  {#lab6}

## Due: 02/18/15

* What is an algorithm? Can you give an example of an algorithm that you use in your daily life? What about from an earlier lab?
* Show me your <code>find number in an unsorted list</code> block. Describe the algorithm that you used to solve this problem.
* Show me your <code>find number in a sorted list</code> block. What algorithm are you using in this block and how does it work?
* Why was the binary search technique so much faster than trying to find a number in an unsorted list? Is it actually faster when considering the time needed to sort the list initially?
* If the number of inputs, N, doubles, how would that change the Worst Case Running Time for <code>find number in unsorted list</code>?
* If the number of inputs, N, doubles, how would that change the Worst Case for <code>find number in sorted list</code>?
* How can we objectively measure which algorithm, sorted or unsorted, is faster. What kind of extra work is required for the sorted algorithm? Are there cases where unsorted might be faster?
* What is memoization? If you were able to implement it in the <code>find number in sorted list (memoized)</code> block, what makes memoization faster?

---

## Lab 7: Algorithmic Complexity  {#lab7}

## Due: 02/20/15

* In your experimental <code>Number-guessing</code> game, which algorithm did you find to be faster? Why? What type of search is <code>Higher/Lower</code> representing?
* What happened with the time it took for your computer to counter up the numbers between 1 and x when you started doubling the numbers? Tripling the numbers? What do you think would happen with the time I multiplied your top number by 8?
* Please show me your Non-Gauss and Gauss <code>Add all numbers in</code>.  Which was faster? Why?
* Please show me your <code>Are the numbers of (LIST) distinct?</code> block. What is the difference between "Worst-Case" and "Best Case" in terms of Runtime?
* Of all the runtimes you have discovered thus far, can you rank them from “fastest” to “slowest”? Why is runtime important for the programs that we create?`

---

## Lab 8: Finch Robots  {#lab8}

## Due: **02/20/15** (not the usual one-week delay)

* Due to the hardware requirements of this lab, it will be worth extra credit and can only be completed during a lab section between 02/18 and 02/20. Make sure to attend one of those labs and take part in the section competition in order to receive extra credit.

---

## Lab 9: Concurrency  {#lab9}

## Due: 03/04/15

* How can you make parallel programs in <span class="snap">snap</span>?
* Why does adding more people in the card sorting example or more threads in a program sometimes slow the process down?
* When you run parallel code, are the chunks of code really executing at the exact same time?
* What are some issues that can occur in parallel programming?
* What is the difference between determinism and nondeterminism?
* In the <code>What are the possible values?</code> exercise, what were the possibles values of <code>finish</code> when you run the code nondeterministically? 

---

## Lab 10: Recursion With Trees and Fractals  {#lab10}

## Due: 03/06/15

* What is recursion? Why is it so powerful?
* What do you think infinite recursion is? How do you prevent infinite recursion from happening?
* What are some real-life examples of recursion?
* What is the difference between the base case and the recursive case?
* Please show me your <code>crazy-tree</code> block.
* Please show me your <code>snowflake</code> or <code>c-curve</code> block.

---

## Lab 11: Recursive Reporters  {#lab11}

## Due: 03/11/15

* Explain how the <code>plurals(words)</code> block works.
* Show me your recursive <code>exaggerate</code> block. Do you like the iterative or recursive version better? (1 pt. for correct opinion)
* Convince me that the recursive <code>pascal(row, column)</code> works (defend the base and recursive cases).
* Why does <code>odd numbered items</code> need two base cases?
* Show me your finished <code>merge</code> block.
* Explain how the <code>subsets</code> block works.

</div>



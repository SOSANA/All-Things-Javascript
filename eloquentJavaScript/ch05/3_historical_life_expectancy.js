/**
 * Historical life expectancy:
 *  - When we looked up all the people in our data set that lived more than 90 years, only
 *  	the latest generation in the data came out. Let’s take a closer look at that phenomenon
 *  -	Compute and output the average age of the people in the ancestry data set per century.
 *  	A person is assigned to a century by taking their year of death, dividing it by 100, and
 *  	rounding it up, as in Math.ceil(person.died / 100)
 *  -	For bonus points, write a function groupBy that abstracts the grouping operation. It
 *  	should accept as arguments an array and a function that computes the group for an element
 *  	in the array and returns an object that maps group names to arrays of group members.
 */

/* eslint-disable */
'use strict';

Consider this code:

> let x = "5"
> x = x + 1
= "51"
Now, consider this code:

> let y = "5"
> y++
What gets returned by y++ in the second snippet, and why?

//  It returns the number 5 because y++ coerces string to a number. The return value is 5 because the post-increment (y++) operator returns the original value before incrementing, making it different than  y = y + 1 or y += 1. I think also ++y.
Debugging
1. The bug as seen on the screenshot 2 is the fact that the num1 and num2 would result in a result type of string, meaning that the operation would be 1+4 but they would just result in 14 since it is string and they just attach to each other and not actually add. However, we need them to be actual integers.
2. Therefore, my solution as seen in screenshot 3 is to use parseInt() to convert num1 and num2, so I did parseInt(num1) and the same for parseInt(num2), which resulted in result being type "number", and that gave correct result of addition, 1+4=5.

Networking
1. citylots.json
2. Initiator: part2.js: 2 (second line of part2.js file)
3. 200 OK (from disk cache)
4. 90.08 ms of content download and 2.75 ms of waiting(TTFB)
5. Mozilla/5.0 (Macintosh; Intel Mac OS X 11_0_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.96 Safari/537.36
6. Apache
7. Tue, 26 Jan 2021 22:14:13 GMT
8. application/json
9. fetchData @ part2.js:2


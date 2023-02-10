## Question ->

**1- Write a JavaScript function that reverse a number. Sample Data and output: Example x = 32243; Expected Output : 34223**

```HTML
 <body onload="reverse()"">
    <script>
      function reverse() {
        var r = prompt("enter the number");
        var t = r.split("").reverse().join("");
        document.write(t);
      }
    </script>
  </body>
```

---

## JavaScript String split()

[Split()](https://www.w3schools.com/jsref/jsref_split.asp)

## JavaScript Array reverse()

---

[reverse()](https://www.w3schools.com/jsref/jsref_reverse.asp)/ [Array.prototype.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

## JavaScript Array join()

[join()](https://www.w3schools.com/jsref/jsref_join.asp)

---

## HTML DOM Document write()

[write() ](https://www.w3schools.com/jsref/met_doc_write.asp)
[document.write()](https://developer.mozilla.org/en-US/docs/Web/API/Document/write)

## **Must reading this** Overview of the parsing model

## ![parsing model ](https://html.spec.whatwg.org/images/parsing-model-overview.svg)

---

[Overview of the parsing model](https://html.spec.whatwg.org/multipage/parsing.html#overview-of-the-parsing-model)

**2- Write a JavaScript function that returns a passed string with letters in alphabetical order.**

```HTML
<body onload="alphabet_order()">
    <script>
      function alphabet_order() {
        var str = prompt("enter any alphabetic ");
        var t = str.split("").sort().join("");
        document.write(t);
      }
      <!-- document.write(alphabet_order("webmaster")); -->
    </script>
  </body>
```

**3- Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.**

```js
function vowel_count(str1) {
  var vowel_list = "aeiouAEIOU";
  var vcount = 0;
  for (var x = 0; x < str1.length; x++) {
    if (vowel_list.indexOf(str1[x]) !== -1) {
      vcount += 1;
    }
  }
  return vcount;
}
Document.write(vowel_count("The quick brown fox"));
```

- The indexOf() method returns the position of the first occurrence of a value in a string.

- The indexOf() method returns -1 if the value is not found.

- The indexOf() method is case sensitive.
  [indexOf()](https://www.w3schools.com/jsref/jsref_indexof.asp)

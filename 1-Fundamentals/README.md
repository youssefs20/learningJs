# 📚 JavaScript Fundamentals

This folder contains my learning notes while studying the fundamentals of JavaScript.  
I summarize concepts in a simple way with explanations and small examples.

---

## ✅ What is JavaScript?

JavaScript is a **high-level**, **object-oriented**, **multi-paradigm** programming language.

| Term                | Meaning                                                                           |
| ------------------- | --------------------------------------------------------------------------------- |
| **High-Level**      | We don’t manage low-level details like memory management.                         |
| **Object-Oriented** | Uses objects to store and structure data.                                         |
| **Multi-Paradigm**  | Supports different programming styles (Imperative, Declarative, OOP, Functional). |

---

## 🧠 JavaScript + HTML + CSS

| Language       | Role                                    |
| -------------- | --------------------------------------- |
| **HTML**       | Structure / Content of the webpage      |
| **CSS**        | Styling (colors, layout, appearance)    |
| **JavaScript** | Adds dynamic behavior and interactivity |

---

## 🖥️ Console vs Code Execution

```js
40 + 8 + 23 - 10;
```

Writing code alone doesn’t print output anywhere.

✅ To show the result, we use:

```js
console.log(40 + 8 + 23 - 10);
```

---

## 🟢 Values & Variables

-   **Value**: The smallest piece of data.
-   **Variable**: A box used to store values.

```js
let firstName = "youssef";
console.log(firstName);
```

### Naming Rules ✔

-   Use `camelCase` → `myFirstJob`
-   Don’t start with a number
-   Don’t use JavaScript reserved keywords
-   ALL CAPS variables → constants (`PI`, `API_KEY`)

---

## 🧩 Data Types

Every value in JavaScript is either:

➡ **Primitive**  
➡ **Object**

### Primitive Types (7 types)

| Type      | Example                  | Description                        |
| --------- | ------------------------ | ---------------------------------- |
| Number    | `let age = 23`           | integers and decimals (same type)  |
| String    | `"youssef"`              | text                               |
| Boolean   | `true / false`           | decision making                    |
| Undefined | `let x;`                 | variable declared but not assigned |
| Null      | intentional empty value  |
| Symbol    | Unique identifiers (ES6) |
| BigInt    | Larger integers          |

> ✅ JavaScript uses **Dynamic Typing** → type is tied to the value, not the variable.

---

## 🔍 `typeof` Operator

```js
console.log(typeof true);
console.log(typeof 23);
console.log(typeof "amazing");
console.log(typeof false);
```

---

## 🪄 Dynamic Typing

```js
let language = "JavaScript";
language = 23; // Valid: type changed dynamically
```

---

## 🔑 Variable Declarations (`let`, `const`, `var`)

| Keyword | Can be modified? | Can be declared empty? | Scope                 |
| ------- | ---------------- | ---------------------- | --------------------- |
| `let`   | ✅ yes           | ✅ yes                 | Block Scoped          |
| `const` | ❌ no            | ❌ no                  | Block Scoped          |
| `var`   | ✅ yes (avoid)   | ✅ yes                 | Function Scoped (old) |

✅ Best practice:

> Use `const` by default, use `let` only when the value needs to change.

⚠ Bad practice:

```js
lastName = "sameh"; // creates global variable implicitly (avoid!)
```

---

## ➕ Operators

### Arithmetic

```js
const ageJoe = 2025 - 2002;
console.log(ageJoe);
```

String concatenation:

```js
const firstName = "youssef";
const lastName = "sameh";
console.log(firstName + " " + lastName);
```

### Assignment

```js
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
```

### Comparison

```js
console.log(ageJoe > ageAml);
```

Operator precedence documentation:  
🔗 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

---

## 🔤 Template Literals (ES6)

Use backticks `` ` `` to insert variables into strings.

```js
const joe = `I'm ${firstName}, I'm a ${job}, and I'm born in ${birthYear}`;
console.log(joe);
```

---

## 🔁 Type Conversion vs Type Coercion

| Term                | Meaning                   |
| ------------------- | ------------------------- |
| **Type Conversion** | Manual conversion         |
| **Type Coercion**   | JS converts automatically |

### Type Conversion

```js
const inputYear = "1991";
console.log(Number(inputYear));
console.log(String(23));
```

Impossible conversion:

```js
console.log(Number("Joe"));
// → NaN (Not a Number)
```

### Type Coercion

```js
console.log("I'm " + 23 + " years old");
console.log("23" - "10" - 3); // → 10
```

> `+` converts to string  
> `- * /` convert to number

---

## ⚠ Truthy & Falsy Values

Falsy values in JavaScript:

1. `0`
2. `""`
3. `undefined`
4. `null`
5. `NaN`

Example:

```js
let money = 0;
if (money) console.log("Don't spend it all!");
else console.log("You should get a job");
```

---

## ✅ Strict Equality vs Loose Equality

| Operator | Does Type Coercion? | Example                |
| -------- | ------------------- | ---------------------- |
| `===`    | ❌ No               | `"18" === 18  → false` |
| `==`     | ✅ Yes              | `"18" == 18   → true`  |

---

## 🌐 Getting User Input from Webpage

```js
const name = prompt("what's your name");
console.log(`hello ${name}`);
console.log(typeof name); // always string
```

---

✍ **End of Notes for Fundamentals**

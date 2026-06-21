# 1. Function Advanced

## a. Function Expression

Định nghĩa hàm bằng cách gán hàm cho một biến.

```javascript
const add = function(a, b) {
    return a + b;
};
```

---

## b. Lambda Function (Arrow Function)

Cách viết ngắn gọn hơn của function, sử dụng dấu `=>`.

> Khuyến khích sử dụng trong JavaScript hiện đại.

### i. Chỉ có 1 dòng code

```javascript
const add = (a, b) => a + b;
```

### ii. Không có tham số

```javascript
const greet = () => {
    console.log("Hello");
};
```

### iii. Chỉ có 1 tham số

Có thể bỏ dấu ngoặc tròn.

```javascript
const double = x => x * 2;
```

---

## c. Anonymous Function

Hàm ẩn danh (không có tên), thường được sử dụng một lần hoặc làm callback.

```javascript
setTimeout(function() {
    console.log("Hello");
}, 1000);
```

Hoặc:

```javascript
setTimeout(() => {
    console.log("Hello");
}, 1000);
```

---

# 2. DOM (Document Object Model)

## 2.1. DOM là gì?

DOM (Document Object Model) là mô hình biểu diễn trang web dưới dạng cây (Tree Structure), cho phép JavaScript truy cập và thao tác với các phần tử HTML.

Ví dụ:

```html
<body>
    <h1>Hello DOM</h1>
    <button>Click me</button>
</body>
```

Cấu trúc DOM:

```text
Document
└── body
    ├── h1
    └── button
```

---

## 2.2. Các thành phần của DOM

### a. Element

Là các thẻ HTML.

```html
<input>
<button>Save</button>
<div></div>
```

### b. Attribute

Là các thuộc tính của thẻ HTML.

```html
<input id="username" type="text">
```

Thuộc tính:

* id
* type

### c. Text

Là nội dung hiển thị bên trong thẻ HTML.

```html
<button>Delete</button>
```

Text:

```text
Delete
```

---

## 2.3. Các cách tìm phần tử trong DOM (Playwright)

### a. Theo ID

HTML:

```html
<input id="username">
```

Playwright:

```javascript
await page.locator("#username").fill("admin");
```

---

### b. Theo Class

HTML:

```html
<button class="btn-save">Save</button>
```

Playwright:

```javascript
await page.locator(".btn-save").click();
```

---

### c. Theo Tag

HTML:

```html
<button>Save</button>
```

Playwright:

```javascript
await page.locator("button").click();
```

---

### d. Theo Text

HTML:

```html
<button>Delete</button>
```

Playwright:

```javascript
await page.getByText("Delete").click();
```

---

# 3. Selector

## 3.1. Selector là gì?

Selector là cách xác định và tìm kiếm phần tử trong DOM để Playwright có thể tương tác với chúng.

Ví dụ:

```javascript
await page.locator("#username").fill("admin");
await page.getByText("Login").click();
```

---

## 3.2. Thứ tự ưu tiên sử dụng Selector

Thông thường nên ưu tiên:

```text
Playwright Selector
    ↓
CSS Selector
    ↓
XPath Selector
```

Tuy nhiên cần tuân thủ convention của dự án đang tham gia.

---

## 3.3. Các loại Selector

### a. XPath Selector

#### Có 2 loại

##### XPath tuyệt đối

```xpath
/html/body/div/input
```

Nhược điểm:

* Dễ bị thay đổi khi DOM thay đổi.
* Khó bảo trì.

##### XPath tương đối

```xpath
//input[@id='username']
```

Ưu điểm:

* Ngắn gọn.
* Dễ đọc.
* Dễ bảo trì.

> Khuyến nghị sử dụng XPath tương đối.

---

#### Một số XPath phổ biến

Theo thuộc tính:

```xpath
//input[@id='username']
```

Theo text:

```xpath
//button[text()='Delete']
```

Chứa text:

```xpath
//button[contains(text(),'Delete')]
```

Chứa thuộc tính:

```xpath
//input[contains(@id,'user')]
```

---

### b. CSS Selector
### c. Playwright Selector

# 4. Các thao tác cơ bản với phần tử trong Playwright

## Navigation

```javascript
await page.goto("https://example.com");
```
## Hover
await page.locator("<xpath here>").hover();
## contains()
contains(<gía trị>,<giá trị contains>)
Ví dụ: //div[contains(text(), 'Hien')]

## Click

```javascript
await page.locator("button").click();
```

## Fill

```javascript
await page.locator("#username").fill("admin");
```

## Input Value

```javascript
const value = await page.locator("#username").inputValue();
```

## Radio / Checkbox

```javascript
await page.locator("#male").check();
await page.locator("#agree").check();
```

## Select Dropdown

```javascript
await page.locator("#country").selectOption("VN");
```

## Upload File

```javascript
await page.locator("input[type='file']")
    .setInputFiles("data-test/test.txt");
```

## Verify Element

```javascript
await expect(page.locator("#username"))
    .toBeVisible();
```

## Count Elements

```javascript
const count = await page.locator("li").count();
```

## Get Text

```javascript
const text = await page.locator("h1").textContent();
```

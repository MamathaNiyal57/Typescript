var ShoppingList = /** @class */ (function () {
    function ShoppingList(itemName, isMarked, isDeleted) {
        if (isMarked === void 0) { isMarked = false; }
        if (isDeleted === void 0) { isDeleted = false; }
        this.itemName = itemName;
        this.isMarked = isMarked;
        this.isDeleted = isDeleted;
    }
    Object.defineProperty(ShoppingList.prototype, "deleteStatus", {
        get: function () {
            return this.isDeleted;
        },
        set: function (value) {
            this.isDeleted = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShoppingList.prototype, "markedStatus", {
        get: function () {
            return this.isMarked;
        },
        set: function (value) {
            this.isMarked = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ShoppingList.prototype, "item", {
        get: function () {
            return this.itemName;
        },
        enumerable: false,
        configurable: true
    });
    return ShoppingList;
}());
var ShoppingApp = /** @class */ (function () {
    function ShoppingApp(items, placeholder, ul, markedCountElement, unmarkedCountElement) {
        if (placeholder === void 0) { placeholder = ''; }
        if (ul === void 0) { ul = ''; }
        if (markedCountElement === void 0) { markedCountElement = 0; }
        if (unmarkedCountElement === void 0) { unmarkedCountElement = 0; }
        var _this = this;
        this.items = items;
        this.placeholder = document.getElementById("textAdd");
        this.ul = document.getElementById("shop-items");
        this.markedCountElement = document.getElementById("marked-items");
        this.unmarkedCountElement = document.getElementById("unmarked-items");
        this.placeholder.addEventListener('keydown', function (e) {
            if (e.key === 'Enter') {
                _this.addItem();
            }
        });
    }
    ShoppingApp.prototype.addItem = function () {
        var input = this.placeholder.value.trim();
        if (input.length === 0) {
            alert("Enter a valid item");
            return;
        }
        var inputLower = input.toLowerCase();
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.itemName.toLowerCase() === inputLower && !item.isDeleted) {
                alert("Item already exists");
                return;
            }
        }
        var shoppingItem = new ShoppingList(input);
        this.items.push(shoppingItem);
        this.renderItem(shoppingItem);
        this.placeholder.value = "";
        this.placeholder.placeholder = "New item..";
    };
    ShoppingApp.prototype.renderItem = function (shoppingItem) {
        var _this = this;
        var listItem = document.createElement("li");
        listItem.textContent = shoppingItem.item;
        var deleteBtn = document.createElement("span");
        deleteBtn.classList.add("Delete");
        deleteBtn.textContent = "X";
        listItem.appendChild(deleteBtn);
        this.ul.appendChild(listItem);
        deleteBtn.addEventListener("click", function () {
            shoppingItem.deleteStatus = true;
            listItem.remove();
            _this.updateCount();
        });
        listItem.addEventListener("click", function () {
            shoppingItem.markedStatus = !shoppingItem.isMarked;
            listItem.classList.toggle("change");
            _this.updateCount();
        });
        this.updateCount();
    };
    ShoppingApp.prototype.updateCount = function () {
        var marked = 0;
        var unmarked = 0;
        // const listItems =this.ul.getElementsByTagName("li");
        var listItems = Array.from(this.ul.getElementsByTagName("li"));
        for (var _i = 0, listItems_1 = listItems; _i < listItems_1.length; _i++) {
            var listItem = listItems_1[_i];
            if (listItem.classList.contains("change")) {
                marked++;
            }
            else {
                unmarked++;
            }
        }
        this.markedCountElement.textContent = "".concat(marked);
        this.unmarkedCountElement.textContent = "".concat(unmarked);
    };
    return ShoppingApp;
}());
document.addEventListener("DOMContentLoaded", function () {
    var itemList = [];
    new ShoppingApp(itemList);
});

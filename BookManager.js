"use strict";
exports.__esModule = true;
exports.BookManager = void 0;
var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.add = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype.findBook = function (id) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.id === id) {
                i = index;
            }
        });
        return i;
    };
    BookManager.prototype["delete"] = function (id) {
        var indexBookDelete = this.findBook(id);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
        else {
            throw new Error('delete error');
        }
    };
    BookManager.prototype.update = function (id, name) {
        var indexBookUpdate = this.findBook(id);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            throw new Error('update error');
        }
    };
    return BookManager;
}());
exports.BookManager = BookManager;

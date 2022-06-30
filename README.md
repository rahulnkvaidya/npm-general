npm install rps-general

#import

var rpspagination = require("rpspagination");

var limit = 20;
var nav = rpspagination.pageLimitToForm(page, limit);
var skip = nav["from"];
var page = nav["page"];

##======

rpspagination.getPager(count, page, limit, function(pagination) {
console.log(pagination)
});

##====== Output (demo)

pagination: {
totalItems: 7741,
currentPage: 1,
pageSize: 10,
totalPages: 775,
startPage: 1,
nextPage: 2,
previousPage: null,
endPage: 10,
startIndex: 0,
endIndex: 9,
previousIndex: 0,
nextIndex: 10,
pages: [
1,
2,
3,
4,
5,
6,
7,
8,
9,
10
]
}

###License MIT
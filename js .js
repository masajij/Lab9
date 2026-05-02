const bookData = [
    { no: 1, title: "A Programmer' guide to computer science : a virtual degree for the self taught developer", author: "Dr. William M Springer II", isbn: "195120400X" },
    { no: 2, title : "Ace the Data Science Interview Interview: 201 Real Interview", author: "Nick Singh", isbn: "0578973839" },
    { no: 3, title : "Coding for Kids: Python: Learn to Code", author: "Adrienne Tacke", isbn: "1641521759" }
];

let tableHTML = `
    <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Book Title</th>
                <th>Author</th>
                <th>ISBN</th>
            </tr>
        </thead>
        <tbody>
`;

bookData.forEach(book => {
    tableHTML += `
        <tr>
            <td>${book.no}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
        </tr>
    `;
});

tableHTML += `</tbody></table>`;

document.getElementById("table-container").innerHTML = tableHTML;
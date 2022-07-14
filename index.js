const characters =   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

let firstpasswordel = document.getElementById("Firstpass")
let secondpasswordel = document.getElementById("Secondpass")

function GeneratePassword() {
    let firstpassword = ""
    let secondpassword = ""

    for (let i = 0; i < 15; i++) {
        firstpassword += characters[Math.floor(Math.random() * characters.length)]
        secondpassword += characters[Math.floor(Math.random() * characters.length)]

    }

    firstpasswordel.textContent = firstpassword
    secondpasswordel.textContent = secondpassword


}

function CopyFirst(id) {
    var str = document.getElementById("Firstpass");
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
    copiedFirst()

}

function CopySecond(id) {
    var str = document.getElementById("Secondpass");
    window.getSelection().selectAllChildren(str);
    document.execCommand("Copy")
    copiedSecond()

}

function copiedFirst() {
    var str = document.getElementById("Firstpass");
    str.textContent = "Copied!"
}

function copiedSecond() {
    var str = document.getElementById("Secondpass");
    str.textContent = "Copied!"
}
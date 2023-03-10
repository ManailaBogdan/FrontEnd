let elemneteCart = 0;
let utilizator = null;



let utilizatori =[
    {
        email: 'manailabogdan@yahoo.com',
        password: '123456'
    }
    
];

// read the csv file


const path1 = '/firstProject.html';
const path2 = '/SignIn/signIn.html';
let pathUsers;

if(window.location.pathname == path1) 
    pathUsers = '/utilizatori.csv';
else if(window.location.pathname == path2)
    pathUsers = '../utilizatori.csv';


fetch(pathUsers)
    .then(response => response.text())
    .then(text => {
        let lines = text.split('\n');
        for (let i = 1; i < lines.length; i++) {
            let line = lines[i];
            let values = line.split(';');
            let user = {
                firstName: values[0],
                lastName: values[1],
                email: values[2],
                password: values[3],
                phone: values[4],
                date: values[5],
                address: values[6],
                city: values[7],
                county: values[8],
                country: values[9],
                zipCode: values[10],
                cart: values[11]
            };
            utilizatori.push(user);
        }
    });



console.log(utilizatori);






function addToCart() {

    if (!utilizator) {
    elemneteCart++;
    document.getElementById('nrProduse').innerHTML = elemneteCart;
    } else {
        utilizator.cart++;
        document.getElementById('nrProduse').innerHTML = utilizator.cart;
    }
}

function addTitle() {
    let title = document.getElementById('search').value;
    document.getElementById('search').value = '';
    document.getElementById('title').innerHTML = title;
}

function cautaUtilizator() {
    let email = document.getElementById('email').value;
    document.getElementById('email').value = '';
    let parola = document.getElementById('parola').value;
    document.getElementById('parola').value = '';
    
    let user = null;
    for (let i = 0; i < utilizatori.length; i++) {
        console.log(utilizatori[i].email);
        if (utilizatori[i].email == email && utilizatori[i].password == parola) {
            user = utilizatori[i];
        }
    }

    if (!user) 
        alert('Utilizatorul nu exista');
    else
        logIn(user);
}

function signIn() {
    window.open('../SignIn/signIn.html', '_self');
}

function addUtilizator() {
    

    let firstName = document.getElementById('firstName').value;
    document.getElementById('firstName').value = '';
    let lastName = document.getElementById('lastName').value;
    document.getElementById('lastName').value = '';
    let email = document.getElementById('email').value;
    document.getElementById('email').value = '';
    let password = document.getElementById('password').value;
    document.getElementById('password').value = '';
    let confirmPassword = document.getElementById('confPassword').value;
    document.getElementById('confPassword').value = '';
    let phone = document.getElementById('phone').value;
    document.getElementById('phone').value = '';
    let date = document.getElementById('date').value;
    document.getElementById('date').value = '';
    let address = document.getElementById('address').value;
    document.getElementById('address').value = '';
    let city = document.getElementById('city').value;
    document.getElementById('city').value = '';
    let county = document.getElementById('county').value;
    document.getElementById('county').value = '';
    let country = document.getElementById('country').value;
    document.getElementById('country').value = '';
    let zipCode = document.getElementById('zip').value;
    document.getElementById('zip').value = '';
    let terms = document.getElementById('terms').checked;
    document.getElementById('terms').checked = false;

    // if (password != confirmPassword) {
    //     alert('Parolele nu sunt identice');
    //     return;
    // }

    // if (!terms) {
    //     alert('Trebuie sa acceptati termenii si conditiile');
    //     return;
    // }
    user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        date: date,
        address: address,
        city: city,
        county: county,
        country: country,
        zipCode: zipCode,
        cart: 0
    };
    
    utilizatori.push(user);

    // write the csv file
    let csv = 'firstName;lastName;email;password;phone;date;address;city;county;country;zipCode;cart\n';
    for (let i = 0; i < utilizatori.length; i++) {
        csv += utilizatori[i].firstName + ';' + utilizatori[i].lastName + ';' + utilizatori[i].email + ';' + utilizatori[i].password + ';' + utilizatori[i].phone + ';' + utilizatori[i].date + ';' + utilizatori[i].address + ';' + utilizatori[i].city + ';' + utilizatori[i].county + ';' + utilizatori[i].country + ';' + utilizatori[i].zipCode + ';' + utilizatori[i].cart + '\n';
    }

    
    
   
    



    logIn(user);
}

function logIn(user) {
    utilizator = user;
    window.open('../firstProject.html', '_self');
    document.getElementById('nrProduse').innerHTML = utilizator.cart;
    document.getElementById('userInfo').innerHTML = utilizator.firstName + ' ' + utilizator.lastName;
}
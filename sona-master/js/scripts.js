//Function to register all users
function signup() {
    var fName = document.getElementById('firstName').value;
    var isfirstnameValid = checkLength(fName, 3)
    if (isfirstnameValid == false) {
        document.getElementById('firstnameError').innerHTML = "First Name should be at least 3 caracters"
        document.getElementById('firstnameError').style.color = 'red'
    }
    else {
        document.getElementById('firstnameError').innerHTML = ""
    }
    var lName = document.getElementById('lastName').value;
    var islastnameValid = checkLength(lName, 4)
    if (islastnameValid == false) {
        document.getElementById('lastnameError').innerHTML = "Last Name should be at least 4 caracters"
        document.getElementById('lastnameError').style.color = 'red'
    }
    else {
        document.getElementById('lastnameError').innerHTML = ""
    }
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var ispasswordValid = checkLength(password, 6)
    if (ispasswordValid == false) {
        document.getElementById('passwordError').innerHTML = "Password should be at least 6 caracters"
        document.getElementById('passwordError').style.color = 'red'
    }
    else {
        document.getElementById('passwordError').innerHTML = ""
    }
    var confirmPassword = document.getElementById('confirmPwd').value;
    var isconfirmpasswordValid = isEqual(password, confirmPassword)
    if (isconfirmpasswordValid == false) {
        document.getElementById('confirmpasswordError').innerHTML = " Please chekc your password "
        document.getElementById('confirmpasswordError').style.color = 'red'
    }
    else {
        document.getElementById('confirmpasswordError').innerHTML = ""
    }
    var tel = document.getElementById('tel').value;
    var istelValid = checkPhone(tel, 8)
    if (istelValid == false) {
        document.getElementById('telError').innerHTML = " Please chekc your tel "
        document.getElementById('telError').style.color = 'red'
    }
    else {
        document.getElementById('telError').innerHTML = ""
    }
    var adress = document.getElementById('adress').value;
    if (isfirstnameValid == true && islastnameValid == true && ispasswordValid == true && isconfirmpasswordValid == true && istelValid == true) {
        var usersTab = getFromLs('users');
        var user = {
            id: generatedId(usersTab) + 1,
            fName: fName,
            lName: lName,
            email: email,
            pwd: password,
            confirmPassword: confirmPassword,
            tel: tel,
            adress: adress,
            role: "client",
        }
        usersTab.push(user)
        localStorage.setItem('users', JSON.stringify(usersTab));
        location.replace('login.html')
    }

}
function signupGuestHouse() {
    var ghouseName = document.getElementById('ghouseName').value;
    var fName = document.getElementById('firstName').value;
    var isfirstnameValid = checkLength(fName, 3)
    if (isfirstnameValid == false) {
        document.getElementById('firstnameError').innerHTML = "First Name should be at least 3 caracters"
        document.getElementById('firstnameError').style.color = 'red'
    }
    else {
        document.getElementById('firstnameError').innerHTML = ""
    }
    var lName = document.getElementById('lastName').value;
    var islastnameValid = checkLength(lName, 4)
    if (islastnameValid == false) {
        document.getElementById('lastnameError').innerHTML = "Last Name should be at least 4 caracters"
        document.getElementById('lastnameError').style.color = 'red'
    }
    else {
        document.getElementById('lastnameError').innerHTML = ""
    }
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var ispasswordValid = checkLength(password, 6)
    if (ispasswordValid == false) {
        document.getElementById('passwordError').innerHTML = "Password should be at least 6 caracters"
        document.getElementById('passwordError').style.color = 'red'
    }
    else {
        document.getElementById('passwordError').innerHTML = ""
    }
    var confirmPassword = document.getElementById('confirmPwd').value;
    var isconfirmpasswordValid = isEqual(password, confirmPassword)
    if (isconfirmpasswordValid == false) {
        document.getElementById('confirmpasswordError').innerHTML = " Please chekc your password "
        document.getElementById('confirmpasswordError').style.color = 'red'
    }
    else {
        document.getElementById('confirmpasswordError').innerHTML = ""
    }
    var tel = document.getElementById('tel').value;
    var istelValid = checkPhone(tel, 8)
    if (istelValid == false) {
        document.getElementById('telError').innerHTML = " Please chekc your tel "
        document.getElementById('telError').style.color = 'red'
    }
    else {
        document.getElementById('telError').innerHTML = ""
    }
    var adressGuesthouse = document.getElementById('adress').value;
    if (isfirstnameValid == true && islastnameValid == true && ispasswordValid == true && isconfirmpasswordValid == true && istelValid == true) {
        var usersTab = getFromLs('users');
        var user = {
            id: generatedId(usersTab) + 1,
            ghouseName: ghouseName,
            fName: fName,
            lName: lName,
            email: email,
            pwd: password,
            confirmPassword: confirmPassword,
            tel: tel,
            adress: adressGuesthouse,
            role: "guestHouse",
            status: "NOK",
        }
        usersTab.push(user)
        localStorage.setItem('users', JSON.stringify(usersTab));
        location.replace('login.html')
    }

}
function signupAdmin() {
    var fName = document.getElementById('firstName').value;
    var isfirstnameValid = checkLength(fName, 3)
    if (isfirstnameValid == false) {
        document.getElementById('firstnameError').innerHTML = "First Name should be at least 3 caracters"
        document.getElementById('firstnameError').style.color = 'red'
    }
    else {
        document.getElementById('firstnameError').innerHTML = ""
    }
    var lName = document.getElementById('lastName').value;
    var islastnameValid = checkLength(lName, 4)
    if (islastnameValid == false) {
        document.getElementById('lastnameError').innerHTML = "Last Name should be at least 4 caracters"
        document.getElementById('lastnameError').style.color = 'red'
    }
    else {
        document.getElementById('lastnameError').innerHTML = ""
    }
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var ispasswordValid = checkLength(password, 6)
    if (ispasswordValid == false) {
        document.getElementById('passwordError').innerHTML = "Password should be at least 6 caracters"
        document.getElementById('passwordError').style.color = 'red'
    }
    else {
        document.getElementById('passwordError').innerHTML = ""
    }
    var confirmPassword = document.getElementById('confirmPwd').value;
    var isconfirmpasswordValid = isEqual(password, confirmPassword)
    if (isconfirmpasswordValid == false) {
        document.getElementById('confirmpasswordError').innerHTML = " Please chekc your password "
        document.getElementById('confirmpasswordError').style.color = 'red'
    }
    else {
        document.getElementById('confirmpasswordError').innerHTML = ""
    }
    var tel = document.getElementById('tel').value;
    var istelValid = checkPhone(tel, 8)
    if (istelValid == false) {
        document.getElementById('telError').innerHTML = " Please chekc your tel "
        document.getElementById('telError').style.color = 'red'
    }
    else {
        document.getElementById('telError').innerHTML = ""
    }
    var adress = document.getElementById('adress').value;
    if (isfirstnameValid == true && islastnameValid == true && ispasswordValid == true && isconfirmpasswordValid == true && istelValid == true) {
        var usersTab = getFromLs('users');
        var user = {
            id: generatedId(usersTab) + 1,
            fName: fName,
            lName: lName,
            email: email,
            pwd: password,
            confirmPassword: confirmPassword,
            tel: tel,
            adress: adress,
            role: "Admin",
        }
        usersTab.push(user)
        localStorage.setItem('users', JSON.stringify(usersTab));
        location.replace('login.html')
    }

}
function addGuestHouse() {
    var ghouseName = document.getElementById('ghouseName').value;
    var isghouseNameValid = checkLength(ghouseName, 4);
    if (isghouseNameValid == false) {
        document.getElementById('ghnameError').innerHTML = 'Guest House Name should have at least 4 caracters';
        document.getElementById('ghnameError').style.color = 'red'
    }
    else {
        document.getElementById('ghnameError').innerHTML = "";
    }
    var ghouseCountry = document.getElementById('ghouseCountry').value;
    var isghouseCountryValid = checkLength(ghouseCountry, 4);
    if (isghouseCountryValid == false) {
        document.getElementById('ghcountryError').innerHTML = 'Guest House Country should have at least 4 caracters';
        document.getElementById('ghcountryError').style.color = 'red'
    }
    else {
        document.getElementById('ghcountryError').innerHTML = "";
    }
    var ghouseCity = document.getElementById('ghouseCity').value;
    var isghouseCityValid = checkLength(ghouseCity, 3);
    if (isghouseCityValid == false) {
        document.getElementById('ghcityError').innerHTML = 'Guest House Country should have at least 3 caracters';
        document.getElementById('ghcityError').style.color = 'red'
    }
    else {
        document.getElementById('ghcityError').innerHTML = "";
    }
    var ghouseDescription = document.getElementById('ghouseDescription').value;
    var ghouseroomsNumber = document.getElementById('ghouseroomsNumber').value;
    if (isghouseNameValid == true && isghouseCountryValid == true && isghouseCityValid == true) {
        var ghousesTab = getFromLs('ghouses');
        var connectedUserId = localStorage.getItem('connectedUserId');
        var ghouse = {
            id: generatedId(ghousesTab) + 1,
            ghName: ghouseName,
            ghCountry: ghouseCountry,
            ghCity: ghouseCity,
            ghDescription: ghouseDescription,
            ghouseroomsNumber: ghouseroomsNumber,
            idGhouse: connectedUserId,
        }

        ghousesTab.push(ghouse);
        localStorage.setItem("ghouses", JSON.stringify(ghousesTab));

    }
}
function addRooms() {
    var roomName = document.getElementById('roomName').value;
    var isroomNameValid = checkLength(roomName, 4);
    if (isroomNameValid == false) {
        document.getElementById('rnameError').innerHTML = 'Room Name should have at least 4 caracters';
        document.getElementById('rnameError').style.color = 'red'
    }
    else {
        document.getElementById('rnameError').innerHTML = "";
    }
    var rPrice = document.getElementById('roomPrice').value;
     var isrpriceValid= isMoreThan (rPrice,0);
     if(isrpriceValid){
        document.getElementById('rpriceError').innerHTML="Price should be >0!";
    }
    else {
        document.getElementById('rpriceError').innerHTML="";
    }
    var roomSize = document.getElementById('roomSize').value;
    var roomCapacity = document.getElementById('roomCapacity').value;
    var rBed = document.getElementById('roomBed').value;
    var rservices = document.getElementById('roomServices').value;
    var rDescription = document.getElementById('roomDescription').value;
    var availaiblerNight= document.getElementById('availableroomNight').value;
    var isavailablernightValid= isMoreThan(availaiblerNight,3);
    if(isavailablernightValid){
        document.getElementById('availablernightError').innerHTML="Available room Night Number should be >3!";
    }
    else {
        document.getElementById('availablernightError').innerHTML="";
    }
    if (isroomNameValid == true && isrpriceValid == true && isavailablernightValid == true) {
        var roomsTab = getFromLs('rooms');
        var displayGhouseId = localStorage.getItem('displayGhouseId');
        var room = {
            id: generatedId(roomsTab) + 1,
            rName: roomName,
            rPrice: rPrice,
            rSize: roomSize,
            rCapacity: roomCapacity,
            rBed: rBed,
            rservices: rservices,
            rDescription: rDescription,
            availaibleroomNight:availaiblerNight,
            idGhouse: displayGhouseId,
        }
        roomsTab.push(room);
        localStorage.setItem("rooms", JSON.stringify(roomsTab));

    }
}
function displaygHouses() {
    var ghousesTab = getFromLs('ghouses');
    var content = '';
    for (var i = 0; i < ghousesTab.length; i++) {
        content = content + `
       <div class="col-lg-4 col-md-6">
       <div class="room-item">
           <img src="img/Guest Houses/ghouse ${i + 1}.jpg" alt="">
           <div class="ri-text">
               <h4>${ghousesTab[i].ghName}</h4>
               <table>
                   <tbody>
                       
                       <tr>
                           <td class="r-o">Country:</td>
                           <td>${ghousesTab[i].ghCountry}</td>
                       </tr>
                      
                      
                   </tbody>
               </table>
               <button class="btn btn-primary" onclick="goToDisplayghouse(${ghousesTab[i].id})">More Deatails</button>
           </div>
       </div>
   </div>
       
       `

    }
    document.getElementById('ghousesDiv').innerHTML = content;
}
function goToDisplayghouse(id) {
    localStorage.setItem('displayGhouseId', id);
    location.replace('ghouseDetails.html')
}


function displayghousesDetails() {
    var id = localStorage.getItem('displayGhouseId');
    var ghousesTab = getFromLs('ghouses');
    var displayghouses;
    for (var i = 0; i < ghousesTab.length; i++) {
        if (ghousesTab[i].id == id) {
            displayghouses = ghousesTab[i];
            break;
        }

    }
    document.getElementById('ghnameDiv').innerHTML = displayghouses.ghName;
    document.getElementById('ghcountryDiv').innerHTML = displayghouses.ghCountry;
    document.getElementById('ghcityDiv').innerHTML = displayghouses.ghCity;
    document.getElementById('ghdescriptionDiv').innerHTML = displayghouses.ghDescription;
}

function displayrooms() {

    var id = localStorage.getItem('displayGhouseId');
    var roomsTab = getFromLs('rooms');
    var content = '';
    for (var i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].idGhouse == id) {
            content = content + `
            
            <div class="col-lg-8">
            <div class="room-details-item">
            <h2 style="margin-left: 30%;">Our Room</h2>
            <img src="img/room/room-details.jpg" width="150%" alt="">
                <div class="rd-text">
                    <div class="rd-title container">
                    
                        <h3>${roomsTab[i].rName}</h3>
                        
                    <h2>${roomsTab[i].rPrice} Dt<span>/Pernight</span></h2>
                    <table>
                        <tbody>
                            <tr>
                                <td class="r-o">Size:</td> 
                                <td>${roomsTab[i].rSize}</td>
                            </tr>
                            <tr>
                                <td class="r-o">Capacity:</td> 
                                <td>${roomsTab[i].rCapacity}</td>
                            </tr>
                            <tr>
                                <td class="r-o">Bed:</td> 
                                <td>${roomsTab[i].rBed}</td>
                            </tr>
                            <tr>
                                <td class="r-o">Services:</td>
                                <td>${roomsTab[i].rservices}</td>
                            </tr>
                        </tbody>
                    </table>
                    <td class="r-o">Description:</td>
                    <p>${roomsTab[i].rDescription}</p>
                    <div>
                    <input type="number" placeholder="Please choose number of night" id="nightNumber${roomsTab[i].id}">
                    
                    <button class="btn btn-primary" onclick="bookingNow(${roomsTab[i].id})">Booking Now</button></div>
                    <span id="nightnumberroomError"></span>
                    </div>
                </div>
                </div>
            </div>
        
        </div>
      
            `
        }

    }
    document.getElementById('roomsDiv').innerHTML = content;
}
function login() {
    var emailValue = document.getElementById('email').value;
    var passwordValue = document.getElementById('password').value;
    var findedUser;
    var userTab = getFromLs('users');
    for (var i = 0; i < userTab.length; i++) {
        if (userTab[i].email == emailValue && userTab[i].pwd == passwordValue) {
            findedUser = userTab[i];
            break;
        }
    }
    if (findedUser) {
        if (findedUser.role == 'client') {
            localStorage.setItem('connectedUserId', findedUser.id);
            location.replace('index.html');
        }
        else if (findedUser.role == 'guestHouse') {
            if (findedUser.status == 'NOK') {
                document.getElementById('ghstatusError').innerHTML = 'Account not yet verified';
                document.getElementById('ghstatusError').style.color = 'red';
            }
            else {
                localStorage.setItem('connectedUserId', findedUser.id);
                location.replace('ghOwnerDashboard.html');
            }
        }
        else {
            localStorage.setItem('connectedUserId', findedUser.id);
            location.replace('admin.html');
        }
    }
    else {
        document.getElementById('loginError').innerHTML = 'Please check email/pwd'
        document.getElementById('loginError').style.color = 'red'
    }
}
function generateHeader() {
    var connectedUserId=localStorage.getItem('connectedUserId');
var content='';
var connectedUser= searchObject(connectedUserId,'users');
if (connectedUserId) {
    if (connectedUser.role=="client") {
        content=   `<li class="active"><a href="./index.html">Home</a></li>
        <li><a href="guesthouses.html">Our Guest Houses</a></li>
        <li><a href="./about-us.html">About Us</a></li>
        <li><a href="./pages.html">Pages</a>
            <ul class="dropdown">
                <li><a href="guesthouses.html">Guest Houses</a></li>    
                <li><a href="ghouseDetails.html">Guest Hoouses Deatils</a></li>
            </ul>
        </li>
        <li><a href="profile.html">Hello ${connectedUser.fName} ${ connectedUser.lName}</a></li>
        <li><a href="./blog.html">News</a></li>
        <li><a href="./contact.html">Contact</a></li>
        <li><a onclick='logout()'>Logout</a></li>
        `  
        
    }
    else if (connectedUser.role=="guestHouse") {
        content=   `<li class="active"><a href="./index.html">Home</a></li>
       
        <li><a href="ghOwnerDashboard.html">Hello ${connectedUser.ghouseName}</a></li>
        <li><a href="./blog.html">News</a></li>
        <li><a href="./contact.html">Contact</a></li>
        <li><a onclick='logout()'>Logout</a></li>`  
    }
    else{
        content=   `<li class="active"><a href="./index.html">Home</a></li>
       
        <li><a href="admin.html">Hello Admin ${connectedUser.fName}</a></li>
        <li><a href="./blog.html">News</a></li>
        <li><a href="./contact.html">Contact</a></li>
        <li><a onclick='logout()'>Logout</a></li>` 
    }
   
    
}
else{
    //not connected
    content=`
    <li class="active"><a href="./index.html">Home</a></li>
<li><a href="guesthouses.html">Our Guest Houses</a></li>

<li><a href="./about-us.html">About Us</a></li>
<li><a href="login.html">Login</a></li>
<li>Are you a <a href="Signup.html">Client</a> or a <a href="SignupGuesthouse.html">Guest House </a>?</li>
<li><a href="./contact.html">Contact</a></li>
`

}
document.getElementById('headerId').innerHTML=content;
}
function logout() {
    localStorage.removeItem('connectedUserId');
    location.replace('index.html');
}
function displayProfile() {
    var connectedUserId=localStorage.getItem('connectedUserId');
    var content='';
    var connectedUser= searchObject(connectedUserId,'users');
    if (connectedUserId) {
        content=`
    	<section class="login_box_area section_gap">
		
			<div class="row">
            <img  src="img/hero/hero-4.jpeg" width="200px" alt="">
				
					<div class="login_form_inner">
						
						<div class="row login_form" >
							<div>
                           
							</div>
							
							<div class="col-md-12 form-group">
								<input type="text" class="form-control"  placeholder="${connectedUser.fName}">
                                
							</div>
                            <div class="col-md-12 form-group">
								<input type="text" class="form-control"  placeholder="${connectedUser.lName}">
                                
							</div>
                            <div class="col-md-12 form-group">
								<input type="email" class="form-control"  placeholder="${connectedUser.email}" >
							</div>
							
                            <div class="col-md-12 form-group">
								<input type="tel" class="form-control"  placeholder="${connectedUser.tel}">
                                
							</div>
							
						</div>
					</div>
				
			</div>
			
			
		
	</section>
        
        `
    }
    document.getElementById('profileId').innerHTML=content;
}
function bookingNow(roomId) {
    var nightNumber = document.getElementById(`nightNumber${roomId}`).value;
   
    var userId = localStorage.getItem('connectedUserId');

    var ghouseId = localStorage.getItem('displayGhouseId');
    var room= searchObject(roomId,'rooms');
    var roomId = roomId
    if (Number(nightNumber)>0 && Number(nightNumber)<= room.availaibleroomNight) {
        var ordersTab = getFromLs('orders')
    var order = {
        id: generatedId(ordersTab) + 1,
        userId: userId,
        ghouseId: ghouseId,
        idRoom: roomId,
        nightNumber: nightNumber,
    }
    ordersTab.push(order);
    localStorage.setItem('orders', JSON.stringify(ordersTab));
    updateRoomavailibility(roomId,Number(nightNumber));
    location.replace('displayMyorders.html');
    }
    else{
     document.getElementById('nightnumberroomError').innerHTML="Room unavailable";
     document.getElementById('nightnumberroomError').style.color="red";
    }
    

}
function updateRoomavailibility(id,nightNumber){
    var roomsTab=JSON.parse(localStorage.getItem('rooms')||'[]');
    for(var i=0; i<roomsTab.length; i++){
        if(roomsTab[i].id==id){
            roomsTab[i].availaibleroomNight=roomsTab[i].availaibleroomNight-nightNumber;
            break;
        }
    }
    localStorage.setItem('rooms',JSON.stringify(roomsTab));
   }
function displayMyOrders() {

    var ordersTab = getFromLs('orders');
    var connectedUserId = localStorage.getItem('connectedUserId');
    content = '';
    var totalSum = 0;
    var myOrdersTab = [];
    for (var i = 0; i < ordersTab.length; i++) {
        if (connectedUserId == ordersTab[i].userId) {
            myOrdersTab.push(ordersTab[i])
        }
    }
    for (var i = 0; i < myOrdersTab.length; i++) {
        totalSum = totalSum + myOrdersTab[i].nightNumber * searchObject(myOrdersTab[i].idRoom, 'rooms').rPrice;
        content = content + `
        <tr>
       <td>
       ${myOrdersTab[i].id}  
       </td>
       <td>
           ${searchObject(myOrdersTab[i].userId, "users").fName}
           </td>
       <td>
           ${searchObject(myOrdersTab[i].ghouseId, "ghouses").ghName}
           </td>
           <td>
           ${searchObject(myOrdersTab[i].idRoom, "rooms").rName}
           </td>
           <td>
           ${searchObject(myOrdersTab[i].idRoom, "rooms").rPrice}
           </td>
           <td>
           ${myOrdersTab[i].nightNumber}
           </td>

       <td>
       ${myOrdersTab[i].nightNumber * searchObject(myOrdersTab[i].idRoom, "rooms").rPrice}
       </td>
       <td> <button class="btn btn-danger" onclick="deleteOrder(${myOrdersTab[i].id})"> Delete </button> </td>

   </tr>
        `
    }

    content = content + `totalSum: ${totalSum}`;
    document.getElementById('ordersDiv').innerHTML = content;
}
function serchOrderPositionById(id) {
    var position;
    var ordersTab = getFromLs('orders');
    for (var i = 0; i < ordersTab.length; i++) {
        if (ordersTab[i].id == id) {
            position = i;
            break;
        }

    }
    return position;
}
function deleteOrder(id) {
    var ordersTab = getFromLs('orders');
    var pos = serchOrderPositionById(id)
    var order= searchObject(id,'orders');
    var rooms= getFromLs('rooms');
    for (var i = 0; i < rooms.length; i++) {
       if (rooms[i].id==id) {
        rooms[i].availaibleroomNight= Number(rooms[i].availaibleroomNight)+ Number(order.nightNumber);
        break;
       }
    }
    ordersTab.splice(pos, 1);
    localStorage.setItem('orders', JSON.stringify(ordersTab))

    location.reload();

}
function displayghOwnerProducts() {
    var ghousesTab = getFromLs('ghouses');
    var connectedUserId = localStorage.getItem('connectedUserId');
    myProducts = [];
    for (var i = 0; i < ghousesTab.length; i++) {
        if (ghousesTab[i].idGhouse == connectedUserId) {
            myProducts.push(ghousesTab[i]);
        }
    }
    var content = "";
    for (var i = 0; i < myProducts.length; i++) {
        content = content + `
        <tr>
                                    
                                    <td scope="col">${myProducts[i].id}</td>
                                    <td scope="col">${myProducts[i].ghName}</td>
                                    <td scope="col">${myProducts[i].ghCountry}</td>
                                    <td scope="col">${myProducts[i].ghCity} </td>
                                    <td scope="col">${myProducts[i].ghDescription}</td>
                                    <td scope="col">${myProducts[i].ghouseroomsNumber}</td>
                                    <td scope="col">
                                    <button class='btn btn-warning' onclick=''>Update</>
                                    <button class='btn btn-danger' onclick=''>Delete</>
                                    </td>
                                </tr>
       
        `

    }
    document.getElementById('productsghouseeDiv').innerHTML = content;
}

//  order : id, userId,idRoom, ghouseId
// get connected User ID
// get all orders
// get all guest houses
// search from guest houses where connected user id ==  (serach MY houses)




function ownerOrders() {
    var connectedUserId = localStorage.getItem("connectedUserId");
    // Start searching my houses
    var houses = getFromLs("ghouses");
    var myHouses = [];
    for (var i = 0; i < houses.length; i++) {
        if (connectedUserId == houses[i].idGhouse) {
            myHouses.push(houses[i]);
        }
    }
    //console.log("Here my houses", myHouses);
    // End searching my houses

    var orders = getFromLs("orders");
    var myOrders = [];
    for (let i = 0; i < myHouses.length; i++) {
        for (let j = 0; j < orders.length; j++) {
            if (myHouses[i].id == orders[j].ghouseId) {
                myOrders.push(orders[j]);
            }
        }
    }
    var content = '';
    var totalSum = 0;
    for (var i = 0; i < myOrders.length; i++) {
        totalSum = totalSum + myOrders[i].nightNumber * searchObject(myOrders[i].idRoom, 'rooms').rPrice;
        content = content + `
        <tr>
       <td>
       ${myOrders[i].id}  
       </td>
       <td>
       ${myOrders[i].ghouseId}  
       </td>
       <td>
           ${searchObject(myOrders[i].userId, "users").fName}
           </td>
       <td>
           ${searchObject(myOrders[i].ghouseId, "ghouses").ghName}
           </td>
           <td>
           ${searchObject(myOrders[i].idRoom, "rooms").rName}
           </td>
           <td>
           ${searchObject(myOrders[i].idRoom, "rooms").rPrice}
           </td>
           <td>
           ${myOrders[i].nightNumber}
           </td>

       <td>
       ${myOrders[i].nightNumber * searchObject(myOrders[i].idRoom, "rooms").rPrice}
       </td>
       <td> <button class="btn btn-danger" onclick="deleteOrder(${myOrders[i].id})"> Delete </button> </td>

   </tr>
        `
    }
    content = content + `totalSum: ${totalSum} Dt`;
    document.getElementById('ordersDiv').innerHTML = content;


    //console.log("Here my orders", myOrders);


}
function displayAdminProducts() {
    var roomsTab = getFromLs('rooms')
    var content = "";
    for (var i = 0; i < roomsTab.length; i++) {
        content = content + `
       <tr>
                                    
       <td scope="col">${roomsTab[i].id}</td>
       <td scope="col">${roomsTab[i].idGhouse}</td>
       <td scope="col">${roomsTab[i].rName}</td>
       <td scope="col">${roomsTab[i].rCapacity} </td>
       <td scope="col">${roomsTab[i].rPrice}</td>
       <td scope="col">${roomsTab[i].rservices}</td>
       <td scope="col">${roomsTab[i].availaibleroomNight}</td>
       <td scope="col">
       <button class='btn btn-warning' onclick='updateProductByAdmin(${roomsTab[i].id})'>Update</>
       <button class='btn btn-danger' onclick='deleteProductByAdmin(${i})'>Delete</>
       </td>
   </tr>

       `

    }
    document.getElementById('roomsAdminDiv').innerHTML = content;
}
function displayAdminUsers() {
    var usersTab = JSON.parse(localStorage.getItem('users') || "[]");

    var content = "";
    ghOwnerAndClients = [];
    for (var i = 0; i < usersTab.length; i++) {
        if (usersTab[i].role!="Admin") {
            ghOwnerAndClients.push(usersTab[i]);
        }

    }
    var isDisplayed = false;
    for (var i = 0; i < ghOwnerAndClients.length; i++) {
        isDisplayed = (ghOwnerAndClients[i].role == 'guestHouse' && ghOwnerAndClients[i].status == 'NOK');
        if (isDisplayed == true) {
            content = content + `
        <tr>
                                     
                                     <td scope="col">${ghOwnerAndClients[i].id}</td>
                                     <td scope="col">${ghOwnerAndClients[i].ghouseName}</td>
                                     <td scope="col">${usersTab[i].fName}</td>
                                     <td scope="col">${ghOwnerAndClients[i].lName}</td>
                                     <td scope="col">${ghOwnerAndClients[i].email}</td>
                                     <td scope="col">${ghOwnerAndClients[i].pwd}</td>
                                     <td scope="col">${ghOwnerAndClients[i].tel}</td>
                                     <td scope="col">${ghOwnerAndClients[i].adress}</td>
                                     <td scope="col">${ghOwnerAndClients[i].status}</td>
                                     <td scope="col">${ghOwnerAndClients[i].role}</td>
                                     <td scope="col">
                                     <button class='btn btn-danger' onclick='deleteUsersByAdmin(${ghOwnerAndClients[i].id})'>Delete</>
                                     <button class='btn btn-warning' onclick='validateUsersByAdmin(${ghOwnerAndClients[i].id})'>Validate</>
                                    
                                     </td>
                                 </tr>
        `

        }
        else {
            content = content + `
        <tr>
                                     
                                     <td scope="col">${ghOwnerAndClients[i].id}</td>
                                     <td scope="col">${ghOwnerAndClients[i].ghouseName}</td>
                                     <td scope="col">${ghOwnerAndClients[i].fName}</td>
                                     <td scope="col">${ghOwnerAndClients[i].lName}</td>
                                     <td scope="col">${ghOwnerAndClients[i].email}</td>
                                     <td scope="col">${ghOwnerAndClients[i].pwd}</td>
                                     <td scope="col">${ghOwnerAndClients[i].tel}</td>
                                     <td scope="col">${ghOwnerAndClients[i].adress}</td>
                                     <td scope="col">${ghOwnerAndClients[i].status}</td>
                                     <td scope="col">${ghOwnerAndClients[i].role}</td>
                                     <td scope="col">
                                     <button class='btn btn-danger' onclick='deleteUsersByAdmin(${ghOwnerAndClients[i].id})'>Delete</>
                                    
                                     </td>
                                 </tr>
        `
        }


    }

    document.getElementById('usersAdminDiv').innerHTML = content;
}
function displayAdminOrders() {
    var ordersTab = getFromLs('orders');
    var content = '';
    var totalSum = 0;
    for (var i = 0; i < ordersTab.length; i++) {
        totalSum = totalSum + ordersTab[i].nightNumber * searchObject(ordersTab[i].idRoom, 'rooms').rPrice;
        content = content + `
        <tr>
       <td>
       ${ordersTab[i].id}  
       </td>
       <td>
       ${ordersTab[i].ghouseId}  
       </td>
       <td>
           ${searchObject(ordersTab[i].userId, "users").fName}
           </td>
       <td>
           ${searchObject(ordersTab[i].ghouseId, "ghouses").ghName}
           </td>
           <td>
           ${searchObject(ordersTab[i].idRoom, "rooms").rName}
           </td>
           <td>
           ${searchObject(ordersTab[i].idRoom, "rooms").rPrice}
           </td>
           <td>
           ${ordersTab[i].nightNumber}
           </td>

       <td>
       ${ordersTab[i].nightNumber * searchObject(ordersTab[i].idRoom, "rooms").rPrice}
       </td>
       <td> <button class="btn btn-danger" onclick="deleteOrder(${ordersTab[i].id})"> Delete </button> </td>

   </tr>
        `
    }
    content = content + `totalSum: ${totalSum}`;
    document.getElementById('ordersDiv').innerHTML = content;
}
function deleteUsersByAdmin(id) {
    var users = getFromLs('users');
    var position;
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            position = i;
            break;
        }
    }
    users.splice(position, 1);
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
}
function validateUsersByAdmin(id) {
    var users = getFromLs('users');
    for (var i = 0; i < users.length; i++) {
        if (users[i].id == id) {
            users[i].status = 'Ok';
            break;
        }
    }
    localStorage.setItem('users', JSON.stringify(users));
    location.reload();
}
function updateProductByAdmin(id) {
    var rooms = searchObject(id, 'rooms');
    var form = `
    <div class="row login_form" >
                            <div class="col-md-12 form-group">
                            <input type="number" class="form-control" id='newGhouse' value=${rooms.idGhouse}>
                            </div>
                            <div class="col-md-12 form-group">
								<input type="text" class="form-control" id='newName' value=${rooms.rName}>
                                
							</div>
                            <div class="col-md-12 form-group">
								<input type="number" class="form-control" id='newCapacity' value=${rooms.rCapacity}>
                               
							</div>
                            <div class="col-md-12 form-group">
								<input type="number" class="form-control" id='newPrice' value=${rooms.rPrice}>
                               
							</div>
                            <div class="col-md-12 form-group">
                            <input type="number" class="form-control" id='newavailaiblenight' value=${rooms.availaibleroomNight}>
                           
                        </div>
                           
                            
							<div class="col-md-12 form-group">
								<button type="submit" value="submit" class="primary-btn" onclick='validateEdit(${(rooms.id)})'>Validate</button>
								
							</div>
						</div>
    `
    document.getElementById('updateRId').innerHTML = form;
}

function validateEdit(id) {
    var newGhouse = document.getElementById('newGhouse').value;
    var newRname = document.getElementById('newName').value;
    var newCapacity = document.getElementById('newCapacity').value;
    var newPrice = document.getElementById('newPrice').value;
    var newavailaiblenight= document.getElementById('newavailaiblenight').value;
    var roomsTab = JSON.parse(localStorage.getItem('rooms') || "[]");
    for (var i = 0; i < roomsTab.length; i++) {
        if (roomsTab[i].id == id) {
            roomsTab[i].idGhouse = newGhouse;
            roomsTab[i].rName = newRname;
            roomsTab[i].rCapacity = newCapacity;
            roomsTab[i].rPrice = newPrice;
            roomsTab[i].availaibleroomNight=newavailaiblenight;
            break;
        }

    }
    localStorage.setItem('rooms', JSON.stringify(roomsTab));
    location.reload();
}
function deleteProductByAdmin(pos) {
    var roomsTab = JSON.parse(localStorage.getItem('rooms') || "[]");
    roomsTab.splice(pos, 1);
    localStorage.setItem('rooms', JSON.stringify(roomsTab));
    location.reload;

}


function checkLength(ch, nb) {
    return (ch.length >= nb);
}
function isEqual(ch1, ch2) {
    return (ch1 == ch2);
}
function checkPhone(ch, nb) {
    return (ch.length == nb);
}
function checkNumber(n1, n2) {
    return (Number(n1) > n2);
}
function isMoreThan(n1,n2){
    return(Number (n1)>n2);
}
function generatedId(T) {
    var max;
    if (T.length == 0) {
        max = 0;
    }
    else {
        max = T[0].id;
    }
    for (var i = 0; i < T.length; i++) {
        if (T[i].id > max) {
            max = T[i].id;
        }

    }
    return max;
}
function getFromLs(key) {
    return JSON.parse(localStorage.getItem(key) || "[]");
}
function searchObject(id, key) {
    var T = JSON.parse(localStorage.getItem(key) || '[]');
    var findedObj;
    for (var i = 0; i < T.length; i++) {
        if (T[i].id == id) {
            findedObj = T[i];
            break;
        }
    }
    return findedObj;
}
function serachProduct() {
    var searchName= document.getElementById('searchName').value;
    var findedghouse=[];
    var ghouse=JSON.parse(localStorage.getItem('ghouses') || "[]");
    for (var i = 0; i < ghouse.length; i++) {
       if ((ghouse[i].ghName==searchName)) {
        findedghouse.push(ghouse[i])
       }
        
    }
    var content='';
    for (i =0; i <  findedghouse.length; i++) {
        content = content + `
        <div >
        <div class="room-item">
        <img src="img/Guest Houses/ghouse ${i + 1}.jpg" alt="" width="500px">
            <div class="ri-text">
                <h4>${findedghouse[i].ghName}</h4>
                <table>
                    <tbody>
                        
                        <tr>
                            <td class="r-o">Country:</td>
                            <td>${findedghouse[i].ghCountry}</td>
                        </tr>
                       
                       
                    </tbody>
                </table>
                <button class="btn btn-primary" onclick="goToDisplayghouse(${findedghouse[i].id})">More Deatails</button>
            </div>
        </div>
    </div>
        
        `
 
     }
     document.getElementById('searchDiv').innerHTML = content;
}
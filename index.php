<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <!-- CSS  -->
      <link rel="stylesheet" href="style.css">
      <title>Table </title>
   </head>
   <body>
      <!-- Right side  bttton -->
   <div class="dropdown" >
  <button class="dropbtn">Select How Many Row</button>
  <div class="dropdown-content">
  <a href="#" onclick="toDo(5);">Row 5</a>
  <a href="#" onclick="toDo(10);">Row 10</a>
  <a href="#"onclick="toDo(15);">Row 15</a>
  <a href="#" onclick="toDo(20);">Row 20</a>
  </div>
</div>
<section>
      <table id="myTable">
         <tr>
            <th>FirstName</th>
            <th>LastName</th>
            <th>Email</th>
            <th>Contact_No</th>
            <th>Age</th>
            <th>Address</th>
            <th>Company</th>
            <th>Designation</th>
         </tr>
      </table>
</section>
      <script src="script.js"></script>  
   </body>
</html>
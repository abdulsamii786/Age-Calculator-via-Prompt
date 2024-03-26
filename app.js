function calculation(currentYear, birthYear) {
  let age = currentYear - birthYear;
  if (age <= 40) {
    swal.fire(`You Are ${age} Years Young!`);
  } else {
    swal.fire(`You Are ${age} Years Old!`);
  }
}

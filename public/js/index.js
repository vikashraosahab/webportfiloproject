const dayDateandTime = document.querySelector('.day_date_time');

const wheatherApi = ()=>{
   // this is array of day name

  const WeekDay = [
  	'Sunday',
  	'Monday',
  	'Tuesday',
  	'Wednesday',
  	'Thrusday',
  	'Friday',
  	'Saturday',
  	];
  const currentWeekDay = new Date();
  console.log(WeekDay[currentWeekDay.getDay()]);

  // this is array of months 

  const MonthName = [
      'January',
      "Feburary",
      'March',
      'April',
      "May",
      "June",
      "July",
      "August",
      "Septemper",
      "November",
      "December"
  	];

   console.log(MonthName[currentWeekDay.getMonth()]);
   console.log(currentWeekDay.getDate());
   console.log(currentWeekDay.getHours());
   console.log(currentWeekDay.getMinutes());
   console.log(currentWeekDay.getSeconds())

   if(currentWeekDay.getHours < 12){
   	   console.log('Pm');
   }else{
   	 console.log('Am');
   }
   
 }

wheatherApi();
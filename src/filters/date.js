export default function(second=0){
  var d = new Date(second *1000);
  var date = `${d.getFullYear()}/${d.getMonth()+1}/${d.getDate()}`;
  return date;
}
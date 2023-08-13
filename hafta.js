
let yeniSatir = "\r\n";
let metin = "1-Pazartesi"+yeniSatir
+"2-Sali" +yeniSatir
+"3-Carsamba"+yeniSatir
+"4-Persembe"+yeniSatir
+"5-Cuma"+yeniSatir
+"6-Cumartesi"+yeniSatir
+"7-Pazar"+yeniSatir;
+"Lutfen bir deger giriniz"

let deger = prompt(metin);
switch(deger)
{
    case "1":
    console.log("Pazartesi")
    break;

    case "2":
    console.log("Sali")
    break;

    case "3":
    console.log("Carsamba");
    break;

    case "4":
    console.log("Persembe");
    break;

    case "5":
    console.log("cuma");
    break;
    
    case "6":
    console.log("Cumartesi");
    break;
    
    case "7":
    console.log("Pazar");
    break;

    default:
    console.log("lutfen gecerli bir deger giriniz");



}





    


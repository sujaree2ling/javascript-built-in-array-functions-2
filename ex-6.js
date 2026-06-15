const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // แปลงค่าที่รับเข้ามาให้เป็นตัวพิมพ์เล็กทั้งหมดเพื่อป้องกันปัญหาการพิมพ์ตัวเล็ก/ใหญ่ไม่ตรงกัน
  const brandToSearch = carBrand.toLowerCase();

  // 1. ตรวจสอบว่ามียี่ห้อรถนี้ใน Collection แล้วหรือยัง
  if (carCollection.includes(brandToSearch)) {
    const position = carCollection.indexOf(brandToSearch) + 1;
    return `${brandToSearch} has already existed in the ${position} position of car collection.`;
  } else {
    carCollection.push(brandToSearch);
    return `new car collection is : ${carCollection.join(",")}.`;
    
  }
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.